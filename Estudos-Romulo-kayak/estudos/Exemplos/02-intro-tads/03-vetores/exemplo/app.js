const itens = ["Clara", "Alvaro"]
itens.sobreNome = "Araujo"
itens.ultimo_nome = "Medeiros"

for (let i = 0; i < itens.length; i++) {
    console.log(i)
}

for (const atributo in itens) {
    console.log(atributo);
}

for (const element of itens) {
    console.log(element);
}