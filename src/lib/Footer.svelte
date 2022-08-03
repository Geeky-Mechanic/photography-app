<script>
    import { afterUpdate } from "svelte";
    import Fa from "svelte-fa/src/fa.svelte";
    import {
        faFacebook,
        faInstagram,
    } from "@fortawesome/free-brands-svg-icons";
    import pkg from '@fortawesome/free-solid-svg-icons';
    const { faEnvelope } = pkg;
    export let pageUrl;

    export let items;

    let activePage;

    let activeItem;

    afterUpdate(() => {
        activePage = pageUrl.split("/");
        if (pageUrl === "/") {
            activeItem = items[0].name;
        } else if (activePage[1] === "contact") {
            activeItem = items[1].name;
        } else if (activePage[1] === "a-propos") {
            activeItem = items[2].name;
        }
    });
</script>

<footer>
    <div class="footer-wrapper">
        <div class="footer-content footer-left">
            <a href="https://www.facebook.com/OptikPhotographie" class="left-content">
                <Fa icon={faFacebook} color="#4267B2" size="4x" /> <p>@Cindy123456</p> </a
            >
            <a href="mailto:cindy_brousseau@hotmail.com" class="left-content">
                <Fa icon={faEnvelope} size="4x" /> <p>cindy_brousseau@hotmail.com</p> </a
            >
            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Foptik_photographie%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR164gKR9vS4scQkpHdjuxw4bmw5FCWf1uTQ2-A-PRNIcDiRRkZYFrhMzss&h=AT15nWTFwGf4AlWF-xXjZl_CN8DqGk8KR5EP4sGn_TMlacCHWXquegEw7vcn1AWezeMv2ImKqssgHufSuD7ZBQEP7aTf1LUV1OvFcVNyXDjvCf91RRmtpCgUdBt32A" class="left-content">
                <Fa icon={faInstagram} size="4x" color="#bc2a8d" /> <p>@optik_photographie</p> </a
            >
        </div>

        <div class="footer-content footer-center">
            {#each items as item}
                <a
                    href={`/${item.ref}`}
                    class="center-content"
                    class:active={item.name === activeItem}>{item.name}</a
                >
            {/each}
        </div>

        <div class="footer-content footer-right">
            <span class="right-content">Right</span>
            <span class="right-content">Right</span>
            <span class="right-content">Right</span>
            <span class="right-content">Right</span>
            <span class="right-content">Right</span>
            <span class="right-content">Right</span>
        </div>
    </div>
    <span class="copyright">Copyright 2022 Geeky Mechanic</span>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 5% 1%;
        margin: 40px 0;
    }

    a {
        color: #6b6969;
        text-decoration: none;
    }

    a > p {
        margin-left: 1rem;
    }

    .footer-wrapper {
        display: flex;
        width: 100%;
        margin-bottom: 2rem;
    }

    .footer-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #6b6969;
        flex: 1;
    }
    .footer-left {
        align-items: flex-start;
    }
    .footer-left > a{
        display: flex;
        align-items: center;
        margin: 1rem 0;
    }

    .footer-content > a {
        display: flex;
        align-items: center;
        margin: 1rem 0;
    }

    .footer-right {
        align-items: flex-end;
    }

    .left-content {
        margin: auto 0;
    }

    .center-content {
        margin: 5px 0;
        cursor: pointer;
    }

    .active {
        border-bottom: 2px solid crimson;
    }

    .right-content {
        margin: 5px 0;
    }

    .copyright {
        color: #aaa;
        font-size: 14px;
        display: inline-block;
        padding: 20px;
        border-top: 1px solid #ddd;
    }

    @media screen and (max-width : 750px){
        .footer-center, .footer-right{
            display: none;
        }
        .footer-left{
            display: flex;
            flex-direction: row;
        }
        .footer-left > a > p {
            display: none;
        }
        .footer-left > a {
            margin: 0 1rem;
        }
    }

</style>
