FROM redis:latest

RUN apt-get update
RUN apt-get install wget gzip -y

WORKDIR /temp

RUN wget https://datasets.imdbws.com/title.basics.tsv.gz
RUN wget https://datasets.imdbws.com/title.ratings.tsv.gz

RUN gunzip title.basics.tsv.gz
RUN gunzip title.ratings.tsv.gz

RUN awk '$2 == "movie" { print $1 }' title.basics.tsv > movies_imdb_id

ADD filter.awk .

RUN awk -f filter.awk ids=movies_imdb_id title.ratings.tsv > filtered_ratings.tsv

RUN awk '($2 >= 8.1 && $3 >= 350000) { print $1 }' filtered_ratings.tsv > gt8_movies_imdb_id

RUN awk '{ printf "SADD gt8 %s\n", $0 }' gt8_movies_imdb_id > data.txt

CMD cat data.txt | redis-cli --pipe -h redis
