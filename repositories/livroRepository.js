let livros = [];
let id = 0;

const livroRepository = {
    listar: () => livros,

    salvar: (livro) => {
        livro.id = id++;
        livros.push(livro);
        return livro;
    },

    excluir: (idLivro) => {
        livros = livros.filter(l => l.id !== idLivro);
    }
};