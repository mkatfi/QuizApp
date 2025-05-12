all : 
	docker-compose -f docker-compose.yml up --build 

down:
	docker compose $(FILES) down

restart:
	docker compose $(FILES) restart

pak :
	npm install web-vitals
	npm install