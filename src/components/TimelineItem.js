import { Title, TimeImage, TimeWrapper, Description, Date } from "../styles.js";
const TimelineItem = (props) => {
  return (
    <TimeWrapper>
      <div clas>
        <Title>{props.lines.title}</Title>
        <Date>{props.lines.date}</Date>
      </div>
      <TimeImage src={props.lines.image} />
      <Description>{props.lines.paragraph}</Description>
    </TimeWrapper>
  );
};
export default TimelineItem;
