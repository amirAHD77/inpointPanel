import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="rtl">
      <Head>
        <link
          rel="preload"
          href="/fonts/IRANSans.ttf"
          as="font"
          crossOrigin=""
          type="font/truetype"
        />
      </Head>
      <body dir="rtl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
