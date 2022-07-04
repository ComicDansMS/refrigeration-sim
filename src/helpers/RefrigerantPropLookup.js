import { R22 } from "../components/refrigerants/R22";
import { GetArrayIndex } from "./GetArrayIndex";

export function RefrigerantPropLookup(object) {
  const referenceProperty = object.referenceProperty;
  const referenceValue = parseFloat(object.referenceValue);
  const targetProperty = object.targetProperty;
  const referenceValueRow = GetArrayIndex(R22[referenceProperty], referenceValue)

  return R22[targetProperty][referenceValueRow];
}