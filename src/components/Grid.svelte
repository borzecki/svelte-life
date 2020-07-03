<script>
  import store, { active, toggle } from "../store";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    margin: 5%;
  }

  .cell {
    border: 1px solid #0003;
    margin: 0.5px;
    cursor: pointer;

    display: grid;
    place-items: center;
  }

  .cell::before {
    content: "";
    display: block;
    padding-bottom: 100%;
    grid-area: 1 / 1 / 2 / 2;
  }

  .active {
    background: #ee6c4d;
  }
</style>

<div class="grid" style="--columns:{$store.cols}">
  {#each $active as value, i}
    <div on:click={() => toggle(i)} class:active={value} class="cell" />
  {/each}
</div>
