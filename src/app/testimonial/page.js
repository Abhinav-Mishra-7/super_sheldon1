import ReviewsSection from "@/components/testimonial/ReviewsSections";
import Header from "@/components/HeroHeaderNav";
import Footer from "@/components/Footer";
import FloatingArrowWhatsApp from "@/components/ArrowAndWhatsapp";
export default function Home() {
  return (
    <>
    <Header/>
      <ReviewsSection />
    <Footer/> 
    <FloatingArrowWhatsApp/>

      
    </>
  );
}