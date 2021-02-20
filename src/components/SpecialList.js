import SpecialItem from "./SpecialItem.js";
import timelines from "./timelines";

const SpecialList = (key) => {
  let id = key;
  return timelines.map(line, index) => (<SpecialItem lines={line} id={index} />);
;
export default SpecialList;
