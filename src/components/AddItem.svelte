<script>
import { setContext } from 'svelte'
import { assetsArray } from '../stores.js'
let url = "";
let artist = "";
function addItem(){
    let newObj = {
        id :  $assetsArray.length + 1,
        url : url,
        artist : artist
    };
   
  $assetsArray = [...$assetsArray, newObj]
}

</script>

<main class="main">
 <input class="input" type="text" placeholder="Url" bind:value={url}>
 <input class="input" type="text" placeholder="Artist" bind:value={artist}>
 <button class="button is-primary is-fullwidth" on:click={addItem}>Add</button>


</main>

<style>
.input {
    margin-bottom: 5px;
}
</style>