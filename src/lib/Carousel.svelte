<script>
export let items;
export let autoChange;
export let timer;
export let bgColor;
//export let dots;

timer = timer * 1000 || 5000;

let slideIndex = 0;

let intervalId;

const handleNavigate = (dir) => {
    clearTimeout(intervalId);
    if (dir === "prev"){
        slideIndex > 0 ? slideIndex -= 1 : slideIndex = (items.length - 1);
    } else {
        slideIndex < items.length - 1 ? slideIndex += 1 : slideIndex = 0;
    }
    autoSlide();
};

const autoSlide = () => {
    intervalId = setTimeout(() => {
    handleNavigate("next");
}, timer);

};

if (autoChange){
    setTimeout(() => {
    handleNavigate("next");
    autoSlide();
}, timer);

};


</script>

<main style={`background-color: ${bgColor};`}>
    <div class="button" style="left: 0;" id="prev" on:click={(e) => handleNavigate(e.target.id)}>
        <img src="/images/arrow-back.svg" alt="">
    </div>
    <div class="wrapper" style={`transform: translateX(${slideIndex * -100}vw)`}>
        {#each items as item}
            <div class="slide">
                <img src={item} alt="">
            </div>
        {/each}
    </div>
    <div class="button" style="right: 0;" id="next" on:click={(e) => handleNavigate(e.target.id)}>
        <img src="/images/arrow-forward.svg" alt="">
    </div>
</main>

<style>
    main{
        width: 100%;
        height: 100vh;
        display: flex;
        position: relative;
        overflow: hidden;
    }

    div{
        flex: 1;
        height: 100%;
    }

    img{
        height: 80%;
        margin: auto;
    }

    .button{
        width: 50px;
        height: 50px;
        background-color: lightgrey;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
        opacity: 0.5;
        z-index: 2;
    }

    .slide{
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    .wrapper {
        height: 100%;
        display: flex;
        transition: all 1.2s ease;
        /* moves wrapper on x-axis to do a slider */
    }

    
</style>