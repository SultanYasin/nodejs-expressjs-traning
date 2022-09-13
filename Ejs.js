const express = require('express')
const app = new express();
const fs = require('fs')
const fsP = require('fs').promises;
const path = require('path')


if(!fs.existsSync(path.join(__dirname , 'view'))) fsP.mkdir(path.join(__dirname , 'view'))

