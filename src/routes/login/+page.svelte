<script lang="ts">
	import Identificacion from './../../components/Identificacion.svelte';
	import Contrasena from './../../components/Contrasena.svelte';
	import BotonLogin from './../../components/BotonLogin.svelte';
	import Periodos from './../../components/Periodos.svelte';
	import { afterUpdate } from 'svelte';
	import ContrasenaSeguridad from '../../components/ContrasenaSeguridad.svelte';

	let identificacion: string;
	let contrasena: string;
	let contrasenaseguridad:string;
	let esPermitido: boolean = false;

	afterUpdate(()=>{
		console.log(identificacion)
	});
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="ingresar al sistema" />
</svelte:head>

<main class="container">
	<div class="card">
		<div class="card-body">
			<form id="frmIngresoDocentes">
				<div class="form-group">
					<Identificacion bind:identificacion={identificacion} />
				</div>
				<div class="form-group">
					<Contrasena bind:contrasena={contrasena} on:permitido={(e)=>{
						esPermitido=e.detail.esPermitido
					}} />
				</div>
				<div class="form-group">
					<Periodos {esPermitido} />
				</div>
				<div class="d-flex gap-2 w-100">
					<div class="form-group">
						<ContrasenaSeguridad bind:contrasenaseguridad={contrasenaseguridad}/>
					</div>
					<div class="form-group grid">
						<label for="solcod" />
						<button class="btn btn-danger w-100 d-block rounded-0" id="solcod"
							><i class="bi bi-cpu" />&nbsp;Solicitar Código
							<span class="spinner-border spinner-border-sm spcsco d-none" role="status">
								<span class="visually-hidden">Loading...</span>
							</span>
						</button>
					</div>
				</div>
				<div class="d-flex justify-content-end pt-2">
					<BotonLogin {identificacion} {contrasenaseguridad} {contrasena} />
				</div>
			</form>
		</div>
	</div>
</main>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90vh;
	}
</style>
