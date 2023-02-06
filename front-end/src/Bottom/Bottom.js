import "./style.css"

export default function Bottom ({ 
    contador,
    setContador, 
    iconBottom,
    setIconBottom,
    wrongAnswer,
    screen,
    setScreen
    }) {


    function resetZap () {
        setContador(0);
        setIconBottom([]);
        setScreen(!screen)
    }

    if (contador === 8) {
        return (
            <div className="bottom"> 
                <div className="result">
                    {wrongAnswer? (
                    <>
                        <div className="title-result">
                            <img src="../img/sad.png"/>
                            <h1>Putz...</h1>
                        </div>
                        <div className="text-result">
                            <p>Ainda faltam alguns...
                                <br/>
                            Mas não desanime!</p>
                        </div>
                    </>
                    ) : (

                    <>
                        <div className="title-result">
                            <img src="../img/party.png"/>
                            <h1>Parabéns!</h1>
                        </div>
                        <div className="text-result">
                            <p>Você não esqueceu de nenhum flashcard!</p>
                        </div>
                    </> 
                
                    )}
                </div>
            

                {contador}/8 CONCLUÍDOS
                <div className="bottom-icons">
                {
                    iconBottom.map((value, index) => <ion-icon name={value} key={index}></ion-icon>) 
                }
                </div>
                <div className="reset-button" onClick={() => resetZap()}>
                    REINICIAR RECALL
                </div>
            </div>
        );
    } else {
        console.log(contador);
        return (
            <div className="bottom"> 
            {contador}/8 CONCLUÍDOS
            <div className="bottom-icons">
            {
                iconBottom.map((value, index) => <ion-icon name={value} key={index}></ion-icon>) 
            }
            </div>
        </div>
        );
    }
}