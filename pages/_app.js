import '../public/css/styles.css'; // Importe o arquivo CSS global
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;