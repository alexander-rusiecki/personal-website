import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />
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
