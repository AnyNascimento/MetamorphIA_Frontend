"use client"

import { useState } from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";
import Button from "./Button";

export default function FormLogin(){
    const [identificador, setIdentificar] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="bg-[#FFFDFA] md:rounded-[70px] p-6 md:p-8 rounded-[40px]
                    shadow-md flex flex-col gap-6
                    w-full max-w-sm md:max-w-md lg:w-[25vw] lg:min-w-[400px] xl:min-w-[450px]
                    min-h-[400px] lg:min-h-[50vh]">

                    <div className='flex flex-col items-center gap-2'>
                        <h1 className='text-[#797979] text-sm'>Já tem uma conta?</h1>
                        <p className='text-[#433F3F] text-3xl'>Entre</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <Input
                            type="text"
                            placeholder="Digite seu telefone ou e-mail"
                        />
                        <Input
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <div className="flex flex-col items-end">
                        <p className="text-[#797979] text-sm"><u><b>Esqueci a senha</b></u></p>
                    </div>

                    <Button type="submit">
                        Cadastrar
                    </Button>

                    <div className="flex flex-col items-center cursor-pointer">
                        <p className="text-[#797979] text-sm">Não tem uma conta? <u><b>Cadastre-se</b></u> </p>
                    </div>
                </div>
        </form>
    )
}