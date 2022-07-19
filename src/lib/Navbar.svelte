<script>
import { afterUpdate } from 'svelte';
export let pageUrl;
export let items;

let activePage;

let activeItem;

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

</script>

<div class="navbar">
    <div class="nav-left">
        <img src="https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/logo-cin.png?alt=media&token=3846acd0-54d0-45ee-bf26-ad58fa9ec948" 
        alt="LOGO" class="nav-logo" />
    </div>

    <div class="nav-right">
        {#each items as item}
        <div class="nav-item">
            <a href={`/${item.ref}`} class:active={item.name === activeItem}>{item.name}</a>
        </div>
        {/each}
    </div>
</div>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    padding-left:30px;
    padding-right: 20px;
    height: 70px;
    background-color: crimson;
    /* --->  choose right color and style better  <--- */
}

.nav-logo {
    width: 27%;
    padding: 0 10px;
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
</style>