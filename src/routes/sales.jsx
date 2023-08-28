import { useState, useEffect } from "react";
import Info from "../components/Info";
Info;

export default function Sales() {
  const [newOrders, setNewOrders] = useState(random(25));
  const [salesAmount, setSalesAmount] = useState(random(1000));
  const [satisfaction, setSatisfaction] = useState(random(100));

  useEffect(() => {
    const interval = setInterval(() => {
      handleRefresh();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function random(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function handleRefresh() {
    setNewOrders(random(25));
    setSalesAmount(random(1000));
    setSatisfaction(random(100));
  }

  return (
    <>
      <main className="px-4 mt-16">
        <h1 className="text-3xl font-bold text-center text-[#0f172a] mb-8">
          Snappy Sales 📊
        </h1>
        <section className="bg-white max-w-2xl mx-auto rounded-xl shadow-xl flex justify-around">
          <Info title="New Orders" value={newOrders} />
          <Info title="Sales Amount" value={salesAmount} />
          <Info title="satisfaction" value={satisfaction + "%"} />
        </section>
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleRefresh}
            className="px-4 py-2  block bg-white rounded-xl mt-8 text-indigo-700 shadow-lg"
          >
            Refresh
          </button>
        </div>
      </main>
    </>
  );
}
