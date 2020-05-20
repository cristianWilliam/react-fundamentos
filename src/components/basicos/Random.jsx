export default (props) =>
  Math.floor(Math.random() * (props.max - props.min)) + props.min;
