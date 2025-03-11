
import Navbar from "./components/navbar/navbar"
import HeroSection from "./components/hero-section/hero-section"
import NewArrivals from "./components/new-arrivals/new-arrivals"
import TopSelling from "./components/top-selling/top-selling"
import BrowseByDressStyle from "./components/browse-by-dress-style/browse-by-dress-style"
import OurHappyCustomers from "./components/our-happy-customers/our-happy-customers"
import Footer from "./components/footer/footer"
export default function Home(){
  return(
    <div>


      <Navbar />
      <HeroSection />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
      <OurHappyCustomers />
      <Footer />
   
      
    </div>
  )
}