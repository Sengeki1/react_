const page = (
    <div className="header">
        <form>
            <label for="fname">First Name: </label>
            <input type="text" id="fname" name="fname"></input><br></br>
            <br></br>
            <label for="lname">Last Name: </label>
            <input type="text" id="lname" name="lanme"></input>
        </form>
    </div>
)

//document.getElementById("root").append(JSON.stringify(page))
ReactDOM.render(page, document.getElementById("root"))