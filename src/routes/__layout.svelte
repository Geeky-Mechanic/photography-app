<script context="module">
    export function load({ url }) {
        return {
            props: { pageUrl: url.pathname },
        };
    }
</script>

<script>
    import "../styles/global.css";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    export let pageUrl;

    let items = [
        { name: "Acceuil", ref: "" },
        { name: "Contactez-Moi", ref: "contact" },
        { name: "A Propos de moi", ref: "a-propos" },
    ];
</script>

<Navbar {pageUrl} {items} />
<slot />
<Footer {pageUrl} {items} />

<style>
</style>
