update users
  set subscriberCount = $1
  where channelid = $2;
