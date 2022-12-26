import { LongTxt } from '../cmps/long-txt.jsx';
import { bookService } from '../services/book.service.js';

const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {

    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    console.log('params', params)
    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate('/book')
    }

    if (!book) return <div>Loading...</div>

    return <section className="book-details">
        <h1>Book name : {book.title}</h1>
        <h5>price: {book.listPrice.amount} {book.listPrice.currencyCode}</h5>
        <img src={book.thumbnail}></img>
        <LongTxt txt={book.description} />
        <button onClick={onGoBack}>Go Back</button>
        <Link to={`/book/edit/${book.id}`}><button>Edit</button></Link>
    </section>
}