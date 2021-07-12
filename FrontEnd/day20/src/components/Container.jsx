import '../styles.css';
import Card from './Card';
import { useState } from 'react';

function Container({ list }) {
    const [data, setData] = useState(list);
    return (
        <div className="container">
            {
                data.map((ele, index) => {
                    return <Card key={index} setData={setData} cals={ele.cals} name={ele.name} index={index} data={data} />
                })
            }
        </div>
    );

}

export default Container;