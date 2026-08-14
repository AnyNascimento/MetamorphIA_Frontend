import Metamorphialogo from '../icon.png'
import { Text_Me_One} from "next/font/google";
const TextMeOne = Text_Me_One({
  variable: "--font-text-me-one",
  weight: "400",
  subsets: ["latin"],
});
export default function auth({ children }: {children: React.ReactNode}) {
  return (
    <div className= 'font-(family-name:--font-text-me-one) min-h-screen flex flex-col'>
    <div className='mt-8 mx-auto w-full'>
    <header className='flex bg-[#433F3F] text-2xl justify-center
        items-center  w-full max-w-[90vw] min-h-15 h-[7vh] mx-auto justify-self-center rounded-[70px]
        text-[#FFFDFA] text-[2rem] gap-2'>
        <img src={Metamorphialogo.src} className='w-[2.75rem]'/>
        <p className=''>MetamorphIA</p>
    </header>
    </div>
    <main className="flex-1 flex items-center justify-center">
        {children}
    </main>
    </div>
  )

}

