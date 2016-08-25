update users
  set mostminvideo1 = $1,
   min1 = $2,
   mostminvideo2 = $3,
   min2 = $4,
   mostminvideo3 = $5,
   min3 = $6
    where channelID = $7;
