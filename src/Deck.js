import React from "react";
import "./css/styles.css"
import FlashCard from "./FlashCard";


export default function Deck () {
    let cardsArray = [
        {   title: "Pergunta 1",
            question: "O que é JSX?" ,
            answer: "Uma extensão de linguagem do JavaScript",
            tapped: false, 
            answered: false
        },

        {   title: "Pergunta 2",
            question: "O React é __" ,
            answer: "uma biblioteca JavaScript para construção de interfaces",
            tapped: false, 
            answered: false
        },

        {   title: "Pergunta 3",
            question: "Componentes devem iniciar com __" ,
            answer: "letra maiúscula",
            tapped: false, 
            answered: false
        },
        {   title: "Pergunta 4",
            question: "Podemos colocar __ dentro do JSX" ,
            answer: "expressões",
            tapped: false, 
            answered: false
        }
    ];

    const [cards, setCards] = React.useState ([...cardsArray]);
    
    
   

    return (
            <ul className="container-questions">
                {
                    cards.map((card, index) => <li key={index} >
                                                <FlashCard  card={card} 
                                                />
                                            </li>)
                    
                }
            </ul>
    );
}