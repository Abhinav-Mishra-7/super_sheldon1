
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Download, Clock, BookOpen, Users } from "lucide-react";
import Image from "next/image";

const years = [
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12",
];



// const coursesData = {
//   "Year 2": [
//     {
//       id: "naplan-2-1",
//       title: "ICAS Spark Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/icas_prep_course.jpg",
//       brochure: "/brochures/naplan.pdf",
//     }
//   ],
//   "Year 3": [
//     {
//       id: "naplan-3-1",
//       title: "Naplan Champion Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y3naplanchampion.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//     {
//       id: "naplan-3-2",
//       title: "Naplan Exam Prep Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y3icassmartprep.jpg",
//       brochure: "/brochures/naplan.pdf",
//     }
//   ],
//   "Year 4": [
//     {
//       id: "naplan-4-1",
//       title: "ICAS Challenger Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y4icas.jpg",
//       brochure: "/brochures/naplan.pdf",
//     }
//   ],
//   "Year 5": [
//     {
//       id: "naplan-5-1",
//       title: "Naplan Progidy Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y5progidy.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//     {
//       id: "naplan-5-2",
//       title: "ICAS Challenger Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y5icas.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//     {
//       id: "naplan-5-3",
//       title: "Opportunity and Scholarship Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y5scholarship.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//   ],
//   "Year 6": [
//     {
//       id: "naplan-6-1",
//       title: "ICAS Mastermind Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y6icas.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//     {
//       id: "naplan-6-2",
//       title: "Scholarship Builder Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y6scholarship.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//   ],
//   "Year 7": [
//     {
//       id: "naplan-7-1",
//       title: "ICAS Genius Track Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y7icasgenius.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//     {
//       id: "naplan-7-2",
//       title: "NAPLAN Progidy Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y7naplanprogidy.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//   ],
//   "Year 8": [
//     {
//       id: "naplan-8-1",
//       title: "ICAS Genius Track Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y8icasgeniustech.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//   ],
//   "Year 9": [
//     {
//       id: "sat",
//       title: "ICAS Olympian Prep Course",
//       type: "SAT Exam",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y9icasolymp.jpg",
//       brochure: "/brochures/sat.pdf",
//     },
//     {
//       id: "igcse",
//       title: "NAPLAN Grand Master Course",
//       type: "IGCSE",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 5,
//       img: "/course/y9naplangm.jpg",
//       brochure: "/brochures/igcse.pdf",
//     },
//     {
//       id: "naplan-9-1",
//       title: "Selective Accelerator Program Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y9selacc.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
//   ],
//   "Year 10": [
//     {
//       id: "naplan-10-1",
//       title: "ICAS Grand Master Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y10icasgmnew.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
    
//   ],
//     "Year 11": [
//     {
//       id: "naplan-11-1",
//       title: "ICAS Ultimate Scholar Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y11icasscholar.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
    
//   ],

//   "Year 12": [
//     {
//       id: "naplan-12-1",
//       title: "HSC Mastery Program Course",
//       type: "Exam Preparation",
//       duration: "22hr 30min",
//       topics: 34,
//       sales: 250,
//       rating: 4,
//       img: "/course/y12hsc.jpg",
//       brochure: "/brochures/naplan.pdf",
//     },
    
//   ],
// };


