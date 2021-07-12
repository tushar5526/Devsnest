import '../styles.css';
import Container from './Container';

function App({ data }) {
    return (
        <div className="page">
            <Container list={data} />
        </div>
    );
}

export default App;