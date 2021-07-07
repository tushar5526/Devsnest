import "../styles.css";
import Container from "./Container";

function App({ data }) {
    console.log(data);
    return (
        <div className="page">
            <Container data={data} />
        </div>
    )
}

export default App;