import { useState } from "react";

export default function Formulario(){
    const [nome, setNome] = useState('')

    function enviar(e){
        e.preventDefault()
        alert(`Ola, ${nome}`)
    }

    return (
        <form onSubmit={enviar}>
            <input value={nome} onChange={(e) => setNome(e.target.value)}></input>
            <button>Enviar</button>
        </form>
    )
}
