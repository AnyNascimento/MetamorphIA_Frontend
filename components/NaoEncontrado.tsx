import PessoaPesquisa from "@/public/person_search.svg";
import CriarTurma from "@/public/group_add.svg";
import Mais from "@/public/plus.svg";
import Conversa from "@/public/chat.svg";
import Conta from "@/public/account_circle.svg";
export default function NaoEncontrado(){
    return(
        <div className="flex flex-col items-center justify-center w-full h-screen  gap-40px">
            <div className="h-[52%] w-[32%] flex flex-col items-center justify-center bg-[#FFFDFA] rounded-[50px] py-8 mb-[50px]">
                <div className="bg-[#D4C7F8] rounded-[70px] flex flex-row justify-center items-center h-[80px] w-[80px] mb-[10px]">
                    <img 
                        src={PessoaPesquisa.src}
                        alt=""
                        className="h-[45%] w-[45%] " 
                    />

                    
                </div>

                <p className="flex flex-row items-center text-[75%] justify-center mb-[10px]">Nenhum aluno encontrado</p>
                <p className="text-center text-[#797979] text-[9px] mx-15">Crie uma turma e adicione seus alunos para iniciar uma conversa com o contexto certo.</p>

                    <button className="h-[24px] w-[150px] bg-[#D4C7F8] flex flex-row items-center justify-center rounded-[70px] mt-[25px] mr-4 text-[13px]">      
                        Criar Turma   

                         <img 
                        src={CriarTurma.src}
                        alt=""
                        className="h-[25px] w-[25px] pointer-events-none select-none" 
                    />
                    </button>
            </div>

           <div className="w-full max-w-[704px] h-[48px] bg-[#FFFDFA] opacity-40 rounded-[70px] flex flex-row items-center justify-start px-4">
                <img 
                    src={Mais.src}
                    alt=""
                    className="h-[24px] w-[61px] pointer-events-none select-none" 
                />
                <img 
                    src={Conversa.src}
                    alt=""
                    className="h-[40px] w-[40px] pointer-events-none select-none" 
                />
            </div> 

            <div className="ml-[90%] fixed bottom-4 right-4 z-50">
                <img 
                    src={Conta.src}
                    alt=""
                    className="h-[70%] w-[70%] pointer-events-none select-none" 
                />
            </div>
        </div>
    )
}