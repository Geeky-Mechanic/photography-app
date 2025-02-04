<script context="module">
        export async function load({ fetch }) {
        const infoRes = await fetch(`/api/content/contact`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const infoData = await infoRes.json();
        return {
            props: {
                infoData,
            },
        };
    }
</script>

<script>
    import Card from "$lib/Card.svelte";
    import Button from "$lib/Button.svelte";
    import { slide } from "svelte/transition";
    export let infoData;

    /* --->  Input values handling  <--- */

    let data = {
        name: "",
        email: "",
        lname: "",
        subj: "",
        desc: "",
    };

    /* --->  Field validation handling  <--- */

    let errors = {
        name: false,
        email: false,
        lname: false,
        subj: false,
        desc: false,
    };

    let posting = false;
    let posted = false;
    let failed = false;

    const validateFields = () => {
        errors.name = false;
        errors.email = false;
        errors.lname = false;
        errors.subj = false;
        errors.desc = false;
        if (data.name.length <= 1) {
            errors.name = true;
        }
        if (!data.email.includes("@") && !data.email.includes(".")) {
            errors.email = true;
        }
        if (data.lname.length <= 1) {
            errors.lname = true;
        }
        if (data.subj.length <= 1) {
            errors.subj = true;
        }
        if (data.desc.length <= 10) {
            errors.desc = true;
        }
    };

    /* --->  Event handlers  <--- */

    const handleClick = () => {
        validateFields();
        if (
            errors.name ||
            errors.email ||
            errors.lname ||
            errors.subj ||
            errors.desc
        ) {
            posting = false;
            posted = false;
            failed = true;
        } else {
            postForm();
            posting = true;
            posted = false;
            failed = false;
        }
    };

    const postForm = async () => {
        const res = await fetch(`/api/contact`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        });
        if (res.ok) {
            posting = false;
            posted = true;
            failed = false;
            return res;
        } else {
            posting = false;
            posted = false;
            failed = true;
            throw new Error("Could not POST");
        }
    };
</script>

<svelte:head>
    <title>Contactez-moi - Prenez rendez-vous ou posez vos questions</title>
    <meta name="description" content="Prendre rendez-vous - Remplissez le formulaire pour prendre rendez-vous ou pour poser des questions sur nos services">
</svelte:head>

<div out:slide>
    <Card hoverable>
        <div class="contact-container">
            <h2 class="contact-title">{infoData[0].title}</h2>
            <div class="contact-content">
                <p>{infoData[0].content}</p>
            </div>
            <div class="secondary-container">
                <div class="form-container">
                    <div class="form-element">
                        <label for="1">Prénom</label>
                        <input
                            type="text"
                            name="name"
                            id="1"
                            placeholder="John"
                            bind:value={data.name}
                        />
                        {#if errors.name}
                            <p class="errorMsg">Le prénom est manquant</p>
                        {/if}
                    </div>
                    <div class="form-element">
                        <label for="2">Nom</label>
                        <input
                            type="text"
                            name="lname"
                            id="2"
                            placeholder="Doe"
                            bind:value={data.lname}
                        />
                        {#if errors.lname}
                            <p class="errorMsg">Le nom est manquant</p>
                        {/if}
                    </div>
                    <div class="form-element">
                        <label for="3">Courriel</label>
                        <input
                            type="email"
                            name="email"
                            id="3"
                            placeholder="johndoe@gmail.com"
                            bind:value={data.email}
                        />
                        {#if errors.email}
                            <p class="errorMsg">
                                Le courriel est manquant ou incorrect
                            </p>
                        {/if}
                    </div>
                    <div class="form-element">
                        <label for="4">Sujet</label>
                        <input
                            type="text"
                            name="subj"
                            id="4"
                            placeholder="Sur quoi porte votre message?"
                            bind:value={data.subj}
                        />
                        {#if errors.subj}
                            <p class="errorMsg">le sujet est manquant</p>
                        {/if}
                    </div>
                    <div class="form-element">
                        <label for="5">Description</label>
                        <textarea
                            name="desc"
                            id="5"
                            rows="10"
                            cols="60"
                            placeholder="Décrivez aussi précisément que possible"
                            bind:value={data.desc}
                        />
                        {#if errors.desc}
                            <p class="errorMsg">La description est manquante ou trop courte</p>
                        {/if}
                    </div>
                    <Button on:click={handleClick} content="ENVOYER" secondary />
                </div>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/charger-project.appspot.com/o/question.png?alt=media&token=21067d71-ae51-4924-9246-09032c0cd60c"
                    alt="thinking"
                />
            </div>
            {#if posting}
                <p class="promise-pending">Sending your inquiry</p>
            {:else if posted}
                <p class="promise-confirmed">
                    Sent, thank you for choosing us!
                </p>
            {:else if failed}
                <p class="promise-failed">
                    Posting has failed, please refresh and try again!
                </p>
            {/if}
        </div>
    </Card>
</div>

<style>
    .contact-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        max-width: 100vw;
    }

    .secondary-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .form-container {
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        margin-right: 200px;
    }

    img {
        width: 30%;
        height: 30%;
        fill: #fff;
    }

    label {
        font-size: 1.2rem;
        color: #6b6969;
        margin: 0.5rem 0;
    }

    input {
        margin: 0.5rem 0;
        padding: 0.6rem 0.4rem;
        width: 100%;
    }

    textarea {
        margin: 0.5rem 0;
        padding: 0.6rem 0.4rem;
        width: 100%;
    }

    .errorMsg {
        color: red;
    }

    .promise-pending {
        color: blue;
    }

    .promise-confirmed {
        color: green;
    }

    .promise-failed {
        color: red;
    }

    @media screen and (max-width : 900px){
        img{
            display: none;
        }
        .contact-container{
            align-items: center;
        }
        .secondary-container{
            justify-content: center;
        }
        .form-container{
            align-items: center;
            margin-right: auto;
        }
        .form-element{
            width: 100%;
            align-items: center;
        }
    }
</style>
