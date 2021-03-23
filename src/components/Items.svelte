<script>
import Item from './Item.svelte'
import { assetsArray } from '../stores.js'

console.log($assetsArray)
</script>

<main>

<div class="items is-mobile">
    {#each $assetsArray as asset}
    <div class="item">
        <Item
        url = {asset.url}
        artist = {asset.artist}
        />

    </div>
    {/each} 
    
</div>

</main>

<style>
.items {
    display : flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.item {
    max-width: 24rem;
    margin: 1rem;

}

</style>