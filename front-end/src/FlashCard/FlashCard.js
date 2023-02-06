import React from "react";
import "./style.css"
import flipImg from "../img/flip.svg"
// import RunApp from "./RunApp";
// import App from "./App";

export default function FlashCard ({card, 
                                    contador, 
                                    setContador,
                                    iconBottom, 
                                    setIconBottom,
                                    resultAll,
                                    setResultAll,
                                    wrongAnswer,
                                    setWrongAnswer
                                }) {

    const [titleClass, setTitleClass] = React.useState("titles");
    const [questionsClass, setQuestionsClass] = React.useState("hidden");
    const [answersClass, setAnswersClass] = React.useState("hidden")
    const [titleStyle, setTitleStyle] = React.useState("");
    const [icon, setIcon] = React.useState("play-outline");


    function openQuestion () {
        if (!card.answered) {
            console.log("abri a pergunta");
            setTitleClass("hidden");
            setQuestionsClass("questions");
        }
        
    }

    function openAnswer () {
        console.log("abri a resposta");
        setQuestionsClass("hidden");
        setAnswersClass("answers");
    }

    function chooseOption (option) {
        console.log("respondi");
        console.log(resultAll);
        console.log(typeof resultAll);
        console.log(wrongAnswer);
        if (!card.answered) {
            setAnswersClass("hidden");
            setTitleClass("titles")
            if (option ==="red"){
                setTitleStyle("riscado red");
                setIcon("close-circle");
                setContador(contador + 1);
                setIconBottom([...iconBottom, "close-circle"]);
                setWrongAnswer(true);
                
            }
            if (option === "orange"){
                setTitleStyle("riscado orange");
                setIcon("help-circle");
                setContador(contador + 1);
                setContador(contador + 1);
                setIconBottom([...iconBottom, "help-circle"]);
            }
            if (option === "green") {
                setTitleStyle("riscado green");
                setIcon("checkmark-circle");
                setContador(contador + 1);
                setContador(contador + 1);
                setIconBottom([...iconBottom, "checkmark-circle"]);
            }
            card.answered = true;
        }
        console.log(contador);
    }

    return (
        <>
            <div className={titleClass} onClick={openQuestion}>
                <p className={titleStyle}>{card.title}</p>
                <ion-icon name={icon}></ion-icon>
            </div>

            <div className={questionsClass} onClick={openAnswer}>
                <p>{card.question}</p>
                <img src={flipImg}/>
            </div>

            <div className={answersClass}>
                <p>{card.answer}</p>
                <div className="options">
                    <div className="redOption" onClick={() => chooseOption("red") }>
                        Não lembrei
                    </div>
                    <div className="orangeOption" onClick={() => chooseOption("orange")}>
                        Quase não lembrei
                    </div>
                    <div className="greenOption" onClick={() => chooseOption("green")}>
                        Zap!
                    </div>
                </div>
            </div>

        </>

    )
}