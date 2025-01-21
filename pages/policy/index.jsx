import Head from "next/head";
import { MainLayout } from "@layouts";
import PolicyPage from "./[type]";

const Page = () => {
  return (
    <>
      <Head>
        <title>Policy</title>
        <meta property="og:image" content="/img/ui/u_favicon.svg" />
        <meta property="og:url" content="" />
        <link rel="icon" href="/img/ui/u_favicon.svg" />
      </Head>
      <PolicyPage />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;


export default Page;
