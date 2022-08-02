<script context="module">
    export async function load({ fetch }) {
        const infoRes = await fetch(`/api/content/a-propos`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const infoData = await infoRes.json();
        return {
            props: {
                infoData,
            },
        };
    }
</script>

<script>
    export let infoData;

    import { slide } from "svelte/transition";
</script>

<main out:slide>
    <h1>{infoData[0].title}</h1>
    <p>{infoData[0].content}</p>
</main>

<style>
    main {
        padding: 0.8rem;
    }
</style>
