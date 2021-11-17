import Head from "next/head";
import Header from "../components/Header";
import "tailwindcss/tailwind.css"
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import data from "./data.json"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home({products}) {
  return (

    <div className="bg-gray-100 absolute inset-0  max-w-full overflow:hidden">
      <Head>
        <title>KalaKriti</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width ,shrink-to-fit=no" />


      </Head>
    
      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
     <Header />
      {/* ---- ---- */}

      <main  id="main"  className="  mx-auto max-w-max">

      {/* banner */}
      <Banner />
      {/* product feed  */}
      <ProductFeed products={products} />


      </main>
      <ToastContainer />

    </div>
  );
}

export async function getServerSideProps(context){
  const products = data;

  return {
    props:{
      products
    }
  }
}