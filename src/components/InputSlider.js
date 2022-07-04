import { Slider } from "@mui/material"

export function InputSlider(props) {
  return (
    <>
      <div className="SliderContainer">
      <span className="SliderLabel">{props.label}</span>
      <div className="Slider">
        <Slider
          aria-label={props.label}
          defaultValue={1900}
          valueLabelDisplay="off"
          step={1}
          min={0}
          max={4900}
          onChange={props.updatePressure}
        />
      </div>
      <div className="SliderValue">
        <span>{props.pressure}</span>
      </div>
    </div>
  </>
  )
}