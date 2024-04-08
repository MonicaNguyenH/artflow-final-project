import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/ShirinTest.module.css";
import ThemeCards from "@/components/ThemeCards";
import UserCard from "@/components/UserCard";

export default function ShirinTest() {
  return (
    <>
      <Head>
        <title>ArtFlow</title>
        <meta name="description" content="The drawing prompt app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <UserCard />
        <ThemeCards />
      </main>
    </>
  );
}