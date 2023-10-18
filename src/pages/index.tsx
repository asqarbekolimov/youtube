import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Layout from "@/layout/layout";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <>
      <Layout>
        <div>home</div>
      </Layout>
    </>
  );
}
