import Deck from "./Deck/Deck";
import Top from "./Top/Top";
// import App from "./App";

export default function RunApp ({contador, 
                                setContador, 
                                iconBottom, 
                                setIconBottom,
                                resultAll,
                                setResultAll,
                                wrongAnswer,
                                setWrongAnswer}) {
    return (
        <>
            <Top />
            <Deck   contador={contador} setContador={setContador} iconBottom={iconBottom} setIconBottom={setIconBottom}
                    resultAll={resultAll} setResultAll={setResultAll}
                    wrongAnswer={wrongAnswer} setWrongAnswer={setWrongAnswer} />
        </>
    );
}