import {
  Title,
  TimeImage,
  TimeWrapper,
  Description,
  Date,
  TitleDate,
} from "../styles.js";
const SpecialItem = (props) => {
  index = props.id;
  return (
    <TimeWrapper>
      <TitleDate>
        <Title>{index.title}</Title>
        <Date>{props.lines.date}</Date>
      </TitleDate>
      <TimeImage src={props.lines.image} />
      <Description>{props.lines.paragraph}</Description>
    </TimeWrapper>
  );
};
export default SpecialItem;
