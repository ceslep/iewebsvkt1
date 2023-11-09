<script lang="ts">
     import { goto } from '$app/navigation';


     const login=()=>{
        goto('/login');
     }
</script>

<nav class="navbar navbar-expand-xl navbar-light bg-primary fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand text-white fs-7" href="/">IEdeOccidente <span class="d-none"
                id="timer">00:00:00</span></a>
        <button style="color: #ffffff;background-color: #2cdc72;" class="navbar-toggler text-white" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" style="color: #ffffff;background-color: #2cdc72;"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav menu-root d-none">
                <li class="nav-item">
                    <a class="nav-link active text-white consultar " aria-current="page" href="#!">Informes</a>
                </li>
                <li class="nav-item"><a class="nav-link text-white descargas" href="#!">Descargas</a></li>
                <li class="nav-item"><a class="nav-link text-white descripciones" href="#!">Descripciones</a>
                </li>
                <li class="nav-item"><a class="nav-link text-white puestos" href="#!">Puestos</a></li>
                <li class="nav-item dropdown inasist">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="inasistenciasMenuLink" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Inasistencias
                    </a>
                    <ul class="dropdown-menu" id="inasme" aria-labelledby="inasistenciasMenuLink">
                        <li><a class="dropdown-item" href="#!" id="conci">Inasistencias</a></li>
                        <li><a class="dropdown-item" id="controli" href="#!">Control Asistencia</a></li>
                        <li><a class="dropdown-item" id="observer" href="#!">Observador</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" id="consoli" href="#!"><i
                                    class="bi bi-card-checklist fw-bold me-1"></i>Consolidado de Inasistencias</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown admin">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="administrativoMenuLink"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Administrativo
                    </a>
                    <ul class="dropdown-menu" id="adminme" aria-labelledby="administrativoMenuLink">
                        <li><a class="dropdown-item" data-url="/appold/cambia_estudiante.php"
                                data-title="Cambiar Grupo" id="cambiarGrupo">Cambiar Grupo</a>
                        </li>

                        <li><a class="dropdown-item" data-url="/ssubirNotas/" data-title="Subir Notas"
                                id="subirNotas" href="#!">Subir
                                Notas</a>
                        </li>
                        <li><a class="dropdown-item" data-url="/tiempos" id="tiemposDocentes"
                                data-title="Revisión uso de la plataforma de Notas" href="#!">Tiempos Docentes</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" data-url="" id="historicoDocentes"
                                data-title="Guardar Histórico de Docente Retirado" href="#!">Guardar Histórico de
                                Docente Retirado</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <a class="dropdown-item" data-url="" id="mensajeNotas" data-title="Mensaje Notas"
                                href="#!">Mensaje en Notas</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link text-white estadisticas" href="#!">Estadísticas</a>
                </li>
                <li class="nav-item"><a class="nav-link text-white docentes" href="#!">Docentes</a></li>
                <li class="nav-item dropdown notasmenu">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="notasMenuLink" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Notas
                    </a>
                    <ul class="dropdown-menu" id="regNotas" aria-labelledby="notasMenuLink">
                        <li><a class="dropdown-item" href="#!" id="inforestreg">
                                <i class="bi bi-pen-fill me-1"></i>
                                Registrar Notas</a></li>
                        <li>
                            <hr class="divider">
                        </li>
                        <li><a class="dropdown-item notas" href="#!" id="concn">
                                <i class="bi bi-table me-1"></i>
                                Concentrador Académico</a></li>
                    </ul>
                </li>


                <li class="nav-item dropdown certificadosmenu">
                    <a class="nav-link dropdown-toggle text-white" href="#!" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Certificados</a>
                    <ul class="dropdown-menu" id="certificados" aria-labelledby="notasMenuLink">
                        <li><a class="dropdown-item certificados" href="#!" id="gencertificados">
                                <i class="bi bi-pen-fill me-1"></i>
                                Generar Certificados y Constancias</a></li>
                       
                    </ul>
                </li>
                <li class="nav-item dropdown conviv">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="convivenciaMenuLink" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Convivencia
                    </a>
                    <ul class="dropdown-menu" id="convivenme" aria-labelledby="convivenciaMenuLink">
                        <li class="nav-item">
                            <a class="nav-link text-dark convivencia" href="#!">Reportar Convivencia</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark consconvivencia" href="#!">
                                <i class="bi bi-people-fill fw-bold me-1"></i> Consolidado de Convivencia
                            </a>
                        </li>

                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link text-white notificaciones position-relative" href="#!">
                        Notificaciones
                        <span
                            class="position-absolute top-2 start-sm-10 start-100 translate-middle badge rounded-pill bg-danger d-none">
                            <span id="nofn"></span>
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </a></li>
            </ul>
            <div class="d-flex justify-content-end w-100 pt-2 pt-xl-0">
                <button class="btn btn-success ingresarDocente" on:click={login}>Ingresar
                    👨‍🏫
                </button>
            </div>
        </div>
    </div>
</nav>
