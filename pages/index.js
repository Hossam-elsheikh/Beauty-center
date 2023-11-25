import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout/Layout';
import Main from '../components/Home/Home';
export default function Home() {
  return (
    <>
   <Head>
        <title>Beauty Center</title>
      </Head>
    <Main/>
    </>
  );
}
