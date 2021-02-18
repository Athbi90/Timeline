import TimelineItem from "./TimelineItem.js";
import timelines from "./timelines";

const TimelineList = () => {
  return timelines.map((line) => <TimelineItem lines={line} />);
};
export default TimelineList;
