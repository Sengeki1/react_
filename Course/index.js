function Page () {
    return (
        <div>
            <header>
                <nav>
                    <img src="React-icon.svg.png" width="50px"></img>
                </nav>
            </header>
            <h1>I'm excited to learn React</h1>
            <ol>
                <li>I like learning new things</li>
                <li>It's best fit to learn react for a job
                as a developer</li>
            </ol>
            <footer>
                <p>© 2023 Soares development. All rights reserved</p>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))