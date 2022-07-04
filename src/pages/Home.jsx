import React, { useState } from "react";
import { InputSlider } from "../components/InputSlider";
import { RefrigerantPropLookup } from "../helpers/RefrigerantPropLookup";
import { GetArrayIndex } from "../helpers/GetArrayIndex";
import { R22 } from "../components/refrigerants/R22";

export function Home() {

  // COMPRESSOR
  // GS34CLX
  // LBP Compressor
  // R404A/R507
  // 220-240V 50Hz
  const compDisplacement = 33.8; // cm3
  const compFrequency = 50;
  const compFlowRate = compDisplacement * compFrequency;


  // EXPANSION VALVE
  const orificeSize = 1;
    

  // OPERATION PARAMETERS
  let tempCompressor = 70; // celcius
  let tempLiquid = 28; // celcius


  // REFRIGERANT
  const refrigerant = 'r22'
  // let liquidDensity = RefrigerantPropLookup({refrigerant: refrigerant, referenceProperty: 'temperature', referenceValue: tempLiquid, targetProperty: 'liquidDensity' });
  let vapourVolume = null;


  const [pressure, setPressure] = useState(1900);
  const [value, setValue] = useState(0);

  function updatePressure(event, value) {
    setPressure(value);
    updateValue(value / 1000);
  }

  function updateValue(value) {
    const lookupProps = {
      refrigerant: 'r22',
      referenceProperty: 'pressure',
      referenceValue: value,
      targetProperty: 'temperature'
    }

    setValue(RefrigerantPropLookup(lookupProps));
  }

  return (
    <>
      <div className="Result">
        <span>{value} °C</span>
      </div>
      <div className="Sliders">
        <InputSlider label='pressure' pressure={pressure} updatePressure={updatePressure} />
      </div>
    </>
  )
}