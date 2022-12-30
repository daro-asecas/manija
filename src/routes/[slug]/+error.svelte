<script context="module">

import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
    throw redirect(307, '/');
  }
}

</script>

<h1>La Manija Tango Club</h1>
<h2>Esta página está en desarrollo</h2>