import "../styles/globals.css";
import "../styles/all.min.css";
import AppLayout from "../components/layouts/appLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
