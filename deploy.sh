#!/bin/bash

#download nvm

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

#install node
nvm install node

sudo yum install git
git clone https://github.com/tech0rca/mern
cd mern/backend
npm install
cd ../
npm install
npm install -g nodemon
node backend/server.js
npm start