<script>
import Carousel from "$lib/Carousel.svelte";
import Button from "$lib/Button.svelte";
import { goto } from '$app/navigation';
import { contactStore } from "../stores/info.js";

const firstItems = [
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/evenement-1.jpg?alt=media&token=d37cade0-ad7d-4fc5-b17b-5e912f8a1cf7",
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/evenement-2.jpg?alt=media&token=52f9c289-263a-465e-9907-466d67b87a94",
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/evenement-3.jpg?alt=media&token=aaa1f637-33bc-4970-8a7b-f7384edef682",

];
const secondItems = [
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/famille-1.jpg?alt=media&token=c1c5a02c-fc4e-482e-abb1-50fec23523d9",
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/famille-2.jpg?alt=media&token=ec50272e-938a-4ad9-bdc3-1496b8d71626",
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/famille-3.jpg?alt=media&token=35f524c4-00f2-40b2-b2c7-daee9fe4b3dd",

];

const thirdItems = [
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/grossesse-1.jpg?alt=media&token=308c6fbf-3fd4-41b4-bc66-8a426d7f007b",
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/grossesse-2.jpg?alt=media&token=a7c97852-0ff1-4437-92a2-83054cc39feb",
    "https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/grossesse-3.jpg?alt=media&token=60a260d8-3acc-4dc9-a3c3-763b70097ad0",

];

const handleClick = (subj)=> {
$contactStore.subj = subj;
goto("/contact");
};
</script>

<main>
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
            <p class="carousel-description">Small carousel presentation text to explain what we see</p>
            <Carousel autoChange items={firstItems} bgColor="#dbdbdb" timer={3} />
            <Button on:click={() => handleClick("Réservation pour Événements")} content="RÉSERVER" primary />
        </div>

        <div class="carousel-container">
            <h2 class="carousel-title">Famille</h2>
            <p class="carousel-description">Small carousel presentation text to explain what we see</p>
            <Carousel autoChange items={secondItems} bgColor="#dbdbdb" timer={3} />
            <Button on:click={() => handleClick("Réservation pour Famille")} content="RÉSERVER" primary />
        </div>

        <div class="carousel-container">
            <h2 class="carousel-title">Grossesses</h2>
            <p class="carousel-description">Small carousel presentation text to explain what we see</p>
            <Carousel autoChange items={thirdItems} bgColor="#dbdbdb" timer={3} /> 
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