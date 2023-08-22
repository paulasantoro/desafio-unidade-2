const produtos = require("../bancodedados/produtos");
const { getStateFromZipcode } = require("utils-playground")
const fs = require("fs/promises");

const listarProdutos = (req, res) => {
    res.status(200).json(produtos);
}

const listarProduto = (req, res) => {
    const produtoID = Number(req.params.id);
    if (isNaN(produtoID)) {
        return res.status(400).json({ "mensagem": "ID invalido!" })
    }
    const produtoEncontrado = produtos.find(produto => produto.id === produtoID)

    if (!produtoEncontrado) {
        return res.status(404).json({
            "mensagem": "Produto não encontrado"
        })
    }

    res.status(200).json(produtoEncontrado);
}
const calcularFrete = async (req, res) => {
    const produtoID = Number(req.params.idProduto);
    if (isNaN(produtoID)) {
        return res.status(400).json({ "mensagem": "ID invalido!" })
    }

    const produtoEncontrado = produtos.find(produto => produto.id === produtoID)

    if (!produtoEncontrado) {
        return res.status(404).json({
            "mensagem": "Produto não encontrado"
        })
    }

    const cep = req.params.cep;
    let estado;
    try {
        estado = await getStateFromZipcode(cep);
    } catch (error) {
        return res.status(500).json({ "mensagem": "erro ao obter CEP" })
    }

    const valorDoFrete = produtoEncontrado.valor;

    let taxaDeFrete = 0.12;

    if (estado === "BA" || estado === "SE" || estado === "AL" || estado === "PE" || estado === "PB") {
        taxaDeFrete = 0.10;
    }

    if (estado === "SP" || estado === "RJ") {
        taxaDeFrete = 0.15
    }

    const preco = valorDoFrete * taxaDeFrete;

    const saida = {
        produto: {
            id: produtoEncontrado.id,
            nome: produtoEncontrado.nome,
            valor: produtoEncontrado.valor
        },
        estado: estado,
        frete: preco
    };
    return res.status(200).json(saida);

}



module.exports = { listarProdutos, listarProduto, calcularFrete };