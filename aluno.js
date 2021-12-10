const aluno = {
    nome: '',
    quantidadeFaltas: 0,
    notas: [],
    
    construtor: function (nome, faltas, notas) {
        this.nome = nome;
        this.quantidadefaltas = faltas;
        this.notas = notas;

    
},

calcularMedia: function (aluno) {
    let total = 0;

    aluno.notas.forEach(notas => {
        total += notas;
    });

    return total / aluno.notas.length;

    
},
aumentarFaltas: function (aluno) {
    aluno.quantidadeFaltas++;





    const aluno1 = new aluno.construtor('aluno1', 25, [7, 7, 7]);
    aluno.calcularMedia(aluno1);
    const aluno2 = new aluno.construtor('aluno2', 26, [0, 5, 7]);
    aluno.calcularMedia(aluno2);
    const aluno3 = new aluno.construtor('aluno3', 27, [0, 5, 7]);
    aluno.calcularMedia(aluno3);
    const aluno4 = new aluno.construtor('aluno4', 28, [0, 5, 7]);
    aluno.calcularMedia(aluno4);





   





module.exports = {
    aluno1,
    aluno2,
    aluno3,
    aluno4,
}

