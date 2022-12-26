const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { eventBusService, showSuccessMsg } from "../services/event-bus.service.js"


export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const { bookId } = useParams()

    useEffect(() => {
        if (!bookId) return
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then((book) => setBookToEdit(book))
            .catch((err) => {
                console.log('Had issues', err)
                navigate('/book')
            })
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        {(!bookToEdit.thumbnail)? bookToEdit.thumbnail = 'https://www.coding-academy.org/books-photos/2.jpg' : ''}
        bookService.save(bookToEdit).then((book) => {
            console.log('book saved', book)
            showSuccessMsg('Car saved!')
            navigate('/book')
        })
    }

    return <section className="book-edit">
        <h2>{bookToEdit.id ? 'Edit This Book' : 'Add a new book!'}</h2>
        <form onSubmit={onSaveBook}>
            <label htmlFor="title">Title:</label>
            <input type="text"
                name="title"
                id="title"
                placeholder="Enter Title..."
                value={bookToEdit.title}
                onChange={handleChange}
            />
            <label htmlFor="publishedDate">Published Date</label>
            <input type="number"
                name="publishedDate"
                id="publishedDate"
                placeholder="published date..."
                value={bookToEdit.publishedDate}
                onChange={handleChange}
            />

            <div>
                <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
                <Link to="/book">Cancel</Link>
            </div>

        </form>
    </section>
}