#!/bin/sh
# データベースを作成する
# File name : createDB.sh
# Author    : Hayato Doi
# license   : MIT
# 
# ==使い方==
# 第一引数にデータベースのパスを指定する
# ex) createDB.sh databases/lookme.sqlite3

path=$1
adminName="admin"
adminPassword="admin"
adminPasswordHash=`echo -n $adminPassword | sha256sum | sed 's/[- ]//g'`

# データベースに書き込み
sqlite3 $path << EOF
CREATE TABLE article (
	id INTEGER NOT NULL PRIMARY KEY,
	title TEXT,
	text TEXT,
	time INTEGER,
	release INTEGER DEFAULT 0
);

CREATE TABLE bugreport (
	id INTEGER NOT NULL PRIMARY KEY,
	name TEXT,
	text TEXT,
	time INTEGER
);

CREATE TABLE user_name (
	id INTEGER NOT NULL PRIMARY KEY,
	name TEXT,
	admin INTEGER NOT NULL DEFAULT 0,
	regular INTEGER NOT NULL DEFAULT 0,
	tmp INTEGER
);

CREATE TABLE user_password (
	id INTEGER NOT NULL PRIMARY KEY,
	password TEXT
);

INSERT INTO user_name(id, name, admin, regular) VALUES(1, '$adminName', 1, 1);
INSERT INTO user_password(id, password) VALUES(1, '$adminPasswordHash');
EOF
