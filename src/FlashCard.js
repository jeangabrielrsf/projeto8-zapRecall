import React from "react";
import "./css/styles.css"
import flipImg from "./img/flip.svg"

export default function FlashCard ({card}) {

    const [titleClass, setTitleClass] = React.useState("titles");
    const [questionsClass, setQuestionsClass] = React.useState("hidden");
    const [answersClass, setAnswersClass] = React.useState("hidden")
    const [titleStyle, setTitleStyle] = React.useState("");


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

        if (!card.answered) {
            setAnswersClass("hidden");
            setTitleClass("titles")
            if (option ==="red"){
                setTitleStyle("riscado red")
                
            }
            if (option === "orange"){
                setTitleStyle("riscado orange")
            }
            if (option === "green") {
                setTitleStyle("riscado green")

            }
            card.answered = true;
        }
    }

    return (
        <>
            <div className={titleClass} onClick={openQuestion}>
                <p className={titleStyle}>{card.title}</p>
                <ion-icon name="play-outline"></ion-icon>
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