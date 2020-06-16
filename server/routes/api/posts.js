const express = require('express');
const mongodb = require('mongodb');
const fs = require('fs');

const router = express.Router();

router.get('/html', async (req, res )=> {
    var txt= await loadFile('./files/html.txt');
    res.send(txt);
});

router.get('/html/headings', async (req, res )=> {
    var txt= await loadFile('./files/headings.txt');
    res.send(txt);
});

router.get('/html/paragraphs', async (req, res )=> {
    var txt= await loadFile('./files/paragraphs.txt');
    res.send(txt);
});

router.get('/html/tables', async (req, res )=> {
    var txt= await loadFile('./files/tables.txt');
    res.send(txt);
});

router.get('/css', async (req, res )=> {
    var txt= await loadFile('./files/css.txt');
    res.send(txt);
});

router.get('/css/selector', async (req, res )=> {
   var txt= await loadFile('./files/selector.txt');
    res.send(txt);
});

router.get('/css/colors', async (req, res )=> {
    var txt= await loadFile('./files/colors.txt');
    res.send(txt);
});

router.get('/css/boxes', async (req, res )=> {
    var txt= await loadFile('./files/boxes.txt');
    res.send(txt);
});

router.get('/javaScript', async (req, res )=> {
    var txt= await loadFile('./files/javaScript.txt');
    res.send(txt);
});

router.get('/javaScript/functions', async (req, res )=> {
    var txt= await loadFile('./files/functions.txt');
    res.send(txt);
});

router.get('/javaScript/objects', async (req, res )=> {
    var txt= await loadFile('./files/objects.txt');
    res.send(txt);
});



async function loadFile(path){
    return fs.readFileSync(path ).toString()}

module.exports = router;