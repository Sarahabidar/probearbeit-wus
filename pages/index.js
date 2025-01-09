import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Quote from "../components/Quote";

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const res = await fetch("/api/visitor");
      const data = await res.json();
      setVisitorCount(data.count);
    };
    fetchVisitorCount();
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1">
        <Quote />
      </main>
      <Footer visitorCount={visitorCount} />
    </div>
  );
}
