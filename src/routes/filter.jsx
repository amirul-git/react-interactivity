import { useEffect } from "react";
import { useState } from "react";
import Boat from "../components/Boat";
import Checkbox from "../components/Checkbox";

export default function Filter() {
  const boats = [
    { id: 1, name: "1760 Retriever Jon", type: "fishing", price: "$" },
    { id: 2, name: "1650 Super Hawk", type: "fishing", price: "$" },
    { id: 3, name: "1850 Super Hawk", type: "fishing", price: "$$" },
    { id: 4, name: "Beneteau First 14", type: "sailing", price: "$$" },
    { id: 5, name: "Beneteau Oceanis 31", type: "sailing", price: "$$$" },
    { id: 6, name: "Yamaha 212X", type: "sporting", price: "$$" },
    { id: 7, name: "Yamaha 275SD", type: "sporting", price: "$$$" },
    { id: 8, name: "Yamaha 100s", type: "sporting", price: "$" },
  ];
  const options = ["all", "fishing", "sailing", "sporting"];

  const [filteredBoats, setFilteredBoats] = useState(boats);
  const [type, setType] = useState("all");
  const [prices, setPrices] = useState([]);

  function handleTypeChange(e) {
    const type = e.target.value;
    setType(type);
  }

  function handleCheckedChange(e) {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      setPrices([...prices, value]);
    } else {
      const filter = prices.filter((prices) => {
        return prices !== value;
      });
      setPrices(filter);
    }
  }

  function resetFilter(e) {
    setType("all");
    setPrices([]);
  }

  useEffect(() => {
    if (type === "all") {
      if (prices.length === 0) {
        return setFilteredBoats(boats);
      } else {
        const filteredBoats = boats.filter((boat) => {
          return prices.includes(boat.price);
        });
        return setFilteredBoats(filteredBoats);
      }
    } else {
      if (prices.length === 0) {
        return setFilteredBoats(boats.filter((boat) => boat.type === type));
      } else {
        const filtered = boats.filter((boat) => {
          return prices.includes(boat.price) && boat.type === type;
        });
        return setFilteredBoats(filtered);
      }
    }
  }, [type, prices]);

  return (
    <>
      <main className="px-4 mt-16">
        <h1 className="text-3xl font-bold text-center text-[#0f172a]">
          Daily Boat Rentals
        </h1>
        <section className="mt-8 flex items-center justify-center gap-6">
          <select
            className="p-3 px-4 bg-[#e5e7eb] border border-slate-500 rounded-md"
            onChange={(e) => handleTypeChange(e)}
            value={type}
          >
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          <div className="flex gap-3">
            <Checkbox
              value="$"
              bind={prices}
              onChange={(e) => handleCheckedChange(e)}
            />
            <Checkbox
              value="$$"
              bind={prices}
              onChange={(e) => handleCheckedChange(e)}
            />
            <Checkbox
              value="$$$"
              bind={prices}
              onChange={(e) => handleCheckedChange(e)}
            />
          </div>
          <p onClick={resetFilter} className="text-xl underline cursor-pointer">
            Clear All
          </p>
        </section>
        <section className="flex justify-center mt-8 gap-6 flex-wrap  max-w-4xl mx-auto">
          {filteredBoats.map((boat) => {
            return <Boat key={boat.id} boat={boat} />;
          })}
        </section>
      </main>
    </>
  );
}
