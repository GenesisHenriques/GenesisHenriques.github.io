import React from 'react';
import './Home.css';

import Presentation from '../components/home/Aside/presentation';
import MoreInfo from '../components/home/Aside/moreInfo';

function Home() {
  return (
    <main>
      <aside>
        <Presentation />
        <MoreInfo />
      </aside>
      <section>
        <p> seção </p>
      </section>
    </main>
  )
}

export default Home;