const coursesData = {
  "Year 2": [
    {
      id: "naplan-2-1",
      title: "ICAS Spark Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/icas_prep_course.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Kickstart your exam journey with the ICAS Spark Course, designed to ignite curiosity and build a strong foundation in test preparation.",
      chapters: [
  { title: "Reading: Understanding Short Stories" },
  { title: "Reading: Finding Information from Pictures & Captions" },
  { title: "Vocabulary: Common Words and Meanings" },
  { title: "Grammar: Nouns, Verbs, and Adjectives" },
  { title: "Grammar: Sentence Building and Punctuation" },
  { title: "Spelling: Simple Patterns and Sight Words" },
  { title: "Writing: Short Narrative with Characters" },
  { title: "Writing: Expressing Opinions with Reasons" },
  { title: "Numeracy: Numbers, Place Value & Addition/Subtraction" },
  { title: "Numeracy: Shapes, Measurement & Simple Graphs" }
],

    }
  ],
  "Year 3": [
    {
      id: "naplan-3-1",
      title: "Naplan Champion Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y3naplanchampion.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Train like a champion with our Naplan Champion Course, helping students master key skills and strategies for exam success.",
      chapters: [
  { title: "Reading: Finding Information in Short Texts" },
  { title: "Reading: Main Idea & Supporting Detail" },
  { title: "Reading: Making Inferences from Pictures and Captions" },
  { title: "Language: Nouns, Verbs, Adjectives, and Adverbs" },
  { title: "Language: Sentences, Capital Letters & Punctuation" },
  { title: "Spelling: Common Patterns, Blends & Vowels" },
  { title: "Writing: Narrative Basics (Beginning, Middle, End)" },
  { title: "Writing: Persuasive Basics (Opinion + Reasons)" },
  { title: "Numeracy: Place Value, Addition & Subtraction" },
  { title: "Numeracy: Measurement, Time & Simple Graphs" }
],
    },
    {
      id: "naplan-3-2",
      title: "Naplan Exam Prep Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y3icassmartprep.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Get exam-ready with the Naplan Exam Prep Course, focused on boosting confidence and performance through structured practice.",
      chapters: [
  { title: "Reading: Understanding Fiction & Non-Fiction Passages" },
  { title: "Reading: Vocabulary in Context (Word Meanings)" },
  { title: "Reading: Drawing Inferences from Short Texts" },
  { title: "Language: Sentence Structure & Punctuation Rules" },
  { title: "Language: Grammar – Subject, Predicate & Agreement" },
  { title: "Writing: Short Story with Setting & Characters" },
  { title: "Writing: Persuasive Paragraph (Opinion with Examples)" },
  { title: "Numeracy: Whole Numbers, Addition & Subtraction" },
  { title: "Numeracy: Simple Fractions & Basic Geometry" },
  { title: "Numeracy: Interpreting Charts & Data" }
],
    }
  ],
  "Year 4": [
    {
      id: "naplan-4-1",
      title: "ICAS Challenger Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y4icas.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Take on new challenges with the ICAS Challenger Course, perfect for students aiming to strengthen problem-solving and critical thinking.",
      chapters: [
  { title: "Reading: Understanding Longer Stories & Articles" },
  { title: "Reading: Identifying Main Ideas and Supporting Details" },
  { title: "Reading: Making Predictions & Drawing Conclusions" },
  { title: "Vocabulary: Synonyms, Antonyms & Context Clues" },
  { title: "Grammar: Complex Sentences, Tenses & Punctuation" },
  { title: "Writing: Narrative Development (Dialogue & Description)" },
  { title: "Writing: Persuasive Writing – Supporting Reasons with Evidence" },
  { title: "Numeracy: Multiplication, Division & Word Problems" },
  { title: "Numeracy: Fractions, Decimals & Measurement" },
  { title: "Numeracy: Data – Graphs, Tables & Simple Probability" }
],
    }
  ],
  "Year 5": [
    {
      id: "naplan-5-1",
      title: "Naplan Progidy Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y5progidy.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Develop advanced skills with the Naplan Prodigy Course, tailored to push high achievers toward exam excellence.",
      chapters: [
  { title: "Reading: Understanding Informative & Narrative Texts" },
  { title: "Reading: Summarising Main Ideas & Key Details" },
  { title: "Reading: Comparing & Contrasting Information" },
  { title: "Vocabulary: Using Context to Work Out Meanings" },
  { title: "Grammar: Clauses, Conjunctions & Complex Sentences" },
  { title: "Writing: Narrative with Strong Characters & Plot" },
  { title: "Writing: Persuasive Writing – Structured Arguments" },
  { title: "Numeracy: Multiplication, Division & Large Numbers" },
  { title: "Numeracy: Fractions, Decimals & Percentages" },
  { title: "Numeracy: Data, Chance & Measurement Problems" }
],
    },
    {
      id: "naplan-5-2",
      title: "ICAS Challenger Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y5icas.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Build confidence and mastery with the ICAS Challenger Course, designed to prepare students for higher-level test success.",
      chapters: [
  { title: "Reading: Interpreting Factual, Narrative & Poetic Texts" },
  { title: "Reading: Identifying Author’s Purpose & Audience" },
  { title: "Vocabulary: Advanced Synonyms, Antonyms & Word Usage" },
  { title: "Grammar: Punctuation, Tense Consistency & Sentence Variety" },
  { title: "Writing: Narrative – Building Tension & Resolution" },
  { title: "Writing: Persuasive – Strong Openings & Evidence Use" },
  { title: "Numeracy: Multi-step Word Problems with Mixed Operations" },
  { title: "Numeracy: Geometry – Angles, Symmetry & Transformations" },
  { title: "Numeracy: Probability & Data Interpretation" },
  { title: "Numeracy: Patterns, Sequences & Algebraic Thinking" }
],
    },
    {
      id: "naplan-5-3",
      title: "Opportunity and Scholarship Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y5scholarship.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Prepare for scholarship opportunities with a course that sharpens analytical skills and exam readiness.",
      chapters: [
  { title: "Reading: Inference & Interpretation of Complex Texts" },
  { title: "Reading: Comparing Viewpoints Across Passages" },
  { title: "Vocabulary: Advanced Idioms, Figurative Language & Nuances" },
  { title: "Grammar: Complex Sentence Structures & Clauses" },
  { title: "Writing: Argumentative Essays – Structuring Logic & Counterpoints" },
  { title: "Writing: Formal & Informal Letters – Tone & Audience" },
  { title: "Numeracy: Multi-step Word Problems with Fractions & Decimals" },
  { title: "Numeracy: Geometry – Volume, Surface Area & Advanced Shapes" },
  { title: "Numeracy: Algebraic Expressions & Simple Equations" },
  { title: "Numeracy: Interpreting Graphs, Charts & Real-life Data" }
],
    },
  ],
  "Year 6": [
    {
      id: "naplan-6-1",
      title: "ICAS Mastermind Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y6icas.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Challenge your intellect with the ICAS Mastermind Course, focused on advanced concepts and critical reasoning.",
      chapters: [
  { title: "Reading: Identifying Main Ideas in Short Texts" },
  { title: "Reading: Understanding Sequence & Order of Events" },
  { title: "Vocabulary: Synonyms, Antonyms & Contextual Meanings" },
  { title: "Grammar: Subject-Verb Agreement & Simple Tenses" },
  { title: "Writing: Personal Narratives with Clear Structure" },
  { title: "Writing: Informative Paragraphs (Facts & Details)" },
  { title: "Numeracy: Whole Numbers, Place Value & Rounding" },
  { title: "Numeracy: Fractions – Identifying & Comparing" },
  { title: "Numeracy: Shapes – Perimeter & Area Basics" },
  { title: "Numeracy: Reading Tables, Simple Graphs & Charts" }
],
    },
    {
      id: "naplan-6-2",
      title: "Scholarship Builder Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y6scholarship.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Lay the foundation for success in competitive exams with the Scholarship Builder Course, crafted for ambitious learners.",
      chapters: [
  { title: "Reading: Analysing Informative & Narrative Texts" },
  { title: "Reading: Identifying Author’s Purpose & Audience" },
  { title: "Reading: Comparing & Contrasting Texts" },
  { title: "Vocabulary: Using Context to Interpret Unfamiliar Words" },
  { title: "Grammar: Clauses, Conjunctions & Sentence Structures" },
  { title: "Spelling: Multi-syllabic Words & Common Suffixes/Prefixes" },
  { title: "Writing: Narrative – Character, Setting & Tension" },
  { title: "Writing: Persuasive – Developing Logical Arguments" },
  { title: "Numeracy: Multi-digit Multiplication & Long Division" },
  { title: "Numeracy: Fractions, Decimals, Percentages & Ratios" },
  { title: "Numeracy: Measurement – Area, Volume & Perimeter" },
  { title: "Numeracy: Data Interpretation & Probability" }
],
    },
  ],
  "Year 7": [
    {
      id: "naplan-7-1",
      title: "ICAS Genius Track Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y7icasgenius.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Unlock your full potential with the ICAS Genius Track Course, guiding students through advanced problem-solving pathways.",
      chapters: [
  { title: "Reading: Understanding Longer Fiction & Non-Fiction Texts" },
  { title: "Reading: Identifying Theme, Mood & Tone" },
  { title: "Vocabulary: Advanced Context Clues & Figurative Language" },
  { title: "Grammar: Clauses, Sentence Variety & Tense Consistency" },
  { title: "Writing: Narrative – Complex Plots & Character Development" },
  { title: "Writing: Persuasive – Evidence, Reasoning & Counterarguments" },
  { title: "Numeracy: Integers, Fractions, Decimals & Percentages" },
  { title: "Numeracy: Ratios, Rates & Proportions" },
  { title: "Numeracy: Algebra – Expressions & Equations" },
  { title: "Numeracy: Geometry, Perimeter, Area & Volume" }
],
    },
    {
      id: "naplan-7-2",
      title: "NAPLAN Progidy Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y7naplanprogidy.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Excel in exams with the NAPLAN Prodigy Course, crafted to nurture young minds into high achievers.",
chapters: [
  { title: "Reading: Analysing Fiction, Non-Fiction & Poetry" },
  { title: "Reading: Making Inferences & Interpreting Themes" },
  { title: "Reading: Evaluating Author’s Purpose & Tone" },
  { title: "Vocabulary: Figurative Language, Idioms & Nuanced Meanings" },
  { title: "Grammar: Complex & Compound-Complex Sentences" },
  { title: "Grammar: Punctuation – Colons, Semicolons & Advanced Usage" },
  { title: "Writing: Narrative – Developing Mood & Style" },
  { title: "Writing: Persuasive/Argumentative – Evidence & Counterarguments" },
  { title: "Numeracy: Fractions, Decimals, Percentages & Ratios" },
  { title: "Numeracy: Algebraic Expressions & Linear Equations" },
  { title: "Numeracy: Geometry – Angles, Perimeter, Area & Volume" },
  { title: "Numeracy: Data – Interpreting Graphs, Probability & Statistics" }
],

    },
  ],
  "Year 8": [
    {
      id: "naplan-8-1",
      title: "ICAS Genius Track Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y8icasgeniustech.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Pursue academic brilliance with the ICAS Genius Track Course, designed for students ready to take their skills to the next level.",
      chapters: [
  { title: "Reading: Literary Texts – Theme, Tone & Perspective" },
  { title: "Reading: Informative Texts – Compare & Contrast Ideas" },
  { title: "Vocabulary: Word Origins, Affixes & Nuances" },
  { title: "Grammar: Punctuation, Passive Voice & Cohesion" },
  { title: "Writing: Narrative – Imagery & Advanced Structure" },
  { title: "Writing: Persuasive – Logical Appeals & Formal Language" },
  { title: "Numeracy: Linear Equations & Coordinate Geometry" },
  { title: "Numeracy: Ratios, Rates & Percentages in Context" },
  { title: "Numeracy: Probability & Data Analysis" },
  { title: "Numeracy: Geometry – Angles, Circles & Symmetry" }
],
    },
  ],
  "Year 9": [
    {
      id: "sat",
      title: "ICAS Olympian Prep Course",
      type: "SAT Exam",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y9icasolymp.jpg",
      brochure: "/brochures/sat.pdf",
      desc: "Train like an Olympian with our ICAS Olympian Prep Course, tailored to prepare students for international-level competition.",
chapters: [
    { title: "Reading: Inference & Evaluation of Complex Texts" },
    { title: "Reading: Interpreting Poetry & Figurative Language" },
    { title: "Vocabulary: Contextual Word Meanings in Passages" },
    { title: "Grammar: Active & Passive Voice, Clauses" },
    { title: "Writing: Analytical Essays (Text Response)" },
    { title: "Writing: Summarising & Critical Thinking" },
    { title: "Numeracy: Algebra (Linear, Quadratic Patterns)" },
    { title: "Numeracy: Geometry & Measurement (Volume, Area, Perimeter)" },
    { title: "Numeracy: Data Handling & Probability" },
    { title: "Numeracy: Non-Routine Problem Solving" },
  ],
    },
    {
      id: "igcse",
      title: "NAPLAN Grand Master Course",
      type: "IGCSE",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 5,
      img: "/course/y9naplangm.jpg",
      brochure: "/brochures/igcse.pdf",
      desc: "Achieve mastery with the NAPLAN Grand Master Course, combining in-depth knowledge and advanced exam strategies.",
chapters: [
    { title: "Reading: Analysing Main Ideas, Tone & Purpose" },
    { title: "Reading: Comparing Text Types (Fiction vs Non-Fiction)" },
    { title: "Vocabulary: Advanced Synonyms, Antonyms & Idioms" },
    { title: "Grammar: Sentence Structures, Punctuation & Tenses" },
    { title: "Writing: Persuasive Essays (Strong Arguments)" },
    { title: "Writing: Narrative Essays (Creative Techniques)" },
    { title: "Numeracy: Algebraic Expressions & Equations" },
    { title: "Numeracy: Geometry (Angles, Circles, Coordinate Geometry)" },
    { title: "Numeracy: Probability & Statistics (Graphs, Averages, Data)" },
    { title: "Numeracy: Problem-Solving & Word Problems" },
  ],

    },
    {
      id: "naplan-9-1",
      title: "Selective Accelerator Program Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y9selacc.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Accelerate your learning with the Selective Accelerator Program, designed to prepare students for competitive entry tests.",
       chapters: [
    { title: "Reading: Advanced Comprehension (Author’s Viewpoint, Bias)" },
    { title: "Reading: Critical Comparison of Texts" },
    { title: "Vocabulary: Advanced Academic Vocabulary & Usage" },
    { title: "Grammar: Sentence Transformations & Error Correction" },
    { title: "Writing: Extended Persuasive Essays (Counterarguments)" },
    { title: "Writing: Analytical Writing (Evaluating Evidence)" },
    { title: "Numeracy: Algebra (Linear & Quadratic Equations, Inequalities)" },
    { title: "Numeracy: Advanced Geometry (Proofs, Theorems, Circles)" },
    { title: "Numeracy: Probability, Statistics & Data Analysis" },
    { title: "Numeracy: Advanced Problem Solving & Logical Reasoning" },
  ],
    },
  ],
  "Year 10": [
    {
      id: "naplan-10-1",
      title: "ICAS Grand Master Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y10icasgmnew.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Master challenging concepts with the ICAS Grand Master Course, helping learners reach the peak of their exam performance.",
      cchapters: [
  { title: "Reading: Analysing Themes Across Multiple Texts" },
  { title: "Reading: Author’s Purpose, Bias & Perspective" },
  { title: "Vocabulary: Academic & Subject-specific Language" },
  { title: "Grammar: Complex Constructions & Stylistic Devices" },
  { title: "Writing: Expository Essays – Structure & Clarity" },
  { title: "Writing: Persuasive Essays – Counterarguments & Rhetoric" },
  { title: "Numeracy: Quadratic Equations & Graphs" },
  { title: "Numeracy: Trigonometry – Sine, Cosine & Tangent" },
  { title: "Numeracy: Probability Distributions & Statistics" },
  { title: "Numeracy: Geometry – Circles, Polygons & Proofs" }
],
    },
  ],
  "Year 11": [
    {
      id: "naplan-11-1",
      title: "ICAS Ultimate Scholar Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y11icasscholar.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Step into academic excellence with the ICAS Ultimate Scholar Course, designed to build confidence and deep understanding.",
      chapters: [
  { title: "Reading: Critical Interpretation of Fiction & Non-Fiction" },
  { title: "Reading: Comparative Analysis of Texts" },
  { title: "Vocabulary: Advanced Academic & Technical Terms" },
  { title: "Grammar: Stylistic Choices & Sentence Manipulation" },
  { title: "Writing: Discursive Essays – Balanced Arguments" },
  { title: "Writing: Analytical Essays – Structure & Evidence" },
  { title: "Mathematics: Functions & Graphs" },
  { title: "Mathematics: Trigonometric Identities & Applications" },
  { title: "Mathematics: Calculus – Limits & Differentiation" },
  { title: "Mathematics: Probability & Statistics in Depth" }
],
    },
  ],
  "Year 12": [
    {
      id: "naplan-12-1",
      title: "HSC Mastery Program Course",
      type: "Exam Preparation",
      duration: "22hr 30min",
      topics: 34,
      sales: 250,
      rating: 4,
      img: "/course/y12hsc.jpg",
      brochure: "/brochures/naplan.pdf",
      desc: "Conquer final exams with the HSC Mastery Program Course, tailored for students aiming for top results in Year 12.",
      chapters: [
  { title: "Reading: Critical & Comparative Study of Texts" },
  { title: "Reading: Evaluating Authorial Intent & Context" },
  { title: "Vocabulary: Academic, Technical & Subject-specific Language" },
  { title: "Grammar: Stylistics, Syntax & Rhetorical Choices" },
  { title: "Writing: Extended Essays – Argument, Style & Structure" },
  { title: "Writing: Creative Writing – Symbolism, Voice & Style" },
  { title: "Mathematics: Advanced Calculus – Differentiation & Integration" },
  { title: "Mathematics: Algebra – Polynomials, Functions & Graphs" },
  { title: "Mathematics: Probability – Random Variables & Distributions" },
  { title: "Mathematics: Statistics – Data Analysis & Inference" }
],
    },
  ],
};


