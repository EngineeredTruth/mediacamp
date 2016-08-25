create table device_type (
  u_id  int references users(id),
  game_console int,
  tablet int,
  desktop int,
  tv int,
  unknown_platform int,
  mobile int
);
