import { useState } from 'react';

export default function APIKeyInput() {
    //aqui será carregado a informação da chave, ou caso ainda não tenha sido colocada, ela receberá vazio
    const[key, setKey] = useState(localStorage.getItem("openai_api_key" ) || "");

    const salvar = () => {
        //aqui o objetivo é criar o openai e passar essa key para openai para que seja salva ao recarregar
        localStorage.setItem("openai_api_key", key);
        alert("Chave salva!");
        setKey("");
    }

    const verificarTecla = (e) => {
        if (e.key === 'Enter') {
            salvar();
        }
    }

    return(
        <div className='text-black'>
            <input
                type="password"
                placeholder="Preencha esse campo com sua OpenAI Key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                onKeyDown={(e) => verificarTecla(e)}
            />
        </div>
    );
}