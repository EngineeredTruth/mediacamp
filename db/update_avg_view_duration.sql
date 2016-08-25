update timewatched
  set avgsecwatched = $2
  where u_id = $1;
