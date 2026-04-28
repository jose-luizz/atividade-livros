let livros = [];

const livroRepository = {
    listar: () => livros,

    salvar: (livro) => {
        livros.push(livro);
        return livro;
    }
};