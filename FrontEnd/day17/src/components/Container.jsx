import "../styles.css";

function Container({ data }) {
    console.log('inside container', data);
    function Card({ data }) {
        // console.log('inside card',data);
        let cards = [];
        data.forEach((element,index) => {
            const e = (
                <div className="card">
                    <p>{element.name}</p>
                    <p>You have consumed {element.cals} today</p>
                </div>
            );
            cards.push(e);
        });
        return cards;
    }
    return (
        <div className="container">
            <Card data={data} />
        </div>
    )
}

export default Container;