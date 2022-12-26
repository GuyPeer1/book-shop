
export function BookPreview({ book }) {
    let price = book.listPrice.amount
    let color = ''
    if (price > 150) color = ' red'
    else if (price < 20) color = ' green'

    return <article className="book-preview">
        <h2>Book Name: {book.title}</h2>
        <div className="price-drop">{book.listPrice.isOnSale && 'PRICE DROP 💲✂️'}</div>

        <div className='book-description'>{book.description}</div>
        <div className="img-container"><img src={book.thumbnail}></img></div>
        <div className={'price' + color}>
            Price: {price}{book.listPrice.currencyCode}</div>
        {book.pageCount > 500 && <div>Serious Reading</div>}
        {(book.pageCount > 200 && book.pageCount < 500) && <div>Descent Reading</div>}
        {book.pageCount < 100 && <div>Light Reading</div>}
        {(book.publishedDate > 2012) ? <div>New</div> : <div>Vintage</div>}

    </article>
}