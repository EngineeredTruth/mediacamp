update users
  set subscriberRate = $1
  where channelid = $2;
