import React from 'react';
import './Home.css';

import Presentation from '../components/home/Aside/presentation';
import CityInfo from '../components/home/Aside/cityInfo';

function Home() {
  return (
    <main>
      <aside>
        <Presentation />
        <CityInfo />
      </aside>
      <section>
        <p> seção </p>
      </section>
    </main>
  )
}

export default Home;
