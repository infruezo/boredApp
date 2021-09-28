import Head from "next/head";
import Activity from "../components/Activity";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home({ activity }) {
  return (
    <>
      <Header activity={activity} />
    </>
  );
}

export const getStaticProps = async () => {
  const link = "https://www.boredapi.com/api/activity/";
  const res = await fetch(link);

  const activity = await res.json();

  return {
    props: {
      activity,
    },
  };
};
