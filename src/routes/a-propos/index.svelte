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

<svelte:head>
    <title>À-propos d'Optik Photographie - Voici une courte description</title>
    <meta name="description" content="Voici une courte description d'Optik Photographie et de son histoire!">
</svelte:head>

<main out:slide>
    <h1>{infoData[0].title}</h1>
    <p>{infoData[0].content}</p>
    <img src={infoData[0].image} alt="ME">
</main>

<style>
    main {
        padding: 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img{
        max-width: 80%;
    }

</style>
