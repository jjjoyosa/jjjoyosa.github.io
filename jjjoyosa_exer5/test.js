import needle from "needle";


needle.post('http://localhost:3001/add-book', {book_name: "Harry Potter and the Philosophers Stone", isbn:"978-0-7475-3269-9", author:"J.K Rowling", year:"1997"}, (err, res) => {
    console.log(res.body);
});

needle.get('http://localhost:3000/find-by-isbn-author?isbn=&author=', (err, res) => {
    console.log(res.body);
})