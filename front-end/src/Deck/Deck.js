import React from "react";
import "./style.css"
import FlashCard from "../FlashCard/FlashCard";


export default function Deck ({ contador, 
                                setContador,
                                iconBottom, 
                                setIconBottom,
                                resultAll,
                                setResullAll,
                                wrongAnswer,
                                setWrongAnswer
                            }) {
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
        },
        {
            title: "Pergunta 5",
            question:"O ReactDOM nos ajuda __ ",
            answer:"interagindo com a DOM para colocar componentes React na mesma",
            tapped: false,
            answered: false
        },
        {
            title: "Pergunta 6",
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências",
            tapped: false,
            answered: false
        },
        {
            title: "Pergunta 7",
            question: "Usamos props para __ ",
            answer: "passar diferentes informações para componentes ",
            tapped: false,
            answered: false
        },
        {
            title: "Pergunta 8",
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            tapped: false,
            answered: false
        }
    ];

    const [cards, setCards] = React.useState ([...cardsArray]);
    
    
   

    return (
            <ul className="container-questions">
                {
                    cards.map((card, index) => <li key={index} >
                                                <FlashCard  card={card} contador={contador} setContador={setContador}
                                                    iconBottom={iconBottom} setIconBottom={setIconBottom} resultAll={resultAll} 
                                                    setResullAll={setResullAll} wrongAnswer={wrongAnswer} setWrongAnswer={setWrongAnswer} 
                                                />
                                            </li>)
                    
                }
            </ul>
    );
}