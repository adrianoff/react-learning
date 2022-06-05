up-dev:
	cd docker && docker-compose -f docker-compose-dev.yml up -d

stop-dev:
	cd docker && docker-compose -f docker-compose-dev.yml stop

up-prod:
	cd docker && docker-compose -f docker-compose-prod.yml up -d

stop-prod:
	cd docker && docker-compose -f docker-compose-prod.yml stop

sh:
	docker exec -ti react_learning sh