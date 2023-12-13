// src/pages/index.js

import Masthead from '../components/Masthead';
import Services from '@/components/Services';
import PortfolioGrid from '@/components/PortfolioGrid';
import About from '@/components/About';
import Team from '@/components/Team';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="stylesheet" href="`/assets/css/main.css" />
      </Head>
      
       <Masthead />
       <Services />
      <PortfolioGrid />
      <About />
      <Team />
      <Clients />
      <Contact /> 
      
    </div>
  );
};

export default Home;
