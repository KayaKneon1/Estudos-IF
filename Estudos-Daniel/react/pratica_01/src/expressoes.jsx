function formatarNome(usuario){
  return usuario.nome + ' ' + usuario.sobrenome;
}

const usuario = {
  nome: 'Anderson',
  sobrenome: 'Kayque',
};

const elemento = (
  <h1 style={{color: 'green'}}>
    Olá, {formatarNome(usuario)}!
  </h1>
);

export default function Expressoes() {
  return elemento
}
