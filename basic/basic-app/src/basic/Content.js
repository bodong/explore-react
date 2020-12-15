function Content(props) {
  return (
    <section>
      <p>Fruits available are </p>
      <ul style={{ textAlign: "center" }}>
        {props.data.map((item) => (
          <li key={item.id}>{item.elemt}</li>
        ))}
      </ul>
    </section>
  );
}

export default Content;
