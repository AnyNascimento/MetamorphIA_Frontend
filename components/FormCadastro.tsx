"use client"

import { useState } from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";
import Button from "./Button";
import Link from "next/link";

export default function FormCadastro(){
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col self-center">
            <div className="bg-[#FFFDFA] md:rounded-[70px] p-6 md:p-8 rounded-[40px]
                shadow-md flex flex-col gap-6
                w-full max-w-sm md:max-w-md lg:w-[25vw] lg:min-w-[400px] xl:min-w-[450px]
                min-h-[400px] lg:min-h-[25rem]">

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-[#797979] text-sm'>Não tem uma conta?</h1>
                    <p className='text-[#433F3F] text-3xl'>Cadastre-se</p>
                </div>

                <div className="flex flex-col items-center gap-3 w-full">
                    <Input
                        type="text"
                        placeholder="Digite seu telefone"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div className="flex flex-col items-center">
                    <CheckBox />
                </div>

                <Button type="button">
                    Cadastrar
                </Button>

                <div className="flex flex-row items-center text-[#797979] text-sm justify-center gap-1">
                    <p>Já tem uma conta?</p>
                    <Link href={"./login"}>
                        <p className="cursor-pointer"><u><b>Entre</b></u> </p>
                    </Link>
                </div>
            </div>
    </form>
    )
}