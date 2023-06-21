import Head from 'next/head';
import Home from '../components';

const IndexPage = () => (
  <div className="grid place-content-center">
    <Head>
      <title>NextJs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Home />
  </div>
);

export default IndexPage;
