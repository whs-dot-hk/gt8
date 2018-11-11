## Test
```
$ yarn test
```

## Redis Seeding
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
$ awk '($2 >= 8.1 && $3 >= 350000) { print $1 }' title.ratings.tsv > gt8_movies_imdb_id
```

```
$ awk 'NR > 1 { printf "SADD gt8 %s\n", $0 }' gt8_movies_imdb_id > data.txt
```

```
$ cat data.txt | redis-cli --pipe
```

## Start
```
$ cd ../
$ yarn start
```
