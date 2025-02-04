<script context="module">
    export async function load({fetch}){
        const familyRes = await fetch(`/api/content/famille`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const pregnancyRes = await fetch(`/api/content/grossesses`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const eventRes = await fetch(`/api/content/evenements`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const landingRes = await fetch(`/api/content/acceuil`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const familyData = await familyRes.json();
        const pregnancyData = await pregnancyRes.json();
        const eventData = await eventRes.json();
        const landingData = await landingRes.json();

        return {
          props: {
            familyData,
            pregnancyData,
            eventData,
            landingData,
          },
        };
    };
</script>
<script>
import Carousel from "$lib/Carousel.svelte";
import Button from "$lib/Button.svelte";
import { goto } from '$app/navigation';
import { slide } from "svelte/transition";
export let familyData;
export let pregnancyData;
export let eventData;
export let landingData;

const familyText = getContentText(familyData);
const eventText = getContentText(eventData);
const pregnancyText = getContentText(pregnancyData);

let newEventData = filterArray(eventData);
let newPregnancyData = filterArray(pregnancyData);
let newFamilyData = filterArray(familyData);

//filter array to return only items with images to be displayed
function filterArray(arr){
    return arr.filter((item) => {
            return item.image !== "";
        });
};

//isolate the item with content that will describe the carousel
function getContentText(arr){
    const newArr = arr.filter(item => {
        return item.content !== "";
    });
    return newArr[0].content;
}

</script>

<svelte:head>
    <title>Optik Photographie : Service de photographie de qualité en Abitibi</title>
    <meta name="description" content="Je suis une Photographe de Val-d'Or très enthousisate et versatile dans mes types de photos qui offre ses services à plusieurs endroits en Abitibi">
    <meta name="google-site-verification" content="q315ivPfbLoPKqtbtDT4iYXoUEwTLOaSwifKGImlVds" />
</svelte:head>

<main out:slide>
    <section class="presentation">
        <h1>{landingData[0].title}</h1>
        <p>{landingData[0].content}</p>
    </section>
    
    <section class="carousels">
        <hr />
        <div class="carousel-container">
            <h2 class="carousel-title">Événements</h2>
            <p class="carousel-description">{eventText}</p>
            <Carousel autoChange items={newEventData} bgColor="#000" timer={5} />
            <Button on:click={() => goto("/reservation")} content="RÉSERVER" primary />
        </div>
        <hr />
        <div class="carousel-container">
            <h2 class="carousel-title">Famille</h2>
            <p class="carousel-description">{familyText}</p>
            <Carousel autoChange items={newFamilyData} bgColor="#000" timer={5} />
            <Button on:click={() => goto("/reservation")} content="RÉSERVER" primary />
        </div>
        <hr />
        <div class="carousel-container">
            <h2 class="carousel-title">Grossesses</h2>
            <p class="carousel-description">{pregnancyText}</p>
            <Carousel autoChange items={newPregnancyData} bgColor="#000" timer={5} /> 
            <Button on:click={() => goto("/reservation")} content="RÉSERVER" primary />
        </div>
    </section>
    

</main>

<style>
main{
    overflow: hidden;
    background-color: #000;
    color: #fff;
}
h1{
    font-size: 2rem;
}

p{
    font-size: 1.3rem;
}

hr{
    width: 90%;
    background-color: #fff;
    height: 2px;
}

.carousel-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 3rem;
}

.presentation{
    padding: 0.8rem;
}

.carousel-title{
    text-align: center;
    margin-top: 5rem;
}

.carousel-description{
    text-align: center;
    color: light;
}

.presentation{
    text-align: center;
}

</style>