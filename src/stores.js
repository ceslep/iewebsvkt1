import { writable } from "svelte/store";

export const URL = writable("https://app.iedeoccidente.com/");

export const MAESTRO = writable(false);
export let blogin = writable(false);
