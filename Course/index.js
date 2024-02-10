function Header () { // children Component
    return (
        <header>
            <nav className="nav">
                <img className="img" src="React-icon.svg.png"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer () { // children Component
    return (
        <footer>
            <p>© 2023 Soares development. All rights reserved</p>
        </footer>
    )
}

function MainContent() { // children Component
    return (
        <div>
            <h1>I'm excited to learn React</h1>
            <ol className="list">
                <li>I like learning new things</li>
                <li>It's best fit to learn react for a job
                as a developer</li>
            </ol>
        </div>
    )
}

function Page () { // Parent component
    return ( // JSX
        <div className="main">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))