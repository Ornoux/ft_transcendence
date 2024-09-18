import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PongMulti from './PongMulti';
import { ScoreBoard } from '../ScoreBoard';

const GlobalGameMulti = () => {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const { roomId } = useParams();
    const location = useLocation();
    const maxScore = location.state?.maxScore || 10;

    return (
        <div className="GlobalGame">
            <PongMulti
                setScore1={setScore1}
                setScore2={setScore2}
                roomId={roomId}
                maxScore={maxScore}
                
            />
        </div>
    );
};

export default GlobalGameMulti;
