import Projeto from './Projeto';
import ContactForm from "./ContactForm";

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
                    urlImg="https://raw.githubusercontent.com/SternLucca/Oscars/refs/heads/main/oscar-icon.png" 
                    urlRepo="https://github.com/SternLucca/Oscars/" 
                    urlSite={undefined} />

                <Projeto 
                    nome="Pedra Papel Tesoura" 
                    urlImg="https://raw.githubusercontent.com/SternLucca/RockPaperScissors/refs/heads/main/rock.png" 
                    urlRepo="https://github.com/SternLucca/RockPaperScissors" 
                    urlSite="https://sternlucca.github.io/RockPaperScissors/" />

                <Projeto 
                    nome="Mario" 
                    urlImg="https://raw.githubusercontent.com/SternLucca/Mario/refs/heads/main/Imagens/mario-icon.ico" 
                    urlRepo="https://github.com/SternLucca/Mario" 
                    urlSite="https://sternlucca.github.io/Mario/HTML/index.html" />

                <Projeto 
                    nome="Extensão" 
                    urlImg="https://raw.githubusercontent.com/SternLucca/Extension/refs/heads/main/icon.png" 
                    urlRepo="https://github.com/SternLucca/Extension/" 
                    urlSite={undefined} />

                <Projeto 
                    nome="Pixel-Art" 
                    urlImg="https://raw.githubusercontent.com/SternLucca/Pixel-Art/refs/heads/main/pincel.ico" 
                    urlRepo="https://github.com/SternLucca/Pixel-Art" 
                    urlSite="https://sternlucca.github.io/Pixel-Art/" />
                
                <Projeto 
                    nome="Sombreropedia" 
                    urlImg="https://raw.githubusercontent.com/SternLucca/Sombreropedia/refs/heads/main/Imagens/icon.png" 
                    urlRepo="https://github.com/SternLucca/Sombreropedia" 
                    urlSite="https://sternlucca.github.io/Sombreropedia/" />

                <Projeto 
                    nome="Banana" 
                    urlImg="https://raw.githubusercontent.com/SternLucca/Banana/refs/heads/main/banana.png" 
                    urlRepo="https://github.com/SternLucca/Banana/" 
                    urlSite="https://sternlucca.github.io/Banana/" />

                <ContactForm />

            </div>
        </section>
    )
}

export default Body;