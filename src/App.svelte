<script>
  import store, { init } from "./store";
  import Input from "./components/input.svelte";
  import Grid from "./components/Grid.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>game of life</h1>
  <input bind:value={$store.rows} type="number" />
  <input bind:value={$store.cols} type="number" />
  <button on:click={init}>randomize</button>
  <Grid />
</main>
