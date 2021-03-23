<script>
import Navbar from './components/Navbar.svelte'
import Items from './components/Items.svelte'
import AddItem from './components/AddItem.svelte'


</script>

<main>
<Navbar/>
<div class="container mgt-small" style="margin-top:10px; max-width:400px;">
  <AddItem/>
</div>

<Items/>

</main>

<style>
@import 'bulma/css/bulma.css';
</style>
