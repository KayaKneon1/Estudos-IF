const alunos = [
    {id: 1, nome: 'Ana'},
    {id: 2, nome: 'João'},
    {id: 3, nome: 'Bruno'}
]

export default function ListaAlunos(){
    return (
        <ul>
            {alunos.map((aluno) => (
                <li key={aluno.id}>{aluno.nome}</li>
            ))}
        </ul>
    )
}