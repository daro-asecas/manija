import { writable } from 'svelte/store';

const current = writable("home")
export default current