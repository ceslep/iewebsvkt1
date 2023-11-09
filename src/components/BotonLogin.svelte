<script lang="ts">
    export let identificacion:String;
   const login=()=>{
        console.log("...")
        document.location.href=`/inicio/${identificacion}`
   }
</script>

<button on:click|preventDefault={login} type="button" class="btn btn-primary rounded-0 ingDocentes ms-2">Aceptar<i
    class="bi bi-search ms-2"></i>
<span class="spinner-border spinner-border-sm spcid d-none" role="status">
    <span class="visually-hidden">Loading...</span>
</span>
</button>