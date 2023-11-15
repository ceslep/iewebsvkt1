<script lang="ts">
	import Swal from 'sweetalert2';
    import {URL} from "../stores";

	export let identificacion:String="";


	const blur = async () => {
		if (identificacion == '') {
			Swal.fire({
				title: 'Identificación',
				text: 'identificación suministrada no puede estar en blanco',
				icon: 'error'
			});
			return;
		}
		const response = await fetch(`${$URL}getInfoDocente.php`, {
			method: 'POST',
			body: JSON.stringify({ identificacion })
		});
		const { permitido } = await response.json();
		if (!permitido) {
			Swal.fire({
				title: 'Error de acceso',
				text: 'No se encuentra ninguna información para la identificación suministrada',
				icon: 'error'
			});
			identificacion="";
		}
	};

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		identificacion = target.value;
	}
</script>

<label for="docente"><a id="idsm" href="#!">Identificación</a></label>
<div class="spinner-border spinner-border-sm d-none spseldocs" role="status">
	<span class="visually-hidden">Loading...</span>
</div>
<input
on:blur={blur}
	bind:value={identificacion}
	on:input={handleChange}
	type="text"
	name="docente"
	id="docente"
	inputmode="numeric"
	class="form-control"
	required
	autocomplete="new-password"
/>
