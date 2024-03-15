import express from 'express';
import { appendFile, readFile } from 'node:fs';
import needle from 'needle';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));


app.post('/add-book', (req, res) => {

    const {book_name, isbn, author, year} = req.body;

    if ( !book_name || !isbn || !author || !year) return res.status(400).json({message: "Not all fields are complete"});

    let bookData = req.body.book_name + "," + req.body.isbn + "," + req.body.author + "," + year + "\n";

    appendFile('books.txt', bookData , err => {
        if(err) {
            res.json({success: false});
        } else {
  
            res.json({success: true});
        }
    });

});

app.get('/find-by-isbn-author', (req, res) => {
    
    const {isbn, author} = req.query;

    if (!isbn || !author ) return res.status(400).json({message: "Not all fields are complete"});

    readFile('books.txt', 'utf8', (err, data) => {

        if (err) return res.status(500).json({message: "Error"});

        const books = data.split("\n").map(line => line.split(","));
        const match = books.filter(book => book[1] == isbn && book[2] == author);

        if (match.length === 0) return res.status(400).json({message:"No books match"});

        res.status(200).json({book: match});

    })

});

app.get('/find-by-author', (req, res) => {
        
    const {author} = req.query;

    if (!author ) return res.status(400).json({message: "Not all fields are complete"});

    readFile('books.txt', 'utf8', (err, data) => {

        if (err) return res.status(500).json({message: "Error"});

        const books = data.split("\n").map(line => line.split(","));
        const match = books.filter(book => book[2] == author);

        if (match.length === 0) return res.status(400).json({message:"No books match"});

        res.status(200).json({book: match});

    })
});

app.listen(3000, ()=> {
    console.log("Server running at port 3000");
});

app.get('/', (req, res) => {
    res.send("Welcome!");
});



