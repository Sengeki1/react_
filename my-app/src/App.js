import './App.css';
import Header from "./Components/Header/Header"
import MainContent from "./Components/MainContent/MainContent"
import Footer from "./Components/Footer/Footer"

function App() {
  return ( // JSX
      <div className="main">
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

export default App;
