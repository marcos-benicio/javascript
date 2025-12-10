// SISTEMA DE BIBLIOTECA

class Biblioteca {
constructor() {
this.livros = [];
this.usuarios = [];
this.emprestimos = [];
}


adicionarLivro(titulo, autor, ano) {
const livro = new Livro(titulo, autor, ano);
this.livros.push(livro);
return livro;
}


cadastrarUsuario(nome) {
const usuario = new Usuario(nome);
this.usuarios.push(usuario);
return usuario;
}


buscarLivro(titulo) {
return this.livros.find(l => l.titulo === titulo) || null;
}


buscarUsuario(nome) {
return this.usuarios.find(u => u.nome === nome) || null;
}


emprestarLivro(titulo, nomeUsuario) {
const livro = this.buscarLivro(titulo);
const usuario = this.buscarUsuario(nomeUsuario);


if (!livro) return "Livro não encontrado";
if (!usuario) return "Usuário não encontrado";
if (!livro.disponivel) return "Livro indisponível";


const emprestimo = new Emprestimo(livro, usuario);
livro.disponivel = false;
usuario.emprestimos.push(emprestimo);
this.emprestimos.push(emprestimo);


return emprestimo;
}


devolverLivro(titulo, nomeUsuario) {
const usuario = this.buscarUsuario(nomeUsuario);
if (!usuario) return "Usuário não encontrado";


const emprestimo = usuario.emprestimos.find(e => e.livro.titulo === titulo && !e.dataDevolucao);
if (!emprestimo) return "Empréstimo não encontrado";


emprestimo.devolver();
return "Livro devolvido com sucesso";
}


listarLivros() {
return this.livros;
}


listarEmprestimosAtivos() {
return this.emprestimos.filter(e => e.dataDevolucao === null);
}
}