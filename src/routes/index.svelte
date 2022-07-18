<script>
import Carousel from "$lib/Carousel.svelte";
const items = [
    "https://firebasestorage.googleapis.com/v0/b/e-commerce-tutorial-e673a.appspot.com/o/1649899781836nike-shoes.png?alt=media&token=52a7e26f-c047-4fd2-bfec-708f0dc1eb7f",
    "https://firebasestorage.googleapis.com/v0/b/e-commerce-tutorial-e673a.appspot.com/o/1650564740146dark-jeans-men.png?alt=media&token=26100127-8465-47fd-bed6-2bfc92d9c361",
    "https://firebasestorage.googleapis.com/v0/b/e-commerce-tutorial-e673a.appspot.com/o/1650570954225grey-shirt-men.png?alt=media&token=705ef3d7-41f1-463d-a103-6da69600e5a6",
    "https://firebasestorage.googleapis.com/v0/b/e-commerce-tutorial-e673a.appspot.com/o/1650571236773pale-blue-hoodie.png?alt=media&token=f6a763da-8e76-447b-a445-f90650401a74",

];
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
        <div class="carousel-1">
            <h3 class="carousel-title">Carousel Title</h3>
            <p class="carousel-description">Small carousel presentation text to explain what we see</p>
            <Carousel autoChange {items} timer={3} />
        </div>

        <div class="carousel-2">
            <h3 class="carousel-title">Carousel Title</h3>
            <p class="carousel-description">Small carousel presentation text to explain what we see</p>
            <Carousel autoChange {items} timer={3} />
        </div>
                
    </section>
    

</main>

<style>
main {
    padding: 0.8rem;
}

.carousel-title{
    text-align: center;
    margin-top: 5rem;
}

.carousel-description{
    text-align: center;
}
</style>