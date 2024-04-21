import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/HealthGraph.module.css";
import HorizontalChart from "@/components/HorizontalChart";


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
        <div className={styles.header}>
            <div className={styles.icon}>
                <img className={styles.return} src="/images/return-icon.svg" alt="Google Logo" width="24.98" height="16`.03"/>
            </div>
            <div className={styles.learnMore}>
                <p>Learn more</p>
            </div>
        </div>
        <div className={styles.graphCaption}>
            <p>Health, well-being, and social connections of art gallery visitors</p>
        </div>
        <div className={styles.chartContainer}>
            <HorizontalChart/>
        </div>
        <div className={styles.paragraphs}>
            <p className={styles.p1}>In 2010, 35.7% of Canadians aged 15 or older visited public art galleries or museums, total 10.0 million visitors.</p>
            <p className={styles.p2}>Art gallery visitors exhibit significant associations with positive social indicators:
                More likely to report excellent mental health (67% vs. 58%)
                More likely to volunteer (50% vs. 31%)
                Less likely to feel trapped in routine (30% vs. 37%)
                More likely to help neighbours (69% vs. 63%) </p>
            <p className={styles.p3}>These differences are statistically significant, while art gallery visitors show similar levels of stress (37% vs. 38%) compared to non-visitors.</p>
        </div>
      </main>
    </>
  );
}
