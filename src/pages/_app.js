// _app.js

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as ga from "../lib/ga"; // 导入Google Analytics 相关函数

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url); // 每当路由发生变化时发送页面浏览事件
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* 引入 Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${G - LNP93QDFE6}`}
      />

      {/* Google Analytics 初始化 */}
      <Script id="ga-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${G - LNP93QDFE6}');
        `}
      </Script>

      {/* 添加您提供的 Google Analytics 代码 */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LNP93QDFE6"
        strategy="lazyOnload"
      />
      <Script id="additional-ga-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
        
          gtag("config", "G-LNP93QDFE6");
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
