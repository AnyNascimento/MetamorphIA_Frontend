import Apple from "@/public/iconeApple.svg";
import Google from "@/public/iconeGoogle.svg";

export default function LogIn(){
    return(
        <div className="mt-7 ml-3">
            <div className="flex flex-row justify-center items-center gap-10">
                <div className="w-[160px] h-[1px] bg-[#797979]"></div>
                <p className="text-[#797979] text-sm">ou</p>
                <div className="w-[160px] h-[1px] bg-[#797979]"></div>
            </div>
            <div className="flex flex-row justify-center gap-2 mt-2">
                <img src={Google.src} className="cursor-pointer" />
                <img src={Apple.src} className="cursor-pointer" />
            </div>
        </div>
    )
}