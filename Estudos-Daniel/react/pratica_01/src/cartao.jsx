function Cartao({ titulo, preco }){
    return(
        <div>
            <h3>{titulo}</h3>
            <p>R$ {preco}</p>
        </div>
    );
}

export default Cartao