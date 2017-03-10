# nonoCTF

jeopardy形式のCTFサーバ  

## Overview
- /config.js - サーバの設定ファイル

## Description

## Demo
サーバの起動  
`npm start`  

ブラウザで http://127.0.0.1:3000 を呼び出す.  

デフォルトのadminパスワードは[admin]です.  
## Requirement
- Node.js v6.10.0  
- Sqlite3 3.16.2  

## Usage

## Install
まず,このファイルをダウンロードしてきます.  
`?`  

ダウンロードしたフォルダに移動します.  
`cd nonoCTF`  

必要なライブラリを引っ張って来ます.  
`npm install`  

サーバを起動します.  
`npm start`  

※ 外部に公開する場合はNginxなどでリバースプロキシを噛めせて暗号化させてください.  

※ データベースを最初の状態に戻す場合は下記コマンドを入力してください.
`npm run-script cleanDB`
## Licence

These codes are licensed under MIT

## Author

[Hayato Doi](https://github.com/nikaidoumari)
