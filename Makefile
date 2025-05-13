run:
	docker run --rm -p 4173:4173 -v ${PWD}:/app -v /app/node_modules servi-app
build:
	docker build -t servi-app .
stop:
	docker stop servi-app