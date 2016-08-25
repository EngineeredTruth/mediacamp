select avg(game_console) as game_console_avg, avg(tablet) as tablet_avg,
avg(desktop) as desktop_avg, avg(tv) as tv_avg, avg(unknown_platform) as unknown_platform_avg,
avg(mobile) as mobile_avg
from device_type;
