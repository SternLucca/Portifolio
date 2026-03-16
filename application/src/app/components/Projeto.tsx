import IProjeto from "./interfaces/IProjeto";

function Projeto(props: IProjeto) {
    return (
        <div className="projeto">
            <div className="projetoLogo">
                <img src={props.urlImg} alt={`Ícone ${props.nome}`} />
            </div>
            <h3>{props.nome}</h3>
            <div className="links">
                <p>
                    <a  href={props.urlRepo}
                        target="_blank"
                        rel="noopener noreferrer">Repo</a>

                    { props.urlSite && (
                        <>
                            <span> • </span>
                            <a  href={props.urlSite} 
                                target="_blank" 
                                rel="noopener noreferrer">Site</a>
                        </>
                    )}
                </p>
            </div>
        </div>
    )
}

export default Projeto;