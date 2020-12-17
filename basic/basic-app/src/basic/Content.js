import banner from "../fruits.jpg";

function Content(props) {
  return (
    <section>
      <p>Fruits available are </p>
      <img src={banner} alt="fruits background" />
      <ul style={{ textAlign: "center" }}>
        {props.data.map((item) => (
          <li key={item.id}>{item.elemt}</li>
        ))}
      </ul>
    </section>
  );
}

export default Content;
