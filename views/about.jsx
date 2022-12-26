const { Outlet, Link } = ReactRouterDOM

export function About() {
    return <section className="about">
        <h3>We are all about books</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde omnis cum perferendis quae tenetur, totam, quaerat esse adipisci inventore molestiae quos, consectetur non ratione suscipit commodi fuga natus ab!</p>

        <nav>
            <Link to="/about">Index</Link> |
            <Link to="/about/team">Team</Link> |
            <Link to="/about/vision">Vision</Link>
        </nav>
        <div className="nested-route">
            <Outlet />
        </div>

    </section>
}