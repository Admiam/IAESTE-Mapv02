import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Map from "../components/map";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout
      main={
        <div className="flex">
          <div
            className="w-1/4 pb-4"
            style={{ maxHeight: "calc(100vh - 64px)", overflowX: "scroll" }}
          >
            Places list
          </div>
          <div className="w-3/4 pb-4">
            <Map ReactMapGL={undefined} />
          </div>
        </div>
      }
    />
  );
}
