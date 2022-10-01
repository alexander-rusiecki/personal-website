import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
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
