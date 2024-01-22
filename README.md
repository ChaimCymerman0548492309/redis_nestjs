
docker run --name some-postgres -e POSTGRES_PASSWORD="8114" -d -p 5433:5432 postgres





 docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest