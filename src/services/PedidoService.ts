import api from "@/lib/api";

interface PedidoItem {
    produto: number;
    quantidade: number;
}

const creatPedidos = async (itens: PedidoItem[]) => {
    const response = await api().post("/pedidos", {itens})
    return response.data
}

export default {
    creatPedidos
}