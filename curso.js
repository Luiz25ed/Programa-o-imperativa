const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    nomeCurso: 'Programação',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [
        estudantes.aluno1,
        estudantes.aluno2,
        estudantes.aluno3,
        estudantes.aluno4,
    ],
    adicionarAluno: function (nome, faltas, notas) {
        this.listaEstudantes.push(new aluno.construtor(nome, faltas, notas));
    },
    aprovacao: function (estudantes) {
        const media = aluno.calcularMedia(estudantes);

        if (
            media >= this.notaAprovacao &&
            estudantes.quantidadeFaltas < this.faltasMaximas
        ) {
            return `O estudante ${estudantes.estudantes} foi aprovado`;
        } else if (
            estudantes.quantidadeFaltas === this.faltasMaximas &&
            media > this.notaAprovacao * 1.1
        ) {
            return `O estudante ${estudantes.estudantes} foi aprovado com ressalvas`;
        } else {
            return `O estudante ${estudantes.estudantes} foi reprovado`;
        }
    },
    listaAprovados: function () {
        let todos = [estudantes.nome];

        this.listaEstudantes.forEach(estudantes => {
            todos.push(this.aprovacao(estudantes));
        });

        return todos;
    }
}

curso.adicionarAluno('', 0, [7, 5, 7]);

const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});


//console.log(listaAprovados);

//console.log([listaEstudantes]);