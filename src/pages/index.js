import Head from "next/head";
import Header from "../components/Header";
import "tailwindcss/tailwind.css"
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import data from "./data.json"

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>KalaKriti</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
     <Header />
      {/* ---- ---- */}

      <main className="max-w-screen-2xl  mx-auto">

      {/* banner */}
      <Banner />
      {/* product feed  */}
      <ProductFeed products={products} />
      </main>

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