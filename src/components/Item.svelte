<script>
    export let url = "";
    export let artist = "";

</script>

<div class="card">
    <div class="card-image">
      <figure class="image">
        <img src={url} alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-7">Painter : {artist}</p>
        </div>
      </div>
    </div>
  </div>