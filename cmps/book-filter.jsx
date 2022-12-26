const { useState, useEffect, useRef } = React

import { bookService } from "../services/book.service.js"

export function BookFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())
    const elInputRef = useRef(null)
    
    useEffect(() => {
        elInputRef.current.focus()
    }, [])
    
    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])
    
    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }
    
    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="book-filter">
        <h2>Filter our books</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title">Title:</label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="Title"
                value={filterByToEdit.txt}
                onChange={handleChange}
                ref={elInputRef}
                />

            <label htmlFor="minPrice">Min price:</label>
            <input type="number"
                id="minPrice"
                name="minPrice"
                placeholder="By min price"
                value={filterByToEdit.minPrice}
                onChange={handleChange}
                />

            <label htmlFor="minPage">Min Page:</label>
            <input type="number"
            id="minPage"
            name="minPage"
            placeholder="By min page"
            value={filterByToEdit.minPage}
            onChange={handleChange}
            />

            <button>Filter books!</button>
        </form>

    </section>

}