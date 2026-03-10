import Projeto from './Projeto';

function Body() {
    return (
        <section className="body">
            <h2>Meus Projetos:</h2>
            <div className="projetos">
                
                <Projeto 
                    nome="Cobrinha" 
                    urlImg="https://sternlucca.github.io/Cobrinha/snake.ico" 
                    urlRepo="https://github.com/sternlucca/Cobrinha" 
                    urlSite="https://sternlucca.github.io/Cobrinha/" />
                
                <Projeto 
                    nome="Pitico Pet" 
                    urlImg="https://sternlucca.github.io/Pitico-Pet/img/Pitico-logo.png" 
                    urlRepo="https://github.com/sternlucca/Pitico-Pet" 
                    urlSite="https://sternlucca.github.io/Pitico-Pet/" />

                <Projeto 
                    nome="Tic Tac Toe" 
                    urlImg="https://sternlucca.github.io/TicTacToe/hashtag.png" 
                    urlRepo="https://github.com/SternLucca/TicTacToe" 
                    urlSite="https://sternlucca.github.io/TicTacToe/" />

                <Projeto 
                    nome="Oscars" 
                    urlImg="https://github.com/SternLucca/Oscars/blob/main/oscar-icon.png?raw=true" 
                    urlRepo="https://github.com/SternLucca/Oscars/" 
                    urlSite={undefined} />
                
            </div>
        </section>
    )
}

export default Body;