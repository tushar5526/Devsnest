import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const data = [{
    name: "Pizza",
    cals: 56
},
{
    name: "Burger",
    cals: 69
},
{
    name: "Coke",
    cals: 500
},
{
    name: "Coke",
    cals: 500
},
{
    name: "Coke",
    cals: 500
},
{
    name: "Coke",
    cals: 500
},
{
    name: "Coke",
    cals: 500
}];

ReactDOM.render(<App data={data} />, document.getElementById('root'));

