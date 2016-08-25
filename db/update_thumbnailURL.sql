update users
  set thumbnailURL = $1
  where channelid = $2;
