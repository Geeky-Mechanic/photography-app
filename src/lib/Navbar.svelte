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
        <span class="nav-logo">Logo</span>
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
    font-weight: 800;
    font-size: 3rem;
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