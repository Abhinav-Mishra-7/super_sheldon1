import Footer from '@/components/Footer';
import HeroHeader from '@/components/HeroHeader';
import HeroContent from '@/components/Hero';
import CreditsSection from '@/components/Credits';
import StudentTestimonial from '@/components/StudentTestimonial';
import HeaderNav from '@/components/HeroHeaderNav';
import ExamCourses from '@/components/ExamCourses';
import HeroWithCredits from '@/components/HeroCallWithCredits';

import TeacherTestimonial from '@/components/TeacherTestimonial';

import TeacherCarousel from '@/components/Teachers';

import SubscribeBanner from '@/components/SubscribeBanner';

import FAQ from '@/components/FAQ';

import Features from '@/components/Features';

import Review from '@/components/Review';

import FullPageSlider from '@/components/FullPageScroll';


export default function Home() {
  return (
    <>
    {/* <HeroHeader /> */}
      <HeaderNav />

      {/* <HeroContent /> */}
      {/* <CreditsSection /> */}

      <HeroWithCredits/>

      <StudentTestimonial />
      <ExamCourses />

      <Review />

      
      <TeacherTestimonial />

      <TeacherCarousel />

      {/* <Features /> */}
      <FullPageSlider/>
      <FAQ />

      <SubscribeBanner />
      

      <Footer />

      
    </>
  );
}