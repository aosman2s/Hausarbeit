const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

//Handel Production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req, res)=> res.sendFile(__dirname+'/public/index.html'));
}
const port = process.env.PORT;

app.listen(port, () => console.log(`server satrted on port ${port}`))
