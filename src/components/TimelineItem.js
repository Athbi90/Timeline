import {
  Title,
  TimeImage,
  TimeWrapper,
  Description,
  Date,
  TitleDate,
} from "../styles.js";
const TimelineItem = (props) => {
  if (props.lines.id % 2 !== 0) {
    return (
      <TimeWrapper>
        <TitleDate>
          <Title>{props.lines.title}</Title>
          <Date>{props.lines.date}</Date>
        </TitleDate>
        <TimeImage src={props.lines.image} />
        <Description>{props.lines.paragraph}</Description>
      </TimeWrapper>
    );
  } else
    return (
      <TimeWrapper>
        <Description>{props.lines.paragraph}</Description>
        <TimeImage src={props.lines.image} />
        <TitleDate>
          <Title>{props.lines.title}</Title>
          <Date>{props.lines.date}</Date>
        </TitleDate>
      </TimeWrapper>
    );
};
export default TimelineItem;
