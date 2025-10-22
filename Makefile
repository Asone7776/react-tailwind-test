run:
	docker run -e VITE_BASE_URL="http://localhost:3000/api" --name servi-front --rm  -p 4173:4173 -v ${PWD}:/app -v /app/node_modules servi-front
build:
	docker build -t servi-app .
build-dev:
	docker build -f Dockerfile.dev -t servi-front .
stop:
	docker stop servi-app