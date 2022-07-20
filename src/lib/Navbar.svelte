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
        <img src="https://firebasestorage.googleapis.com/v0/b/photography-app-9dbd7.appspot.com/o/logo-cin-noir.png?alt=media&token=3c26465a-7482-480d-a502-c4e73a7a00c8" 
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
    padding-left:2rem;
    padding-right: 1.5rem;
    height: 7rem;
    background-color: #dbdbdb;
    /* --->  choose right color and style better  <--- */
}

.nav-logo {
    height: 90%;
    text-align: center;
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