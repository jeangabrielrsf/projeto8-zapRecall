import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import RunApp from "./RunApp";

export default function App () {
    const [screen, setScreen] = React.useState(true);

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
                    <RunApp />
                </div>
            )}
        </>
    );
}