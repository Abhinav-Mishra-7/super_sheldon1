<<<<<<< HEAD
"use client"

=======
>>>>>>> origin/main
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

import ClassVideoSection from '@/components/Studentvideo';
<<<<<<< HEAD
import { useEffect , useState } from "react";

 const metadata = {
=======


export const metadata = {
>>>>>>> origin/main
  title: "Courses | SuperSheldon Online Learning",
};


<<<<<<< HEAD
export default  function  Courses({currentCourse}) {

=======
export default function Courses() {
>>>>>>> origin/main
    return (
        <div>
            <Header />
            <CoursePage/>

<<<<<<< HEAD
            {/* {currentCourse.title === "Naplan Champion Course"  ? <CardsNaplan/> : false} */}
            {/* <CardsICAS/> */}
            {/* <CardsHSC/>
            <CardsExam/>
            <CardsScholarship/> */}
            {/* {renderCards()}            */}

            {/* <ClassVideoSection/>
=======

            <CardsNaplan/>
            <CardsICAS/>
            <CardsHSC/>
            <CardsExam/>
            <CardsScholarship/>

            <ClassVideoSection/>
>>>>>>> origin/main
            <TeacherTestimonial/>
            <FullPageSlider/>
            <FAQ/>
            <SubscribeSection/>
            <Footer/>

<<<<<<< HEAD
            <FloatingArrowWhatsApp/> */}
=======
            <FloatingArrowWhatsApp/>
>>>>>>> origin/main

        </div>
    );
}