import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/PromptPage.module.css"
import PromptDesc from "@/components/PromptDesc";
import ChipsX from "@/components/ChipsX";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <>
      <Head>
        <title>Prompt Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.header}>
          <ChipsX />
        </div>
        <div className={styles.promptCard}>
          <p className={styles.quotation1}>“</p>
          <p className={styles.prompt}>A chase with a happy dog, a wagging tail, and an adventurous pursuit </p>
          <p className={styles.quotation2}>”</p>
        </div>
        <div>
          <PromptDesc/>
        </div>
        <div>
          <button className={styles.regenerateButton}>Regenerate</button>
        </div>
        <div className={styles.footer}>
          <NavBar/>
        </div>
      </main>
    </>
  );
}
