import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Header() {

    const urlPfp: string = 'https://avatars.githubusercontent.com/u/176907115?v=4&size=64'
    const urlGithub: string = 'https://github.com/SternLucca'

    return (
        <header className="bg-[#282c34] w-full h-[10vh] text-white flex items-center justify-between">
            <h1 className="ml-[2vw] font-bold text-2xl text-center">Lucca Stern Bianchi</h1>
            <div className="flex gap-[1vw] items-center justify-center mr-[2vw]">
                <a href={urlGithub} target="_blank" rel="noreferrer" className="text-[1rem]">github.com/SternLucca</a>
                <Avatar className="circle w-[8vmin] h-[8vmin]">
                    <AvatarImage src={urlPfp} alt="Foto de perfil"/>
                    <AvatarFallback>Foto de perfil</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}

export default Header;