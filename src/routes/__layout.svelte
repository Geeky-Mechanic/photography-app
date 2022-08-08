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

<main>
    <Navbar {pageUrl} {items} />
    <slot />
    <Footer {pageUrl} {items} />
</main>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
    main{
        font-family: 'Open Sans', sans-serif;
    }
</style>
