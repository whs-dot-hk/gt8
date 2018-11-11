function filter() {
  if ($1 == id) {
    print $0
    if ((getline id < ids) <= 0) exit
  }
  else if ($1 > id) {
    if ((getline id < ids) <= 0) exit

    filter()
  }
}

{
  if (NR == 2) {
    getline id < ids
  }

  if (NR >= 2) {
    filter()
  }
}