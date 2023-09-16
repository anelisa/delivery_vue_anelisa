<template>
    <div class="flex flex-col p-2">
        <div class="flex items-center p-4 border border-slate-400 w-full" v-for="produto in produtos">
            <div class="text-lg font-bold">
                {{ produto.nome }}
            </div>
            <div class="flex flex-grow justify-end px-4 font-bold">
                <h5>{{ MoneyFormat.format(produto.preco) }}</h5>
            </div>
            <div class="flex gap-2">
                <button @click="adicionarItem(produto)" class="w-10 h-10 text-2xl font-bold text-white bg-blue-400 hover:bg-blue-500 shadow rounded-md">+</button>
                <button @click="removerItem(produto)" class="w-10 h-10 text-2xl font-bold text-white bg-blue-400 hover:bg-blue-500 shadow rounded-md">-</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import {ref} from 'vue'
    import {Produto} from "../../../models/Produto"

    import ProdutoService from "../../../services/ProdutoServices";

    import { usePedidoStore } from '@/stores/PedidoStore';

    import { MoneyFormat } from '@/utils/MoneyFormat';

    let produtos = ref<Produto []> ([
        new Produto(1, "Coca cola", 10)
    ])

    produtos.value = await ProdutoService.getProdutos();

    const store = usePedidoStore();

    const adicionarItem = (produto: Produto) => {

        console.log(" adicionando item" + produto.id);
        store.adicionarItem(produto);
        
    }

    const removerItem = ( produto: Produto) => {
        console.log("removendo item" + produto.id);

        store.removeItem(produto);
    }
    
</script>
