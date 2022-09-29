import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio resume site made by Alexander Rusiecki"
        />
        <meta name="author" content="Alexander Rusiecki" />
        <meta
          name="keywords"
          content="Alexander Rusiecki, web developer, Stockholm, Sweden"
        />
        <meta name="og:title" content="Alexander Rusiecki Home" />
        <meta name="og:description" content="Alexander Rusiecki Home" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://alexanderrusiecki.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
