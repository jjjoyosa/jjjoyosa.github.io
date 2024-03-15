// Jenzzo J. Joyosa
// CMSC 100 - UV6L
// EXER 5 

// Import necessary modules
import express from 'express';
import { appendFile, readFile } from 'node:fs';
import needle from 'needle';
import bodyParser from 'body-parser';

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));

// Endpoint to add a book to the database
app.post('/add-book', (req, res) => {

    // Extract book details from request body
    const {book_name, isbn, author, year} = req.body;

    // Check if any required field is missing
    if (!book_name || !isbn || !author || !year) return res.status(400).json({message: "Not all fields are complete"});

    // Construct the book data to be appended to the file
    let bookData = req.body.book_name + "," + req.body.isbn + "," + req.body.author + "," + year + "\n";

    // Append the book data to the file
    appendFile('books.txt', bookData , err => {
        if(err) {
            res.json({success: false});
        } else {
            res.json({success: true});
        }
    });
});

// Endpoint to find a book by ISBN and author
app.get('/find-by-isbn-author', (req, res) => {

    // Extract ISBN and author from query parameters
    const {isbn, author} = req.query;

    // Check if any required parameter is missing
    if (!isbn || !author ) return res.status(400).json({message: "Not all fields are complete"});

    // Read the file containing books data
    readFile('books.txt', 'utf8', (err, data) => {
        if (err) return res.status(500).json({message: "Error"});

        // Split the file data into lines and then into individual book data
        const books = data.split("\n").map(line => line.split(","));
        // Find books that match the given ISBN and author
        const match = books.filter(book => book[1] == isbn && book[2] == author);

        // If no matching books found, return a message
        if (match.length === 0) return res.status(400).json({message:"No books match"});

        // Return the matching books
        res.status(200).json({book: match});
    });
});

// Endpoint to find books by author
app.get('/find-by-author', (req, res) => {
    
    // Extract author from query parameters
    const {author} = req.query;

    // Check if author parameter is missing
    if (!author ) return res.status(400).json({message: "Not all fields are complete"});

    // Read the file containing books data
    readFile('books.txt', 'utf8', (err, data) => {
        if (err) return res.status(500).json({message: "Error"});

        // Split the file data into lines and then into individual book data
        const books = data.split("\n").map(line => line.split(","));
        // Find books that match the given author
        const match = books.filter(book => book[2] == author);

        // If no matching books found, return a message
        if (match.length === 0) return res.status(400).json({message:"No books match"});

        // Return the matching books
        res.status(200).json({book: match});
    });
});

// Start the server
app.listen(3000, ()=> {
    console.log("Server running at port 3000");
});

// Default route
app.get('/', (req, res) => {
    res.send("Welcome!");
});
