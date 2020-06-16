const express = require('express');
const mongodb = require('mongodb');
const fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);

const router = express.Router();
/*
* HTML API
*/
router.get('/html', async (req, res )=> {
    var txt= await loadFile('./server/files/html.txt');
    res.send({title: 'HTML', content : txt});
});

router.get('/html/img', async (req, res )=> {
    res.sendFile(path.join(appDir, 'imgs', 'HTML.png'));
});

router.get('/html/headings', async (req, res )=> {
    var txt= await loadFile('./server/files/headings.txt');
    res.send(txt);
});

router.get('/html/paragraphs', async (req, res )=> {
    var txt= await loadFile('./server/files/paragraphs.txt');
    res.send(txt);
});

router.get('/html/tables', async (req, res )=> {
    var txt= await loadFile('./server/files/tables.txt');
    res.send(txt);
});

/*
* CSS API
*/

router.get('/css', async (req, res )=> {
    var txt= await loadFile('./server/files/css.txt');
    res.send(txt);
});
router.get('/css/img', async (req, res )=> {
    res.sendFile(path.join(appDir, 'imgs', 'CSS.png'));
});
router.get('/css/selector', async (req, res )=> {
   var txt= await loadFile('./server/files/selector.txt');
    res.send(txt);
});

router.get('/css/colors', async (req, res )=> {
    var txt= await loadFile('./server/files/colors.txt');
    res.send(txt);
});

router.get('/css/boxes', async (req, res )=> {
    var txt= await loadFile('./server/files/boxes.txt');
    res.send(txt);
});

/*
* JavaScript API
*/

router.get('/javaScript', async (req, res )=> {
    var txt= await loadFile('./server/files/javaScript.txt');
    res.send(txt);
});
router.get('/javaScript/img', async (req, res )=> {
    res.sendFile(path.join(appDir, 'imgs', 'JavaScript.png'));
});

router.get('/javaScript/functions', async (req, res )=> {
    var txt= await loadFile('./server/files/functions.txt');
    res.send(txt);
});

router.get('/javaScript/objects', async (req, res )=> {
    var txt= await loadFile('./server/files/objects.txt');
    res.send(txt);
});



async function loadFile(path){
    return fs.readFileSync(path ).toString()
}

module.exports = router;