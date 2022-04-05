## 설치파일
참고 : https://velog.io/@ywoosang/Node.js-설치

# CURL 설치
    $ sudo apt-get install -y curl

# Apt 패키지 매니저 사용
    
    1. $ sudo apt update
    2. $ sudo apt install nodejs
    3. $ nodejs -v
    4. $ sudo apt install npm

# PPA를 이용한 설치

    $ curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh

    sudo 권한으로 ppa 를 추가 하고 업데이트 한다

    $ sudo bash nodesource_setup.sh
    $ sudo apt-get install nodejs

    $ sudo apt-get install build-essential

# NVM을 이용한 설치

    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

    $ source ~/.bashrc

# NPM 업데이트

    $ npm install -g npm@latest

# PM2 설치

    $ yarn global add pm2

# express 설치

    $ npm install express / $ yarn add express
    



  