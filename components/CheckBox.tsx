"use client"
import { useState } from "react";

export default function CheckBox(){
    const [aceitaTermos, setAceitaTermos] = useState(false);

    return(
        <>
            <label className="flex items-center gap-1 cursor-pointer">
                <input 
                    type="checkbox"
                    onChange={(e) => setAceitaTermos(e.target.checked)}
                    checked={aceitaTermos}
                    className="w-5 h-5"
                />
                <span className="text-[#797979] text-xs">
                    Declaro que li os <u><b>Termos de Serviço</b></u> e <u><b>Privacidade</b></u>
                </span>
            </label>
        </>
    )
}