<script lang="ts">
  import Spinnermd from "./Spinnermd.svelte";
  import { type Periodo } from "../types/tipos.ts";
  import { afterUpdate, onMount } from "svelte";
  let periodos: Periodo[] = [];

  onMount(async () => {
    const response = await fetch(
      "https://app.iedeoccidente.com/getPeriodosNotas.php"
    );
    periodos = [
      ...(await response.json())
        .filter(
          (periodo: any) =>
            !periodo.nombre.includes("CINCO") &&
            !periodo.nombre.includes("MINIMAS")
        )
        .map((p: any) => {
          return {
            ind: p.ind,
            nombre: p.nombre,
            selected: p.selected == "selected",
          };
        }),
    ];
    console.log(periodos);
  });

  afterUpdate(async () => {});

  const traduce = (node: HTMLSelectElement) => {};

  const change = (e: any) => {
    console.log(e.target.value);
  };
</script>

<main class="">
  {#if periodos.length > 0}
    <label for="periodonotas"
      >Período
      <span
        class="spinner-border spinner-border-sm spperiodo d-none"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </span>
    </label>

    <select
      id="periodos"
      on:change={change}
      use:traduce
      name="periodo"
      class="form-select"
      tabindex="-1"
    >
      <option value="" />
      {#each periodos as { nombre, selected, ind }}
        {#if selected}
          <option value={nombre} selected>{nombre}</option>
        {:else}
          <option value={nombre}>{nombre}</option>
        {/if}
      {/each}
    </select>
  {:else}
    <Spinnermd />
  {/if}
</main>
