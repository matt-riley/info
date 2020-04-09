<script lang="typescript">
  export let title;
  export let img = "https://images.unsplash.com/photo-1510577956525-69bd3c29339e";
</script>

<style>
  .card {
    border-radius: 0.8em;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 100%;
    position: relative;
    background-position: center;
  }

  .card::after {
    position: absolute;
    display: block;
    content: "";
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    background: inherit;
    z-index: -1;
    top: -5px;
    left: -5px;
    filter: blur(10px);
  }
  .card-header {
    max-height: 10vh;
    background-position: center;
    border-radius: 0.7em 0.7em 0 0;
  }

  .card-content {
    height: 100%;
    background-color: #fff;
    border-radius: 0 0 0.7em 0.7em;
  }

  .card-content h4 {
    text-align: right;
    padding-right: .5rem;
    padding-left: .5rem;
    padding-top: .5rem;
    border-bottom: 1px solid black;
    width: 95%;
  }
</style>

<div class="card" style="background-image: url({img})">
  <div class="card-header">
  </div>
  <div class="card-content">
    <slot name="title">
      <h4>{title}</h4>
    </slot>
  </div>
</div>
