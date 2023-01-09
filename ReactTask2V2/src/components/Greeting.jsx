// prettier-ignore
// Props.children

function Greeting(props) {
    return (
    <div>
        <h1>Hello there {props.name}</h1>
        {props.children}
    </div>
    );
  }

export default Greeting;
