import React, { useState, useEffect } from 'react';
import '../css/game.css';

const usePaddleMovement = (webSocket) => {
    const [keysPressed, setKeysPressed] = useState({});

    useEffect(() => {
        if (!webSocket) return;

        const handleKeyDown = (e) => {
            setKeysPressed((prev) => ({ ...prev, [e.key]: true }));
        };

        const handleKeyUp = (e) => {
            setKeysPressed((prev) => ({ ...prev, [e.key]: false }));
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [webSocket]);

    useEffect(() => {
        if (!webSocket) return;

        const interval = setInterval(() => {
            if (keysPressed['w'] || keysPressed['W']) {
                webSocket.send(JSON.stringify({ action: 'paddleup', side: 'left' }));
            }
            if (keysPressed['s'] || keysPressed['S']) {
                webSocket.send(JSON.stringify({ action: 'paddledown', side: 'left' }));
            }
            if (keysPressed['ArrowUp']) {
                webSocket.send(JSON.stringify({ action: 'paddleup', side: 'right' }));
            }
            if (keysPressed['ArrowDown']) {
                webSocket.send(JSON.stringify({ action: 'paddledown', side: 'right' }));
            }
        }, 11);

        return () => clearInterval(interval);
    }, [keysPressed, webSocket]);
};

const PongMulti = ({ roomId, setScore1, setScore2, maxScore }) => {
    const [paddleLeftPos, setPaddleLeftPos] = useState(300);
    const [paddleRightPos, setPaddleRightPos] = useState(300);
    const [ballPos, setBallPos] = useState({ x: 450, y: 300 });
    const [webSocket, setWebSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:8000/ws/pong/${roomId}`);

        ws.onopen = () => {
            console.log('WebSocket connecté à la room:', roomId);
            // Envoyer maxScore au serveur
            ws.send(JSON.stringify({ action: 'set_max_score', maxScore: maxScore }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.paddles) {
                setPaddleLeftPos(data.paddles.left);
                setPaddleRightPos(data.paddles.right);
            }
            if (data.ball) {
                setBallPos(data.ball);
            }
            if (data.score) {
                setScore1(data.score.player1);
                setScore2(data.score.player2);
            }
        };

        ws.onclose = (event) => {
            console.log('WebSocket fermé, code :', event.code);
        };

        ws.onerror = (error) => {
            console.error('Erreur WebSocket :', error);
        };

        setWebSocket(ws);

        return () => {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
    }, [roomId]);

    usePaddleMovement(webSocket);

    return (
        <div className="pong-container">
            <div className="board">
                <div className="center-line"></div>
                <div className="ball" style={{ left: `${ballPos.x}px`, top: `${ballPos.y}px` }}></div>
                <div className="paddle paddleleft" style={{ top: `${paddleLeftPos}px` }}></div>
                <div className="paddle paddleright" style={{ top: `${paddleRightPos}px` }}></div>
            </div>
        </div> 
    );
};

export default PongMulti;
