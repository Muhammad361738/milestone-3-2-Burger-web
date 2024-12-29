import Navbar from "./components/Navbar";
import Cardsoul from "./components/Cardsoul";
import Progessor from "./components/Progessor";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Burger from "./components/Burger"
import Reservation from "./components/Reservation"
import Footer from "./components/Footer";
import ImageContant from "./components/ImageContent"
export default function App() {
  return (
  <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen">
    <Navbar/>
    <Cardsoul/>
    <Progessor/>  
    <Burger/>
    <Banner/>
     <Menu/>
    <Offer/>
  <ImageContant/>
    <Reservation/>
    <Footer/>
  </div> 
  );
}
