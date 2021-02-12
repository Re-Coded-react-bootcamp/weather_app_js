import "./Option.css";
export default function Option(props) {
  return (
    <div
      onClick={() => {
        props.update(props.city.woeid);
      }}
      className="option"
    >
      {props.city.name}
    </div>
  );
}
