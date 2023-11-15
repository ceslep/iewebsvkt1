<script >
    import { fly,fade } from 'svelte/transition';

    export let data;

</script>

<main class="pt-5" in:fly={{ y: 200, duration: 500 }} out:fade={{duration:200}}>
    <h1>{data.identificacion}</h1>
</main>

<style>
    main {
      position: relative;
      will-change: transform;
    }
  </style>