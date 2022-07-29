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

        const familyData = await familyRes.json();
        const pregnancyData = await pregnancyRes.json();
        const eventData = await eventRes.json();

        return {
          props: {
            familyData,
            pregnancyData,
            eventData,
          },
        };
    }
</script>
<script>
import Carousel from "$lib/Carousel.svelte";
import Button from "$lib/Button.svelte";
import { goto } from '$app/navigation';
import { contactStore } from "../stores/info.js";
import { slide } from "svelte/transition";
export let familyData;
export let pregnancyData;
export let eventData;

let familyText;
let eventText;
let pregnancyText;

let newEventData = eventData.filter((item) => {
    return item.image !== "";
});

let newPregnancyData = pregnancyData.filter((item) => {
    return item.image !== "";
});

let newFamilyData = familyData.filter((item) => {
    return item.image !== "";
});

familyData.forEach(item => {
    if(item.content !== ""){
        familyText = item.content;
    }
});

pregnancyData.forEach(item => {
    if(item.content !== ""){
        pregnancyText = item.content;
    }
});

eventData.forEach(item => {
    if(item.content !== ""){
        eventText = item.content;
    }
});

const handleClick = (subj)=> {
$contactStore.subj = subj;
goto("/contact");
};
</script>

<main out:slide>
    <section class="presentation">
        <h1>Landing Page</h1>
        <p>My products presentation</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ducimus voluptatum sunt, delectus fuga veniam totam est unde ipsam ex hic atque consequuntur cumque iusto debitis et in, eaque similique?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita minus reprehenderit debitis placeat quia. Tempore nesciunt, aut dolorum sed facere impedit consequatur reiciendis fugit animi corrupti illo qui neque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores totam, eius dolore aliquam, veritatis neque impedit hic velit nesciunt saepe cupiditate porro quisquam possimus error eum nisi minima cumque architecto?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ullam exercitationem earum sed eum iure molestias architecto assumenda vitae placeat, incidunt veritatis sunt, corporis recusandae repudiandae nihil vero quis ea.
        </p>
    </section>
    
    <section class="carousels">
        <div class="carousel-container">
            <h2 class="carousel-title">Événements</h2>
            <p class="carousel-description">{eventText}</p>
            <Carousel autoChange items={newEventData} bgColor="#dbdbdb" timer={3} />
            <Button on:click={() => handleClick("Réservation pour Événements")} content="RÉSERVER" primary />
        </div>

        <div class="carousel-container">
            <h2 class="carousel-title">Famille</h2>
            <p class="carousel-description">{familyText}</p>
            <Carousel autoChange items={newFamilyData} bgColor="#dbdbdb" timer={3} />
            <Button on:click={() => handleClick("Réservation pour Famille")} content="RÉSERVER" primary />
        </div>

        <div class="carousel-container">
            <h2 class="carousel-title">Grossesses</h2>
            <p class="carousel-description">{pregnancyText}</p>
            <Carousel autoChange items={newPregnancyData} bgColor="#dbdbdb" timer={3} /> 
            <Button on:click={() => handleClick("Réservation pour Grossesses")} content="RÉSERVER" primary />
        </div>
                
    </section>
    

</main>

<style>

h1{
    font-size: 2rem;
}

p{
    font-size: 1.3rem;
}

.carousel-container{
    display: flex;
    align-items: center;
    flex-direction: column;
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


</style>