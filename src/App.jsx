import "./styles.css";

export default function Card(props) {
  return (
    <div className="Card">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.mob}</p>
      <p>{props.email}</p>
    </div>
  );
}
