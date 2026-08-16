import LogIn from "@/components/LogIn";
import FormCadastro from "@/components/FormCadastro";

export default function Cadastro(){
    
    return(
        <>
            <div className="relative flex justify-center items-center overflow-hidden">
                <img className='z-10 pointer-events-none select-none w-10 md:w-auto -mr-4
                    md:-mr-6'
                    src="/encaracoladoCadastro.svg"
                    alt="" 
                />
                <FormCadastro />
            </div>
            <LogIn />
        </>
    )
}