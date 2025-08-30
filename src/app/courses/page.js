import Header from "@/components/HeroHeaderNav";
import TeacherTestimonial from "@/components/TeacherTestimonial";
import FullPageSlider from "@/components/FullPageScroll";
import FAQ from "@/components/FAQ";
import SubscribeSection from "@/components/SubscribeBanner";
import Footer from "@/components/Footer";

import CoursePage from "@/components/CoursePage";

import CardsNaplan from "@/components/PricingCardNaplan";

import CardsICAS from "@/components/PricingCardIcas";

import CardsHSC from "@/components/PricingCardsHSC";

import CardsExam from "@/components/PricingCardExamPrep";

import CardsScholarship from "@/components/PricingcardScholar";

import FloatingArrowWhatsApp from "@/components/ArrowAndWhatsapp";


export default function Courses() {
    return (
        <div>
            <Header />
            <CoursePage/>


            <CardsNaplan/>
            <CardsICAS/>
            <CardsHSC/>
            <CardsExam/>
            <CardsScholarship/>


            <TeacherTestimonial/>
            <FullPageSlider/>
            <FAQ/>
            <SubscribeSection/>
            <Footer/>

            <FloatingArrowWhatsApp/>

        </div>
    );
}