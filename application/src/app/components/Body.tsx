import Projeto from './Projeto';
import ContactForm from "./ContactForm";
import IProjeto from './interfaces/IProjeto';

function Body() {
    const projetos: IProjeto[] = [
        {
            nome: "Cobrinha",
            urlImg:"https://sternlucca.github.io/Cobrinha/snake.ico",
            urlRepo: "https://github.com/sternlucca/Cobrinha",
            urlSite: "https://sternlucca.github.io/Cobrinha/"
        },
        {
            nome: "Pitico Pet",
            urlImg: "https://sternlucca.github.io/Pitico-Pet/img/Pitico-logo.png",
            urlRepo: "https://github.com/sternlucca/Pitico-Pet",
            urlSite: "https://sternlucca.github.io/Pitico-Pet/"
        },
        {
            nome: "Tic Tac Toe",
            urlImg: "https://sternlucca.github.io/TicTacToe/hashtag.png",
            urlRepo: "https://github.com/SternLucca/TicTacToe",
            urlSite: "https://sternlucca.github.io/TicTacToe/"
        }, 
        {
            nome: "Oscars",
            urlImg: "https://raw.githubusercontent.com/SternLucca/Oscars/refs/heads/main/oscar-icon.png",
            urlRepo: "https://github.com/SternLucca/Oscars/",
            urlSite: undefined
        }, 
        {
            nome: "Pedra Papel Tesoura",
            urlImg: "https://raw.githubusercontent.com/SternLucca/RockPaperScissors/refs/heads/main/rock.png",
            urlRepo: "https://github.com/SternLucca/RockPaperScissors",
            urlSite: "https://sternlucca.github.io/RockPaperScissors/"
        }, 
        {
            nome: "Mario",
            urlImg: "https://raw.githubusercontent.com/SternLucca/Mario/refs/heads/main/Imagens/mario-icon.ico", 
            urlRepo: "https://github.com/SternLucca/Mario", 
            urlSite: "https://sternlucca.github.io/Mario/HTML/index.html"
        },
        {
            nome: "Extensão",
            urlImg: "https://raw.githubusercontent.com/SternLucca/Extension/refs/heads/main/icon.png",
            urlRepo: "https://github.com/SternLucca/Extension/",
            urlSite: undefined
        },
        {
            nome: "Pixel-Art", 
            urlImg: "https://raw.githubusercontent.com/SternLucca/Pixel-Art/refs/heads/main/pincel.ico",
            urlRepo: "https://github.com/SternLucca/Pixel-Art", 
            urlSite: "https://sternlucca.github.io/Pixel-Art/"   
        }, 
        {
            nome: "Sombreropedia", 
            urlImg: "https://raw.githubusercontent.com/SternLucca/Sombreropedia/refs/heads/main/Imagens/icon.png",
            urlRepo: "https://github.com/SternLucca/Sombreropedia",
            urlSite: "https://sternlucca.github.io/Sombreropedia/"
        },
        {
            nome: "Banana",
            urlImg: "https://raw.githubusercontent.com/SternLucca/Banana/refs/heads/main/banana.png",
            urlRepo: "https://github.com/SternLucca/Banana/",
            urlSite: "https://sternlucca.github.io/Banana/"
        }
    ]

    return (
        <section className="flex flex-col w-full h-full bg-[#444850] min-h-[90vh]">
            <h2 className='text-white p-[2vw] m-0 text-3xl'>Meus Projetos:</h2>
            <div className="flex flex-wrap justify-evenly w-full">
                
                {projetos.map((projeto: IProjeto) =>(
                    <Projeto
                        key={projeto.nome}
                        nome={projeto.nome} 
                        urlImg={projeto.urlImg}
                        urlRepo={projeto.urlRepo}
                        urlSite={projeto.urlSite}/>
                ))}

            </div>
            
            <ContactForm />

        </section>
    )
}

export default Body;