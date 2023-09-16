<template>
    <h1 class="text-base font-bold m-2">Cadastra de produtos</h1>
    <div>
        <form @submit="createProduto">
            <div> 
                <label for="nome">Nome: </label>
                <input class="border-2 border-blue-500" type="text" name="nome" v-model="form.nome" />
            </div>
      
            <div> 
                <label for="nome">Descrição: </label>
                <input class="border-2 border-blue-500" type="text" name="descricao" v-model="form.descricao" />
            </div>
            <div> 
                <label for="nome">Preço: </label>
                <input class="border-2 border-blue-500" type="text" name="preco" v-model="form.preco" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
   import ProdutoServices from '@/services/ProdutoServices';
    import {ref} from 'vue'

   let form = ref({
    descricao: "",
    nome: "",
    preco: "",
   })


   const createProduto = () => {
        
        const produto = {
            descricao: form.value.descricao,
            nome: form.value.nome,
            preco: parseInt(form.value.preco)
        }

        ProdutoServices.createProduto(produto)
   }

</script>