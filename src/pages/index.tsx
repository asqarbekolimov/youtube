import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Layout from "@/layout/layout";
import Category from "@/layout/category/category";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Category />
        <div>home</div>
      </Layout>
    </>
  );
}
