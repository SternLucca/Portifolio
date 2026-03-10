function Projeto(props: {nome: string, urlImg: string, urlRepo: string, urlSite: string | undefined;}) {
    let links: string = '';
    if (props.urlSite === undefined) {
        links = `<a href="${props.urlRepo}" target="_blank" rel="noopener noreferrer">Repo</a>`;
    } else {
        links = `<a href="${props.urlRepo}" target="_blank" rel="noopener noreferrer">Repo</a> • <a href="${props.urlSite}" target="_blank" rel="noopener noreferrer">Site</a>`;
    }
    
    return (
        <div className="projeto">
            <div className="projetoLogo">
                <img src={props.urlImg} alt={`Ícone ${props.nome}`} />
            </div>
            <h3>{props.nome}</h3>
            <div className="links">
                <p dangerouslySetInnerHTML={{ __html: links }} />
            </div>
        </div>
    )
}

export default Projeto;