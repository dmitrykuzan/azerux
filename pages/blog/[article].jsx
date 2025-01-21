import Head from "next/head";

// Layouts
import { MainLayout } from "@layouts";

// Pages
import { Article } from "@pages";

const Page = () => {
  return (
    <>
      <Head>
        <title>Article</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <link rel="icon" href="/img/ui/u_favicon.svg" />
      </Head>
      <Article />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
