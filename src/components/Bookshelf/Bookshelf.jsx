import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
     { title: 'Fourth Wing', author: 'Rebecca Yarros' },
     { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({ title:'', author:'' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author:''});
    };

    return (
        <div className='bookshelfDiv'>
            <div className='formDiv'>
                <h2>Add a Book</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' name='title' value={newBook.title} onChange={handleInputChange} />
                    <br />
                    <label htmlFor='author'>Author:</label>
                    <input type='text' name='author' value={newBook.author} onChange={handleInputChange} />
                    <br />
                    <br />
                    <button type='submit'>Add Book</button>

                </form>
            </div>
        <div className='bookCardsDiv'>
            {books.map((book, index) => (
                <div key={index} className='bookCard'>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Bookshelf;
