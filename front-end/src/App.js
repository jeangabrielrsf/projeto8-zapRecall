import React from "react";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import RunApp from "./RunApp";
import Bottom from "./Bottom/Bottom";
import "./css/reset.css"
import "./css/styles.css"


export default function App () {
    const [screen, setScreen] = React.useState(true);
    const [contador, setContador] = React.useState(0);
    const [iconBottom, setIconBottom] = React.useState([]);
    const [resultAll, setResultAll] = React.useState("hidden");
    const [wrongAnswer, setWrongAnswer] = React.useState(false);

    return (
        <>
            {screen? (
                <div>
                    <WelcomeScreen />
                    <div className="welcome-button" onClick={() => setScreen(!screen)}>
                        Iniciar Recall!
                    </div>
                </div>
            )  : (
                <div>
                    <RunApp contador={contador} setContador={setContador} iconBottom={iconBottom} 
                            setIconBottom={setIconBottom} resultAll={resultAll} setResultAll={setResultAll}
                            wrongAnswer={wrongAnswer} setWrongAnswer={setWrongAnswer} />
                    <Bottom contador={contador}  setContador={setContador} 
                            iconBottom={iconBottom} setIconBottom={setIconBottom}
                            wrongAnswer={wrongAnswer} screen={screen} setScreen={setScreen} />
                </div>
            )}
        </>
    );
}