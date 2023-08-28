import { useState } from "react";
import Button from "../components/Button";
import RadioButton from "../components/RadioButton";

export default function Light() {
  const [lux, setLux] = useState(0);
  const [brightness, setbrightness] = useState(3000);
  const [color, setColor] = useState("#f1c40e");

  function handleOn() {
    lux < 100 && lux >= 0 && setLux(100);
  }

  function handleInc() {
    lux < 100 && lux >= 0 && setLux(lux + 10);
  }

  function handleDec() {
    lux > 0 && setLux(lux - 10);
  }

  function handleOff() {
    setLux(0);
  }

  function handleBrightnessChange(brightness) {
    setbrightness(brightness);
    if (brightness === 3000) {
      setColor("#f1c40e");
    } else if (brightness === 4000) {
      setColor("#feff66");
    } else {
      setColor("#99ccff");
    }
  }

  return (
    <>
      <main className="px-4 mt-16">
        <h1 className="text-3xl font-bold text-center text-[#0f172a]">
          Front Porch Light
        </h1>
        <div className="items-center justify-center mt-8">
          <div>
            <div className="mb-8">
              <div className="h-12 bg-slate-300 rounded-lg max-w-xl mx-auto">
                <div
                  style={{
                    width: `${lux}%`,
                    backgroundColor: `${color}`,
                    transition: `width 2000ms ease`,
                  }}
                  className="h-full rounded-lg"
                >
                  <div className="flex justify-center items-center h-full">
                    <p className="font-bold">{lux}%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-3">
                <Button emoji="🌞" onClick={handleOn} />
                <Button emoji="👆" onClick={handleInc} />
                <Button emoji="👇" onClick={handleDec} />
                <Button emoji="🌙" onClick={handleOff} />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="flex gap-10">
                <RadioButton
                  brightness={3000}
                  currentBrightness={brightness}
                  onChange={() => handleBrightnessChange(3000)}
                />

                <RadioButton
                  brightness={4000}
                  currentBrightness={brightness}
                  onChange={() => handleBrightnessChange(4000)}
                />

                <RadioButton
                  brightness={5000}
                  currentBrightness={brightness}
                  onChange={() => handleBrightnessChange(5000)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
