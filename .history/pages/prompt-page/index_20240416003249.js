import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/PromptPage.module.css"
import PromptDesc from "@/components/PromptDesc";
import ChipsX from "@/components/ChipsX";


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
        <div>
          <div>
            <ChipsX 
              chipsXText="Animal"
              imgSrc="/images/X_light_blue.svg"
              imgAlt="Chips with X light blue color"
            />

            <ChipsX 
              chipsXText="Animal"
              imgSrc="/images/X_light_blue.svg"
              imgAlt="Chips with X light blue color"
            />
            
          </div>
        </div>
        <div>
          <PromptDesc/>
        </div>
      </main>
    </>
  );
}
