<script>
import { afterUpdate } from 'svelte';
export let pageUrl;
export let items;
import { tweened } from 'svelte/motion';

let activePage;

let activeItem;

const tweenTime = 300;

const height = tweened(0, {
    duration: tweenTime,
});

afterUpdate(() => {
    activePage = pageUrl.split("/");
    if(pageUrl === "/"){
        activeItem = items[0].name;
    }
    else if(activePage[1] === "contact"){
        activeItem = items[1].name;
    }
    else if(activePage[1] === "a-propos"){
        activeItem = items[2].name;
    }
});

let target = 0;

for (let i=0; i <= items.length; i++){
    target = target + 12.8 + 20;
}

let burgerOpen = false;

const handleBurger = () => {
    if (burgerOpen === false) {
        burgerOpen = true;
        $height += target;
    } else{
        $height = 0;
        setTimeout(() => {
            burgerOpen = false;
        }, tweenTime);
    }
};

</script>

<div class="navbar">
    <div class="nav-left">
        <img src="https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/logo-cin-noir.png?alt=media&token=76606cc4-8548-4550-b49b-89411656d070" 
        alt="Optik Photographie" class="nav-logo" />
    </div>

    <div class="nav-right">
        {#each items as item}
        <div class="nav-item">
            <a href={`/${item.ref}`} class:active={item.name === activeItem} class:highlight={item.name == "Contactez-Moi"}>{item.name}</a>
        </div>
        {/each}
    </div>

    <div class="burger" on:click={handleBurger}>
        <img src="/images/burger.svg" alt="">
    </div>

    <div class="burger-menu"  style={`height: ${$height}px; ${burgerOpen? "display:flex; flex-direction: column;": "display: none;"}`}>
        {#each items as item}
        <div class="nav-item">
            <a href={`/${item.ref}`} on:click={handleBurger} class:active={item.name === activeItem} class:highlight={item.name == "Contactez-Moi"}>{item.name}</a>
        </div>
        {/each}
    </div>
</div>

<style>

.navbar {
    display: flex;
    justify-content: space-between;
    padding-left:2rem;
    padding-right: 1.5rem;
    height: 7rem;
    background-color: #dbdbdb;
    /* --->  choose right color and style better  <--- */
}

.nav-logo {
    height: 90%;
    margin: auto 0;
}

a {
    color:black;
    text-decoration: none;
}

.active {
    border-bottom: 2px solid lightskyblue;
}

.nav-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-item {
    text-align: center;
    margin: 0 10px;
}

.highlight{
    font-weight: 500;
    color: orangered;
}

.burger{
    margin: auto 2rem;
    padding: 1rem;
    cursor: pointer;
}

/* ---->  add sliding down animation  <---------------------------------- */
.burger-menu{
    position: absolute;
    top: 7rem;
    left: 0;
    background-color: lightgrey;
    padding: 1rem;
    width: 100vw;
    z-index: 2;
    height: 0;
    overflow: hidden;
}

.burger-menu > .nav-item {
    margin: 0.8rem;
}

.burger{
    display: none;
}

.nav-left{
    display: flex;
    justify-content: center;
}


/* responsiveness */

@media screen and (max-width : 750px){
    .nav-right{
        display: none;
    }

    .burger{
        display: unset;
    }
}

@media screen and (max-width : 535px){
    .nav-logo{
        max-width: 100%;
    }
    .navbar{
        padding: 0 0.5rem;
    }
}

@media screen and (max-width : 490px){
    .nav-logo{
        max-width: 100%;
        height: auto;
    }

    .burger{
        margin: auto 1rem;
    }
}

@media screen and (max-width : 450px){
    .burger{
        margin: auto 0.5rem;
    }
}

@media screen and (max-width : 410px){
    .burger{
        margin: auto 0;
    }
}
</style>