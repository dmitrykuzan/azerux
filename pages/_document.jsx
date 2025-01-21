import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Preload Fonts with Font Display */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'IBMPlexSans';
                src: url('/fonts/IBMPlexSans-ExtraLight.woff2') format('woff2');
                font-weight: 200;
                font-display: swap;
              }
              @font-face {
                font-family: 'IBMPlexSans';
                src: url('/fonts/IBMPlexSans-Light.woff2') format('woff2');
                font-weight: 300;
                font-display: swap;
              }
              @font-face {
                font-family: 'IBMPlexSans';
                src: url('/fonts/IBMPlexSans.woff2') format('woff2');
                font-weight: 400;
                font-display: swap;
              }
              @font-face {
                font-family: 'IBMPlexSans';
                src: url('/fonts/IBMPlexSans-Medium.woff2') format('woff2');
                font-weight: 500;
                font-display: swap;
              }
            `
          }}
        />

        {/* Inline Script for Dark Mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var storageKey = "darkMode";
                var classNameDark = "dark-mode";
                var classNameLight = "light-mode";

                function setClassOnDocumentBody(darkMode) {
                  document?.body?.classList?.add(darkMode ? classNameDark : classNameLight);
                  document?.body?.classList?.remove(darkMode ? classNameLight : classNameDark);
                }

                var preferDarkQuery = "(prefers-color-scheme: dark)";
                var mql = window.matchMedia(preferDarkQuery);
                var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                var localStorageTheme = null;

                try {
                  localStorageTheme = localStorage.getItem(storageKey);
                } catch (err) {}

                var localStorageExists = localStorageTheme !== null;
                if (localStorageExists) {
                  localStorageTheme = JSON.parse(localStorageTheme);
                }

                if (localStorageExists) {
                  setClassOnDocumentBody(localStorageTheme);
                } else if (supportsColorSchemeQuery) {
                  setClassOnDocumentBody(mql.matches);
                  localStorage.setItem(storageKey, mql.matches);
                } else {
                  var isDarkMode = document.body.classList.contains(classNameDark);
                  localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                }
              })();
            `
          }}
        />
      </Head>
      <body>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-21FG81189D');
              `
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
