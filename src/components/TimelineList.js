import TimelineItem from "./TimelineItem.js";
import timelines from "./timelines";

const TimelineList = () => {
  return timelines.map((line, key) => <TimelineItem lines={line} id={key} />);
};
export default TimelineList;
