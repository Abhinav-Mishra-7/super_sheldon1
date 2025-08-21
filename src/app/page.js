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

      
      <TeacherTestimonial />

      <TeacherCarousel />

      {/* <Features /> */}

      <FAQ />

      <SubscribeBanner />
      

      <Footer />

      
    </>
  );
}