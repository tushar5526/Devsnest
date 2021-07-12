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
    cals: 600
},
{
    name: "Shake",
    cals: 100
},
{
    name: "Sweet",
    cals: 200
},
{
    name: "Chocolates",
    cals: 350
}];


ReactDOM.render(<App data={data} />, document.getElementById('root'));