import NavBar from './Components/Header/NavBar'
import Hero from './Components/Body/Hero'
import Card from './Components/Card/Card'
import data from './data.js'
import './App.css';

function App() {

  const cards = data.map(item => { 
    return (
      <Card 
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}
      />
    )
  })
  // inside a jsx it can handle reading the list without explicit telling him which item
  return (
    <div className="App">
      <NavBar /> 
      <Hero />
      <section className='cards-list'>
        {cards} 
      </section>
    </div>
  );
}

export default App;
