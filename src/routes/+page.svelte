<script>
	import { blogin } from './../stores.js';
	import { onMount } from "svelte";

	onMount(()=>{
		console.log("mounted");
		$blogin=false;
	})
</script>

<svelte:head>
	<title>Home1</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>





{#if !$blogin}
<div class="descudo">
    <img id="escudo" class="escudo" src="https://app.iedeoccidente.com/uescudo.png" alt="">
</div>
{/if}
<style>
    .escudo {

width: 75%;
position: absolute;

margin: auto;

top: 0;

left: 0;

right: 0;

bottom: 0;
z-index: -1;

}
</style>
