all:
	cd ft_transcendence && docker-compose up --build -d

clean:
	cd ft_transcendence && docker-compose down

fclean:
	make clean
	echo "Removing PostgreSQL"
	docker system prune -a -f --volumes
	docker network prune -f
	docker network rm $$(docker network ls -q) 2>/dev/null || true
	docker volume rm $$(docker volume ls -qf dangling=true) 2>/dev/null || true
re:
	make fclean
	make all