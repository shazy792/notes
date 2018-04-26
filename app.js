const express = require('express');
const bodyParser = require('body-parser');
const notes = require('./models/notes');
const ejs = require('ejs');

const PORT = 3000 || process.env.PORT;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/note/:id', (req, res) => {
    notes.findById(req.params.id)
    .then((note) => {
        res.render('viewNote.ejs', {
            note: note
        })
    })
    .catch((err) => {
        res.send(err);
    })
})

app.post('/note', (req, res) => {
    notes.create({
        note: req.body.note
    })
    .then((note) => {
        res.render('link.ejs', {
            id: `http://localhost:3000/note/${note._id}`
        })
    })
})

app.get('/', (req, res) => {
    res.render('notes.ejs');
});

app.listen(PORT, () => {
    console.log('Started at Port:', PORT);
});
