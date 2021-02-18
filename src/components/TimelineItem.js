import { Title, TimeImage, TimeWrapper, Description } from "../styles.js";
const TimelineItem = (props) => {
  return (
    <TimeWrapper>
      <Title>{props.lines.title}</Title>
      <TimeImage src={props.lines.image} />
      <Description>{props.lines.paragraph}</Description>
    </TimeWrapper>
  );
};
export default TimelineItem;
