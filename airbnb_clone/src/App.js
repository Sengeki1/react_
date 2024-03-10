import NavBar from './Components/Header/NavBar'
import Hero from './Components/Body/Hero'
import Card from './Components/Card/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Card 
        img='image 12.png'
        rating="5.0 "
        reviewCount="(6)"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="From $136"
      />
    </div>
  );
}

export default App;
