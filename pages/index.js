import Head from "next/head";
import styles from "./index.module.css";
import Chat from "../components/Chat";

export default function Home() {

  return (    
    <div>
    <Head>
      <title>TechValley AI</title>
      
    </Head>
    <main className={styles.main}>     
      </main>
    <Chat />    
    </div>
  );
}
