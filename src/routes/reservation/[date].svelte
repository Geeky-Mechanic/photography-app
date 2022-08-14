<script context="module">
    export async function load({ params }) {
        const date = parseInt(params.date);
        return {
            props: {
                date,
            },
        };
    }
</script>

<script>
    export let date;

    let formData = {
        name: "",
        lastName: "",
        email: "",
        address: 0,
        streetName: "",
        phoneNumber: "",
        description: "",
    };

    let errors = {
        name: false,
        lastName: false,
        email: false,
        address: false,
        streetName: false,
        phoneNumber: false,
        description: false,
    };

    const validateFields = () => {
        errors.name = false;
        errors.email = false;
        errors.lastName = false;
        errors.address = false;
        errors.streetName = false;
        errors.phoneNumber = false;
        errors.description = false;
        if (formData.name.length <= 1) {
            errors.name = true;
        }
        if (!formData.email.includes("@") && !formData.email.includes(".")) {
            errors.email = true;
        }
        if (formData.lastName.length <= 1) {
            errors.lastName = true;
        }
        if (formData.address.length < 1) {
            errors.address = true;
        }
        if (formData.streetName.length <= 1) {
            errors.streetName = true;
        }
        if (formData.phoneNumber.length <= 1) {
            errors.phoneNumber = true;
        }
        if (formData.description.length <= 10) {
            errors.description = true;
        }
    };

    const handleClick = async () => {
        validateFields();
        if (
            !errors.name &&
            !errors.lastName &&
            !errors.email &&
            !errors.address &&
            !errors.streetName &&
            !errors.phoneNumber &&
            !errors.description
        ) {
            const res = await fetch(`/api/reservation`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({date, ...formData})
            })
            console.log(await res.json());
        }
    };
</script>

<main>
    <section class="top">
        <h1>Veuillez remplir le formulaire de rendez-vous</h1>
        <p>Ceci est un texte informatif</p>
    </section>
    <section class="form">
        <label for="name">Prénom</label>
        <input bind:value={formData.name} name="name" type="text" />
        <label for="lastName">Nom</label>
        <input bind:value={formData.lastName} name="lastName" type="text" />
        <label for="email">Courriel</label>
        <input bind:value={formData.email} type="text" name="email" />
        <label for="address">Addresse</label>
        <input bind:value={formData.address} type="number" name="address" />
        <label for="streetName">Rue</label>
        <input bind:value={formData.streetName} type="text" name="streetName" />
        <label for="phoneNumber">Numéro de téléphone</label>
        <input
            bind:value={formData.phoneNumber}
            type="tel"
            name="phoneNumber"
        />
        <label for="description">Description du contrat</label>
        <textarea
            bind:value={formData.description}
            name="description"
            cols="30"
            rows="10"
        />
        <button on:click={handleClick}>CONFIRMER</button>
    </section>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    input {
        width: 30%;
    }
    textarea {
        width: 30%;
    }
    label {
        margin: 0.8rem 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        width: 80%;
        align-items: center;
    }
    .top {
        width: 90%;
    }

    @media screen and (max-width: 1000px) {
        input {
            width: 50%;
        }
        textarea {
            width: 50%;
        }
    }
    @media screen and (max-width: 600px) {
        input {
            width: 60%;
        }
        textarea {
            width: 60%;
        }
    }
    @media screen and (max-width: 500px) {
        input {
            width: 70%;
        }
        textarea {
            width: 70%;
        }
    }
    @media screen and (max-width: 400px) {
        input {
            width: 80%;
        }
        textarea {
            width: 80%;
        }
    }
</style>
