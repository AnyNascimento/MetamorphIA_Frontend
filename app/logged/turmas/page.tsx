import Menu from "@/components/Menu";
import Turmas from "@/components/Turmas";

export default function ChatInicial(){
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <Menu></Menu>
            <Turmas></Turmas>
        </div>
    )
}