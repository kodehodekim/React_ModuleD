// prettier-ignore
// Main content component

function Main() {
  return (
    <main>
      <PropsCard
        title="This is a Prop"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Suscipit et laboriosam, neque, nesciunt asperiores voluptatem unde aspernatur labore, 
        deleniti aut minima explicabo voluptas incidunt mollitia dignissimos dolor numquam adipisci a?"
      />
    </main>
  );
}

function PropsCard(props) {
  return (
    <div className="Card">
      <p>Tinkledinadawdawdle</p>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Main;
