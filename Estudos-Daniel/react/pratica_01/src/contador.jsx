import { useState } from "react";

export default function Contador() {
    const [count,setCount] = useState(0)

    return (
        <button onClick={() => {setCount(count + 1)}}>
            Você clicou {count} vezes
        </button>
    )
}
