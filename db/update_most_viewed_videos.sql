update users
  set mostviewedvideo1 = $1,
   views1 = $2,
   mostviewedvideo2 = $3,
   views2 = $4,
   mostviewedvideo3 = $5,
   views3 = $6
    where channelID = $7;
