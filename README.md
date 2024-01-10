
docker run --name some-postgres -e POSTGRES_PASSWORD="8114" -d -p 5433:5432 postgres


docker run -p 6379:6379 -it --name my-redis-container -e REDIS_PASSWORD="8114" redis/redis-stack-server:latest
