const livroService = {
    listar: () => {
        return livroRepository.listar();
    },
adicionar: (livro) => {
    if (!livro.titulo) {
        alert("O título é obrigatório!");
        return;
        }

    return livroRepository.salvar(livro);  

    },
    excluir: (id) => {
        return livroRepository.excluir(id);
    }
}; 