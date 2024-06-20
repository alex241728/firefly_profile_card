import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <MoePointList />
            </div>
        </div>
    );
}

function Avatar() {
    return <img className="avatar" src={require("./images/firefly.jpg")} alt="Firefly"/>
}

function Intro() {
    return (
        <div className="intro">
            <h1>Firefly(AR-26710)</h1>
            <p>
                A member of the Stellaron Hunters and a young girl clad in a mechanical armor "SAM." Born as a weapon,
                she is afflicted with the agony of Entropy Loss Syndrome due to genetic modification. She joined the
                Stellaron Hunters in search of the meaning of life, relentlessly pursuing ways to defy fate.
            </p>
        </div>
    );
}

function MoePointList() {
    return (
        <div className="moe-point-list">
            <MoePoint moepoint="strong mecha" emoji="💪" color="green"/>
            <MoePoint moepoint="tender" color="orangered"/>
            <MoePoint moepoint="caefly" emoji="❤️" color="yellow" />
        </div>
    );
}

function MoePoint(props) {
    return (
        <div className="moe-point" style={
            {
                backgroundColor: props.color
            }
        }>
            <span>{props.moepoint}</span>
            <span>{props.emoji}</span>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

