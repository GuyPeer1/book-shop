import { LongTxt } from './long-txt.jsx';

export function BookDetails({ book, onGoBack }) {

    return <section className="book-details">
        <h1>Book name : {book.title}</h1>
        <h5>price: {book.listPrice.amount} {book.listPrice.currencyCode}</h5>
        <img src={book.thumbnail}></img>
        <LongTxt txt={book.description} />
        <button onClick={onGoBack}>Go Back</button>
    </section>
}