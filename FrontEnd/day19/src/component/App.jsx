import React from "react";
import Counter from "./Counter";

export default class App extends React.Component {
    render() {
        return (
            <section>
                <h1>Click on the counters</h1>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </section>
        )
    }
}