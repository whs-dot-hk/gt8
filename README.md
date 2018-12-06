## Test 1
```
$ yarn test
```

## Run (Method 1)
```
$ sudo docker-compose up
```

## Run (Method 2)
### Redis Seeding
```
$ cd redis-seed
```

```
$ wget https://datasets.imdbws.com/title.basics.tsv.gz
$ wget https://datasets.imdbws.com/title.ratings.tsv.gz
```

```
$ gunzip title.basics.tsv.gz
$ gunzip title.ratings.tsv.gz
```

```
$ awk '$2 == "movie" { print $1 }' title.basics.tsv > movies_imdb_id
```

```
$ awk -f filter.awk ids=movies_imdb_id title.ratings.tsv > filtered_ratings.tsv
```

```
$ awk '($2 >= 8.1 && $3 >= 350000) { print $1 }' filtered_ratings.tsv > gt8_movies_imdb_id
```

```
$ awk '{ printf "SADD gt8 %s\n", $0 }' gt8_movies_imdb_id > data.txt
```

```
$ cat data.txt | redis-cli --pipe
```

### Start
```
$ cd ../
$ yarn start
```

## Test 2
```
$ sudo docker run --network container:web appropriate/curl --retry 10 --retry-delay 1 --retry-connrefused http://localhost:3000/tt0110413/ > test1.json
$ sudo docker run --network container:web appropriate/curl --retry 10 --retry-delay 1 --retry-connrefused http://localhost:3000/tt0455275/ > test2.json
$ sudo docker run --network container:web appropriate/curl --retry 10 --retry-delay 1 --retry-connrefused http://localhost:3000/tt0033467/ > test3.json
$ yarn test
```

##
Visit http://localhost:3000/
