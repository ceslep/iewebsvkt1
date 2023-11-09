<!-- src/routes/[slug].svelte -->
<script context="module" lang="ts">
    // Importa el tipo adecuado para 'params' desde '@sveltejs/kit'
    import type { Load } from '@sveltejs/kit';
  
    // Define el tipo de 'params'
    interface RouteParams {
      slug?: string;
      [key: string]: string | undefined;
    }
  
    // Utiliza 'Load' con el tipo específico de 'params'
    export const load: Load<RouteParams> = async ({ params }) => {
      const { slug } = params;
  
      // Realiza acciones según el valor de slug (puedes cargar datos, etc.)
      return {
        props: {
          slug
        }
      };
    };
  </script>
  
  <script lang="ts">
    export let slug: string;
  </script>
  <h1>{slug}</h1>
  