import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Component {...pageProps} />
    </div>
  );
}
