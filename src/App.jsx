
import './App.css'
import Contact from './Component/Contact/Contact'
import Experience from './Component/Experience/Experience'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Naviagtion from './Component/Navigatiion/Navigation'
import Products from './Component/Products/Products'
import Review from './Component/Review/Review'
import Services from './Component/SERVICES/SERVICES'
import Sponsor from './Component/Sponsor/Sponsor'

function App() {


  return (
    <>
      <Naviagtion/>
      <Header/>
      <Sponsor/>
      <Products/>
      <Experience/>
      <Review/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
