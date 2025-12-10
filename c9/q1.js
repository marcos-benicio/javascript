// Implementação completa de um App de Rede Social + Sistema de Biblioteca em JavaScript (POO)
class UsuarioRedeSocial {
constructor(nome) {
this.nome = nome;
this.amigos = [];
this.posts = [];
}


adicionarAmigo(usuario) {
if (!this.amigos.includes(usuario)) {
this.amigos.push(usuario);
usuario.amigos.push(this);
}
}


criarPost(texto) {
const post = new Post(this.nome, texto);
this.posts.push(post);
return post;
}


listarPosts() {
return this.posts;
}
}


class RedeSocial {
constructor() {
this.usuarios = [];
}


cadastrarUsuario(nome) {
const usuario = new UsuarioRedeSocial(nome);
this.usuarios.push(usuario);
return usuario;
}


buscarUsuario(nome) {
return this.usuarios.find(u => u.nome === nome) || null;
}


listarUsuarios() {
return this.usuarios;
}
}