function Header() {

    const urlPfp: string = 'https://avatars.githubusercontent.com/u/176907115?v=4&size=64'
    const urlGithub: string = 'https://github.com/SternLucca'

    return (
        <header className="App-header">
        <h1 id="nome">Lucca Stern Bianchi</h1>
        <div className="profileArea">
          <a href={urlGithub} target="_blank" rel="noreferrer">github.com/SternLucca</a>
          <img src={urlPfp} alt="Foto de perfil" id="pfp"/>
        </div>
      </header>
    )
}

export default Header;