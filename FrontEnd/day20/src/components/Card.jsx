import '../styles.css';

function Card({ index, setData, cals, name, data }) {
    function Delete() {
        return (
            <button onClick={() => {
                const newData = data.filter((ele, i) => index !== i);
                setData(newData);
            }}>Delete</button>
        )
    }
    function Data() {
        return (
            <div>
                <p>{name}</p>
                <p>You have consumed {cals} today</p>
            </div>
        );
    }
    return (
        <div className="card">
            <Data />
            <Delete />
        </div>
    );
}

export default Card;
