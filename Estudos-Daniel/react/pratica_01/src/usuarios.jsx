import { useEffect, useState } from "react";

export default function Usuarios(){
    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((dados) => setUsuarios(dados))
    }, [])

    return(
        <ul>
            {usuarios.map((u)=> <li key={u.id}>{u.nome}</li>)}
        </ul>
    )
}