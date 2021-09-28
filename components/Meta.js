import React from "react";
import Head from "next/head";

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "I am bored",
  keywords: "fun, game, api, web development, time waster",
  description:
    "get random activity suggestion on a simple button click, get inspired now !",
};

export default Meta;
