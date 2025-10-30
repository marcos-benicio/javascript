let carros = [{ nome: 'civic', ano: '2018' }, { nome: 'onix', ano: '2025' }, { nome: 'sanatana', ano: '2003' }];
let carrosFabricados2010 = carros.filter((carro) => {
    if (carro.ano > 2010) {
        console.log(carro.nome);
    }
})