export default function ExamCourses() {
  const [activeYear, setActiveYear] = useState("Year 2");
  const router = useRouter();

  const items = coursesData[activeYear] || [];
  const isScrollable = items.length > 3;

  return (
    <div id="course"className="px-6 py-10 bg-[#FFEFE0] rounded-2xl mx-auto w-[92%] h-[700px] border border-gray-300">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Our Exam Preparation Courses
      </h2>

      {/* ✅ Year Navbar */}
      <div className="flex justify-center gap-4 mb-10 p-4 bg-orange-100 rounded-xl overflow-x-auto">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className="relative px-4 py-2 text-gray-700 font-medium"
          >
            {year}
            {activeYear === year && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom h-[3px] bg-orange-500 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`flex gap-6  ${
            isScrollable ? "overflow-x-auto justify-start" : "justify-center"
          }`}
        >
          {items.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col w-full sm:w-1/2 lg:w-[32%] ${
                isScrollable ? "flex-shrink-0" : ""
              }`}
            >
              {/* ✅ Gray Box at 6000x3375 ratio */}
              <div className="m-4 rounded-xl border border-gray-200 overflow-hidden">
                <div className="relative w-full aspect-[6000/3375] bg-gray-200">
                  <Image
                    src={course.img}
                    alt={course.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Course Info */}
              <div className="px-4 pb-4 flex flex-col flex-1">
                <p className="text-sm text-gray-500">{course.type}</p>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <div className="flex items-center text-yellow-500 mb-3">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                </div>

                {/* Meta Info */}
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <BookOpen size={16} /> {course.topics} Topics
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {course.sales} Enrolled
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex space-x-2 mt-auto">
                  <button
                    onClick={() => router.push(`/courses/${course.id}`)}
                    className="flex-1 bg-orange-500 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition"
                  >
                    Try a free Class
                  </button>
                  <a
                    href={course.brochure}
                    download
                    className="flex-1 bg-orange-500 text-white py-2 px-3 rounded-full hover:bg-orange-600 transition flex items-center justify-center gap-1"
                  >
                    <Download size={16} /> Download Brochure
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


export {coursesData};