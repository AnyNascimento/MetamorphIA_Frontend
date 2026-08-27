import PessoaPesquisa from "@/public/person_search.svg";
import CriarTurma from "@/public/group_add.svg";
import Mais from "@/public/plus.svg";
import Conta from "@/public/account_circle.svg";
import Expandir from "@/public/expand_more.svg";
export default function NaoEncontrado(){
    return(
        <div className="flex flex-col items-center justify-center w-full justify-start h-screen  mt-0">
            <div className="flex flex-row justify-between items-center px-16 pt-8 w-full">
                <h1 className="text-xl">
                Turmas
                </h1>
                <div className="flex flex-row gap-4">
                    <p>
                        Ordernar por
                    </p>    

                    <div className="bg-[#d6d6d6] rounded-[50px] h-[100%] flex flex-row items-center">
                        Atividade

                        <img 
                                src={Expandir.src}
                                alt=""
                                className="h-[20px] w-[20px]" 
                            />
                    </div>

                    
                        <div className="bg-[#D4C7F8] rounded-[70px] flex flex-row justify-center items-center h-[40px] w-[40px] mb-[10px]">
                            <img 
                                src={PessoaPesquisa.src}
                                alt=""
                                className="h-[20px] w-[20px]" 
                            />
                        </div>
                </div>
            </div>


            <div className="h-[22px] items-center  w-[90%] bg-[#FFFDFA] rounded-[30px] mb-16 flex "> 
               <p className="opacity-[50%] text-[10px] ">Procurar turmas...</p> 
            </div>

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