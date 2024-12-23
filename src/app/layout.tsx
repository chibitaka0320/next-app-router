import Provider from "./Provider";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Create Next App",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Provider>
          <Header />
          <Main>
            <Suspense fallback={<Loading></Loading>}>{children}</Suspense>
          </Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
