docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba_3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proba_3/app ../..
