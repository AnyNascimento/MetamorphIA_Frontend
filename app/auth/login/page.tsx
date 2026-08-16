import LogIn from "@/components/LogIn";
import FormLogin from "@/components/FormLogin";

export default function Login(){
    return(
        <>
            <div className="relative flex justify-center mt-6 overflow-hidden">
                <img className='z-10 pointer-events-none select-none w-10 md:w-auto -mr-4
                    md:-mr-6'
                    src="/encaracoladoLogin.svg"
                    alt="" 
                />
                <FormLogin />
            </div>
            <LogIn />
        </>
    )
}