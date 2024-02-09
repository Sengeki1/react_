function MainContent() {
    return (
        <h1>I'm Learning React!</h1>
    )
}

function Navbar() {
    return (
        <nav>
            <a href="/html/">HTML</a> |
            <a href="/css/">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/python/">Python</a>
        </nav>
    )
}

ReactDOM.render(<div id="class1">
    <Navbar />
    <MainContent />
</div>, document.getElementById("root"))