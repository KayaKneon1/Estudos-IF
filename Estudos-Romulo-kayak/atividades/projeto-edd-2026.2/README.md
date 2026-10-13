Respostas em escrita:

1. O draw() usa dois loops com objetivos distintos: o for clássico percorre todas as posições da capacidade e desenha as células vazias (a estrutura fixa do array); o forEach percorre apenas os items já inseridos e desenha os quadrados com seus valores (o conteúdo dinâmico). Um desenha a moldura, o outro desenha os dados.

3. Não, porque o array é preenchido na ordem digitada, sem garantir ordenação — e a busca binária exige array ordenado para funcionar corretamente. Quanto às comparações no pior caso: busca sequencial faz 10 comparações com 10 elementos e 1.000 com 1.000 elementos; busca binária faz 4 comparações com 10 elementos e 10 comparações com 1.000 elementos.