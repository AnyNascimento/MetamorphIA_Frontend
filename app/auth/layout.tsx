import Logo from "@/public/icon.png";
import { Poppins, Text_Me_One } from "next/font/google";
const TextMeOne = Text_Me_One({
    variable: "--font-text-me-one",
    weight: "400",
    subsets: ["latin"],
});
const poppins = Poppins({
    variable: "--font-poppins",
    weight: "400",
    subsets: ["latin"],
});

export default function Auth({
    children,
}:{
    children: React.ReactNode;
}){
    return(
        <div className={`relative min-h-screen overflow-hidden bg-[#F0F0F0]`}>
            
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
                <img 
                src="/Elipse1.svg"
                alt=""
                className="absolut top-0 pointer-events-none select-none" 
            />
            <img 
                src="/Elipse2.svg"
                alt=""
                className="absolute bottom-0 right-0 pointer-events-none select-none" 
            />

            <img 
                src="/VetorFita07.svg" 
                alt="" 
                className="absolute top-1/3 w-full pointer-events-none select-none"
            />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <div className="p-8 w-full mx-auto">
                    <header className="flex bg-[#433F3F] text-2xl justify-center
                        items-center w-full max-w-[90vw] mx-auto
                        rounded-[70px] text-[#FFFDFA] gap-2
                        md:h-14 lg:max-h-20 sm:min-h-6 sm:h-12 md:text-[2rem] sm:text-[1rem] sm:min-text-[0.5rem]">
                        <img src={Logo.src} className="w-[2.75rem]" />
                        <p className={` ${TextMeOne.variable} font-(family-name:--font-text-me-one)`}>MetamorphIA</p>
                    </header>
                </div>
                <main className={`flex flex-1 ${poppins.variable} font-(family-name:--font-poppins) items-center justify-center flex-col`}>
                        {children}
                </main>
            </div>
        </div>
    )
}