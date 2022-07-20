import { writable } from 'svelte/store';

const contactStore = writable(
    {
    subj: "",
    }
    );

export { contactStore };