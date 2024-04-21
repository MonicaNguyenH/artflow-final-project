import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/HealthGraph.module.css";
import VerticalBar from "@/components/VerticalBar";


export default function HealthGraph() {
  return (
    <>
      <Head>
        <title>Prompt Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
            <VerticalBar/>
        </div>
      </main>
    </>
  );
}
