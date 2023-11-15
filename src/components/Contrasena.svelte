<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { URL } from '../stores';
	export let contrasena: String;

	const dispatch = createEventDispatcher();

	const blur = async () => {
		const response = await fetch(`${$URL}getMaestra.php`, {
			method: 'POST',
			body: JSON.stringify({ contrasena })
		});
		const { permitido } = await response.json();
		dispatch('permitido', { esPermitido: permitido });
	};

    function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		contrasena = target.value;
	}
</script>

<a href="#!" id="cambiarContrasena">Contraseña</a>
<div class="input-group mb-3">
	<input
		bind:value={contrasena}
		on:blur={blur}
        on:input={handleChange}
		type="password"
		class="form-control"
		aria-label="Username"
		name="contrasena"
		id="contrasena"
		aria-describedby="basic-addon1"
		required
	/>
	<span class="input-group-text" id="basic-addon1"><i class="bi bi-eye" id="eyeIcon" /></span>
</div>
