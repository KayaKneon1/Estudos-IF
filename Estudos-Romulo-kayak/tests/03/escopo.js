function exemploVar() {
  var x = 5;
  if (true) {
    var x = 10;
    console.log(x); // Saída: 10
  }
  console.log(x); // Saída: 10, a variável x é reatribuída no escopo da função
}
exemploVar();

function exemploLet() {
  let y = 5;
  if (true) {
    let y = 10;
    console.log(y); // Saída: 10
  }
  console.log(y); // Saída: 5, a variável y é limitada ao escopo do bloco if
}
exemploLet();