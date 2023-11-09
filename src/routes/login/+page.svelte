<script lang="ts">
	import BotonLogin from './../../components/BotonLogin.svelte';
    import Periodos from './../../components/Periodos.svelte';

    let identificacion:String;
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
                <label for="docente"><a id="idsm" href="#!">Identificación</a></label>
                <div class="spinner-border spinner-border-sm d-none spseldocs" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <input bind:value={identificacion} type="text" name="docente" id="docente" inputmode="numeric" class="form-control"
                    required autocomplete="new-password">
            </div>
            <div class="form-group">
                <a href="#!" id="cambiarContrasena">Contraseña</a>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" aria-label="Username" name="contrasena"
                        id="contrasena" aria-describedby="basic-addon1" required>
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-eye"
                            id="eyeIcon"></i></span>
                </div>
               
            </div>
            <div class="form-group">
               <Periodos/>
            </div>
            <div class="d-flex gap-2 w-100">
                <div class="form-group">
                    <label for="contrasenaseguridad">Código de Seguridad</label>
                    <input type="number" name="contrasenaseguridad" id="contrasenaseguridad"
                        class="form-control" required>
                </div>
                <div class="form-group grid">
                    <label for="solcod"></label>
                    <button class="btn btn-danger w-100 d-block rounded-0" id="solcod"><i
                            class="bi bi-cpu"></i>&nbsp;Solicitar Código
                        <span class="spinner-border spinner-border-sm spcsco d-none" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-end pt-2">
                <BotonLogin {identificacion}/>

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