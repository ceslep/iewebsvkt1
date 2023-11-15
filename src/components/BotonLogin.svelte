<script lang="ts">
	import { afterUpdate, createEventDispatcher } from "svelte";
    import {MAESTRO, URL} from "../stores";
    import Swal from "sweetalert2";
    export let identificacion:string="";
    export let contrasenaseguridad:string="";
    export let contrasena:string="";

    import { goto } from '$app/navigation';





    afterUpdate(()=>{
        console.log(identificacion)
    });

    let btnText:String="Aceptar";

    let btnDisabled=true;

    const dispatch=createEventDispatcher();

    const getCodigoValido = async (docente:String, cSeguridad:String, ctrasena:String):Promise<boolean> => {
    const response = await fetch(`${$URL}validateCode.php`, {
        method: "POST",
        body: JSON.stringify({ docente, cSeguridad, ctrasena })
    })
    let res:boolean;
    const { msg } = await response.json();
    return !!msg;
    }


   const verificarLogin = async():Promise<boolean>=>{
    try {
        btnDisabled=false;
        const codigo = contrasenaseguridad;
        console.log(identificacion)
        if ((identificacion === "") || (identificacion.length < 4)) {
            await Swal.fire({
                title: "Debe colocar una identificación válida.", icon: 'error',
                toast: true
            });
            btnDisabled=true;
            return false;
        }
        if ((contrasena == "") || (contrasena.length < 4)) {
            await Swal.fire({
                title: "Debe colocar una contraseña válida.", icon: 'error',
                toast: true
            });
            btnDisabled=true;
            return false;
        }
        if (((codigo == "") || (codigo.length < 5)) && (await getCodigoValido(identificacion,contrasenaseguridad,contrasena))) {
            await Swal.fire({
                title: "Debe colocar un código válido.", icon: 'error'
            });
            btnDisabled=true;
            return false;
        }

        let response = await fetch(`${$URL}login.php`, {
            method: "POST",
            body: JSON.stringify({ docente:identificacion,contrasena,contrasenaseguridad, infocliente:"" }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const acceso = await response.json();
        if (acceso.concedido === "Si") {

            dispatch('login');
/* 
            document.querySelector(".ingresarDocente").textContent = "Salir 📤";
            document.querySelector(".ingresarDocente").classList.toggle("btn-primary");
            document.querySelector(".ingresarDocente").classList.toggle("btn-danger");
 */
            
           
          
          

          
            if (acceso.Maestra === "Si" || acceso.datos.nombres.includes("COORDI")) {
                const session = await fetch(`${$URL}iniciar_sesion.php`);
                if (acceso.Maestra === "Si") $MAESTRO = true;
               /*  document.getElementById("seldocc").classList.remove("d-none");
                document.getElementById("menuNotas").classList.add("d-none");
                document.oncontextmenu = new Function("return true");
                document.querySelector(".menu-root").classList.remove("d-none"); */

                document
                    .querySelectorAll(".menu-root > li > a")
                    .forEach((a) => a.classList.remove("d-none"));
            } else {
               /*  document.getElementById("menuNotas").classList.remove("d-none");
                document.querySelector(".crearNotificacion").classList.add("d-none");
                document.oncontextmenu = new Function("return false");
                document.querySelector(".menu-root").classList.remove("d-none"); */
                if (!acceso.datos.nombres.includes("COORDI")) {
                    document
                        .querySelectorAll(".menu-root > li > a")
                        .forEach((a) => a.classList.add("d-none"));
                }

                /* document.querySelector(".convivencia").classList.remove("d-none");
                document.querySelector(".notificaciones").classList.remove("d-none");
                document.querySelector(".notas").classList.remove("d-none");
                document.querySelector(".inasist").classList.remove("d-none");
                document
                    .querySelector("#inasistenciasMenuLink")
                    .classList.remove("d-none");
                document.querySelector("#controli").classList.add("d-none");
                document.querySelector("#consoli").classList.remove("d-none");
                document.querySelector("#notasMenuLink").classList.remove("d-none");
                document.querySelector(".puestos").classList.remove("d-none");
                document.querySelector("#convivenciaMenuLink").classList.remove("d-none");
                document.querySelector(".conviv").classList.remove("d-none"); */

                if (acceso.informes === "S") {
                  /*   document.querySelector(".consultar").classList.remove("d-none");
                    document.querySelector(".notas").classList.remove("d-none");
                    NNIVEL = acceso.nivel;
                    NNUMERO = acceso.numero;
                    NASIGNACION = acceso.asignacion;
                    NPERIODO = PERIODO; */
                }
            }
            return true;
           
        } else {
            await Swal.fire({
                icon: "error",
                title: "Acceso Denegado",
            });
        }
        btnDisabled=true;
    } catch (e) {
        console.log(e);
    }
    return false;
}



   const login=async ()=>{
        if (await verificarLogin()) 
        goto(`/inicio/${identificacion}`);
   }
</script>

<button
	on:click|preventDefault={login}
	type="button"
	class="btn btn-primary rounded-0 ingDocentes ms-2"
	>{btnText}<i class="bi bi-search ms-2" />
	<span class="spinner-border spinner-border-sm spcid d-none" role="status">
		<span class="visually-hidden">Loading...</span>
	</span>
</button>
