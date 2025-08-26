import Header from "@/components/HeroHeaderNav";
import TeacherTestimonial from "@/components/TeacherTestimonial";
import FullPageSlider from "@/components/FullPageScroll";
import FAQ from "@/components/FAQ";
import SubscribeSection from "@/components/SubscribeBanner";
import Footer from "@/components/Footer";

import CoursePage from "@/components/CoursePage";



export default function Courses() {
    return (
        <div>
            <Header />
            <CoursePage/>

            <TeacherTestimonial/>
            <FullPageSlider/>
            <FAQ/>
            <SubscribeSection/>
            <Footer/>

        </div>
    );
}