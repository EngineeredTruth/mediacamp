update device_type
  set game_console = $1,
  tablet = $2,
  desktop = $3,
  tv = $4,
  unknown_platform = $5,
  mobile = $6
  where u_id = $7;
