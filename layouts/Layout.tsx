import Head from "next/head";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { Navbar } from "../components/molecules";
import styles from "../styles/Home.module.css";

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

// const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title || "Rick and Morty"}</title>
        <meta name="author" content="Daniel Monotya" />
        <meta
          name="description"
          content={`Información de Rick and morty:  ${title}`}
        />
        <meta name="keywords" content={`${title}, rick, morty, serie`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 40px",
        }}
      >
        {children}
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Daniel Montoya
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </main>
    </div>
  );
};
