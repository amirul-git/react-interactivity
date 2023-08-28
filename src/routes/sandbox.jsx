import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/ButtonSandbox";
import Receipt from "../components/Receipt";
import InputNumber from "../components/InputNumber";

export default function SandBox() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  const [pound, setPound] = useState(0);
  const [price, setPrice] = useState(false);

  function handleLengthChange(e) {
    setLength(parseInt(e.target.value));
  }

  function handleWidthChange(e) {
    setWidth(parseInt(e.target.value));
  }

  function handleDepthChange(e) {
    setDepth(parseInt(e.target.value));
  }

  function handleGetPrice() {
    setPrice(pound * 12);
  }

  useEffect(() => {
    const pounds = length * width * depth;
    setPound(pounds);
  }, [length, width, depth]);

  return (
    <>
      <main className="px-4 mt-16">
        <h1 className="text-3xl font-bold text-center mb-8">Build A Sandbox</h1>
        <section className="mx-auto max-w-lg bg-white rounded-md p-6 shadow-lg">
          <div className="flex gap-[1px] sm:gap-3">
            <InputNumber
              label="length"
              unit="feet"
              onChange={(e) => handleLengthChange(e)}
            />
            <InputNumber
              label="Width"
              unit="feet"
              onChange={(e) => handleWidthChange(e)}
            />
            <InputNumber
              label="Depth"
              unit="inch"
              onChange={(e) => handleDepthChange(e)}
            />
          </div>
          <h3 className="font-bold text-center mt-4">
            You need {pound} pound of sand
          </h3>
          <Button onClick={handleGetPrice} />
        </section>
        {price && <Receipt price={price} />}
      </main>
    </>
  );
}
