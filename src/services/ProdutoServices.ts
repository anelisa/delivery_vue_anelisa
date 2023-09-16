import api from "@/lib/api";

import type { Produto } from "@/models/Produto";

interface CreateProduto {
    descricao: string
    nome: string
    preco: number
}

const getProdutos = async () : Promise<Produto[]> => {

    const response = await api().get("/produtos");

    return response.data;

}

const createProduto = async (produto: CreateProduto) => {
    await api().post("/produtos", produto)
}

export default {
    getProdutos, createProduto
}