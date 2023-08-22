const express = require("express");
const router = express.Router();

const { listarProdutos, listarProduto, calcularFrete } = require("./controladores/fretecontroladores")


// listar produtos 
router.get("/produtos", listarProdutos);
// listar produto pelo id 
router.get("/produtos/:id", listarProduto);

router.get("/produtos/:idProduto/frete/:cep", calcularFrete);



module.exports = router;