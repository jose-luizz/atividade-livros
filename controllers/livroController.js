const livroController = {
    listarLivros: () => {
        const livros = livroService.listar();
        const lista = document.getElementById("listaLivros");

        lista.innerHTML = "";

        livros.forEach(livro => {
            const item = document.createElement("li");
            item.textContent = `${livro.titulo} - ${livro.autor}`;
            
            const botao = document.createElement("button");
            botao.textContent = "Excluir";
            botao.onclick = () => livroController.excluirLivro(livro.id);

            item.appendChild(botao);
            lista.appendChild(item);
        })
    },

    adicionarLivros: () => {
    const titulo = prompt("Título:");
    const autor = prompt("Autor:");

    livroService.adicionar({titulo, autor});
    
  },
  excluirLivro: (id) => {
    livroService.excluir(id);
    livroController.listarLivros();
  }
  
}
