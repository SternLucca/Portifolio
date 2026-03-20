import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IProjeto from "./interfaces/IProjeto";

function Projeto(props: IProjeto) {
    return (
        <Card className="w-64 h-65 mb-4 p-0 bg-[#a4afc7]">
            <CardContent className="w-full m-0 h-40 bg-[#a4afc7] flex justify-center items-center">
                <img className="mt-2 h-38 m-0 p-0" src={props.urlImg} alt={`Ícone ${props.nome}`} />
            </CardContent>
            <CardFooter className="h-25 m-0 block text-center bg-[#8794ad]">
                <p className="text-[1.4rem] font-bold">{props.nome}</p>
                <p className="text-[1.2rem]">
                    <a  href={props.urlRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline">Repo</a>

                    { props.urlSite && (
                        <>
                            <span> • </span>
                            <a  href={props.urlSite} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="underline">Site</a>
                        </>
                    )}
                </p>
            </CardFooter>
        </Card>
    )
}

export default Projeto;