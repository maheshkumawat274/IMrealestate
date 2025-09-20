
import Aboutus from "../../components/about/Aboutus"
import BlogSection from "../../components/blogs/BlogCards"
import BlogTopSection from "../../components/blogs/BlogTopSection"
import CallRequest from "../../components/contact/CallRequest"
import FAQSection from "../../components/faq/Faqs"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import TopSection from "../../components/home/TopSection"
import ServicesSection1 from "../../components/services/ServicesSection1"
import ServicesSection2 from "../../components/services/ServicesSection2"
import Testimonials from "../../components/testimonials/Testimonials"
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
      <Testimonials/>
      <BlogTopSection/>
      <BlogSection/>
      <FAQSection/>
      <Footer/>
     </div>
    </>
  )
}

export default MainUi