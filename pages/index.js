import React from 'react';
import Head from 'next/head';
import TextAnimation from '../components/TextAnimation';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Oliveira</title>
        <meta name="description" content="Guilherme Oliveira's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="banner"></div>

        <img className="imgProfile" src="/img/gui.jpg" alt="Guilherme Oliveira" />

        <h1 className="titleName">Guilherme Oliveira</h1>

        <div className="socialMedias">
          <a
            href="https://www.linkedin.com/in/guilherme-oliveira-2603911b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/linkedin.svg" alt="LinkedIn" />
          </a>

          <a className="circle" href="https://github.com/GuiGRD" target="_blank" rel="noopener noreferrer">
            <img src="/img/github.svg" alt="Github" />
          </a>
        </div>

        <TextAnimation />
      </main>

      {/* <script src="/js/scripts.js"></script> */}
    </div>
  );
}