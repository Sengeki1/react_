import data from "./data.js"
import Journal from './Components/Journal/journal.jsx'
import Nav from './Components/Nav/Nav.jsx'
import './App.css';

function App() {
  const journals = data.map(item => {
    return (
      <Journal 
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      {journals}
    </div>
  );
}

export default App;
