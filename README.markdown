# 準備
1. npmは先にインストールしておく

```
    npm install bower -g
```

	bowerってのはtwitterさんの作ったパッケージ管理ツール  
	nodeはv0.8以降にしておく

2. component.jsonを書く

	component.jsonはmavenにおけるpom.xmlにあたるもの

```
	{
		"name": "Flight Sample",
		"version": "1.0.0",
		"dependencies": {
			"flight": "~1.0.0"
		}
	}
````

3. brow installする

```
	[reg@einhard flight_test] $ bower install  
	bower cloning git://github.com/twitter/flight
	bower caching git://github.com/twitter/flight
	bower fetching flight
	bower checking out flight#v1.0.2
	bower copying /Users/reg/.bower/cache/flight/1b2c3dda40d383a9303d7aa8a3f51636
	bower cloning git://github.com/kriskowal/es5-shim.git
	bower caching git://github.com/kriskowal/es5-shim.git
	bower cloning git://github.com/components/jquery.git
	bower caching git://github.com/components/jquery.git
	bower fetching es5-shim
	bower checking out es5-shim#v2.0.0
	bower copying /Users/reg/.bower/cache/es5-shim/a979ce4a53833f8034ece8837d071717
	bower fetching jquery
	bower checking out jquery#1.8.3
	bower copying /Users/reg/.bower/cache/jquery/cf68c4c4e7507c8d20fee7b5f26709d9
	bower installing flight#1.0.2
	bower installing es5-shim#2.0.0
	bower installing jquery#1.8.3
```

