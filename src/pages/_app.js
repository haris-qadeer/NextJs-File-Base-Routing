import "@/styles/globals.css";
import EventsSearch from "../../components/events/event-seach";
import Layout from "../../components/layout/layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
