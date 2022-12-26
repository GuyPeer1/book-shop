// const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM


import { AboutIndex } from "./cmps/about-index.jsx"
import { AppHeader } from "./cmps/app-header.jsx"
import { Team } from "./cmps/team.jsx"
import { Vision } from "./cmps/vision.jsx"
import { About } from './views/about.jsx'
import { BookDetails } from "./views/book-details.jsx"
import { BookEdit } from "./views/book-edit.jsx"
import { BookIndex } from './views/book-index.jsx'
import { Home } from './views/home.jsx'
import { UserMsg } from './cmps/user-msg.jsx'

export function App() {


    return <Router>
        <section className="main-layout app">
            <AppHeader />
            <main className="full main-layout">
                <Routes>
                    <Route element={<Home />} path="/" />

                    <Route element={<About />} path="/about" >
                        <Route element={<AboutIndex />} path="/about" />
                        <Route element={<Team />} path="/about/team" />
                        <Route element={<Vision />} path="/about/vision" />
                    </Route>

                    <Route element={<BookIndex />} path="/book" />
                    <Route element={<BookEdit />} path="/book/edit" />
                    <Route element={<BookEdit />} path="/book/edit/:bookId" />
                    <Route element={<BookDetails />} path="/book/:bookId" />

                </Routes>
            </main>
            <UserMsg />
        </section>
    </Router>
}