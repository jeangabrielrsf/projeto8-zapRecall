import React from "react";

export default function Deck () {
    let cardsArray = [
        {   question: "pergunta1" ,
            answer: "resposta1",
            tapped: false, 
            answered: false
        },

        {   question: "pergunta2" ,
            answer: "resposta2",
            tapped: false, 
            answered: false
        },

        {   question: "pergunta3" ,
            answer: "resposta3",
            tapped: false, 
            answered: false
        },
        {   question: "pergunta4" ,
            answer: "resposta4",
            tapped: false, 
            answered: false
        }
    ];
    const [cards, setCards] = React.useState (cardsArray);

    return (
        <div className="container-questions">
            <ul>
                {cards.map(card => <li className="questions" onClick={() => openQuestion()}>{card.question} <ion-icon name="play-outline"></ion-icon></li>)}
            </ul>
        </div>
    );

}