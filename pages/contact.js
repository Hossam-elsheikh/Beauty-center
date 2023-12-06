import Contact from "../components/Contact/Contact";
import Head from 'next/head';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="py-5">
        <Contact />
      </div>
    </>
  );
};

export default contact;
