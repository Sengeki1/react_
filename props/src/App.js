import Contact from './Components/Contact.jsx'
import './App.css';

function App() {
    return (
      <div>
        <Contact 
          img="./Images/Cat.jpg"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact 
          img="./Images/Cat_2.jpg"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com" 
        />
      </div>
    );
}

export default App;
