import React from "react";
import "../styles/base.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App() {
    const [loginState, setloginState] = useLocalStorage("login", false);
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <LoginContext.Provider value={{ loginState, setloginState }}>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </LoginContext.Provider>
            </Switch>
        </Router>
    );
}

function Home() {
    const { loginState, setloginState } = useContext(LoginContext);
    return (
        <div className="home">
            <p>Login to access dashboard and profile</p>
            <h1>Home</h1>
            {
                loginState ? <button onClick={() => setloginState(false)}>Logout</button> : <button onClick={() => setloginState(true)}>Login</button>
            }
        </div>
    );
}

function About() {

    return <h2>About</h2>;
}

function Dashboard() {
    const { loginState } = useContext(LoginContext);
    if (!loginState)
        return <Redirect to="/" />;
    return <h1>your dash</h1>
}


function Profile() {
    const { loginState } = useContext(LoginContext);
    if (!loginState)
        return <Redirect to="/" />;
    return <h1>Profile</h1>
}