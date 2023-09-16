<template>
    <div class="flex p-4">
        <div class="text-2xl front-bold">
            Total:
        </div>
        <div class="flex flex-grow justify-end text-2xl font-bold">
            R$ {{ store.pedido.total }}
        </div>
    </div>
    <hr class="mx-3 border-gray-500">
    <div v-for="item in store.pedido.itens" class="flex p-4">
        <div class="w-1/12 text-medium">
            {{ item.quantidade }}
        </div>
        <div class="text-medium">
            {{ item.produto.nome }}
        </div>
        <div class="flex flex-grow justify-end text-medium font-bold">
            {{ MoneyFormat.format(item.produto.preco * item.quantidade)  }}
        </div>     
    </div>
    <div class="flex flex-grow justify-end p-4">
        <button @click="salvarPedido()" class="w-24 h-10 tex-md font-bold text-white bg-blue-400 hover:bg-blue-500 shadow rounded-md">
            Salvar
        </button>
    </div>
</template>

<script setup lang="ts">
    import PedidoService from "@/services/PedidoService";
    import { usePedidoStore } from "../../../stores/PedidoStore"

    import { MoneyFormat } from "@/utils/MoneyFormat";

    const store = usePedidoStore();

    const salvarPedido = () => {
       
       const itens = [
        ...store.pedido.itens
       ]
       PedidoService.creatPedidos(itens.map(item => {
        return {
            produto: item.produto.id,
            quantidade: item.quantidade
        }
       }))

    }
</script>