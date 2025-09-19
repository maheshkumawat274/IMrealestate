
import Aboutus from "../../components/about/Aboutus"
import CallRequest from "../../components/contact/CallRequest"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import TopSection from "../../components/home/TopSection"
import ServicesSection1 from "../../components/services/ServicesSection1"
import ServicesSection2 from "../../components/services/ServicesSection2"
import WhyChooseUs from "../../components/whychoose/WhyChoose"


const MainUi = () => {
  return (
    <>
     <div>
      <Header/>
      <TopSection/>
      <Aboutus/>
      <ServicesSection1/>
      <ServicesSection2/>
      <WhyChooseUs/>
      <CallRequest/>
      <Footer/>
     </div>
    </>
  )
}

export default MainUi