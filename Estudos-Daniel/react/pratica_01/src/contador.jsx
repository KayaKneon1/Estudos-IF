import { useState } from "react";

function Contador() {
    const [count,setCount] = useState(0)

    return (
        <button onClick={() => {setCount(count + 1)}}>
            Você clicou {count} vezes
        </button>
    )
}

export default Contador