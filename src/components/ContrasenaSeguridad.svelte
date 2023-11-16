<script lang="ts">

    export let contrasenaseguridad:string;

    const blur = async () => {

    }
 function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		contrasenaseguridad = target.value;
	}
</script>


<label for="contrasenaseguridad">Código de Seguridad</label>
						<input
                        on:blur={blur}
                        bind:value={contrasenaseguridad}
                        on:input={handleChange}
							type="number"
							name="contrasenaseguridad"
							id="contrasenaseguridad"
							class="form-control"
							required
						/>