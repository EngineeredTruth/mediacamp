CREATE TABLE users
(
    id serial primary key,
    username character varying(60) NOT NULL,
    subscribercount integer,
    subscriberrate integer,
    channelid character varying(100),
    refreshtoken character varying(200),
    mostviewedvideo1 character varying(20),
    mostviewedvideo2 character varying(20) ,
    mostviewedvideo3 character varying(20) ,
    views1 integer,
    views2 integer,
    views3 integer,
    mostviewedname1 character varying(100) ,
    mostviewedname2 character varying(100),
    mostviewedname3 character varying(100) ,
    copy_paste integer,
    other integer,
    text_message integer,
    facebook integer,
    whats_app integer,
    facebook_messenger integer,
    gmail integer,
    twitter integer,
    googleplus integer,
    mail integer,
    hangouts integer,
    pinterest integer,
    linkedin integer,
    tumblr integer,
    blogger integer,
    livejournal integer,
    reddit integer,
    vkontakte integer,
    ameba integer,
    stumbleupon integer,
    digg integer,
    kakao integer,
    odnoklassniki integer,
    cyworld integer,
    thumbnailurl character varying(255)
);

CREATE TABLE timewatched
(
    avgsecwatched integer,
    u_id integer references users(id),
);

create table device_type (
  u_id  int references users(id),
  game_console int,
  tablet int,
  desktop int,
  tv int,
  unknown_platform int,
  mobile int
);

create table timewatched (
  avgsecwatched int,
  u_id int references users(id)
);
