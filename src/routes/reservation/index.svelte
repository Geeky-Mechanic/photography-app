<script context="module">
    export async function load({ fetch }) {
        const res = await fetch(`/api/reservation`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const infoRes = await fetch(`/api/content/reservations`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const infoData = await infoRes.json();

        const data = await res.json();

        if (res.ok) {
            return {
                props: {
                    data,
                    infoData,
                },
            };
        }
    }
</script>

<script>
    import { browser } from "$app/env";
    import FullCalendar from "svelte-fullcalendar/src/FullCalendar.svelte";
    import daygridPlugin from "@fullcalendar/daygrid";
    import interactionPlugin from "@fullcalendar/interaction";
    import timegridPlugin from "@fullcalendar/timegrid";

    export let data;
    export let infoData;

    const availableDates = [];

    data.forEach((item) => {
        const dayDate = new Date(item.day);
        item.hours.forEach((hour) => {
            availableDates.push({
                title: "Disponible",
                start: dayDate.setHours(parseInt(hour), 0, 0, 0),
                end: dayDate.setHours(parseInt(hour) + 1, 0, 0, 0),
                url: `/reservation/${dayDate.setHours(
                    parseInt(hour),
                    0,
                    0,
                    0
                )}`,
                backgroundColor: "#f0930b",
                classNames: ["event-url"],
            });
        });
    });

    let options = {
        initialView: "dayGridMonth",
        plugins: [timegridPlugin, daygridPlugin, interactionPlugin],
        headerToolbar: {
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
            height: "70%",
        },
        buttonText: {
            today: "Aujourd'hui",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Liste",
        },
        locale: "fr",
        events: availableDates,
    };

    if (browser) {
        const screenWidth = document.body.offsetWidth;
        if (screenWidth <= 600) {
            options = {
                ...options,
                initialView: "timeGridWeek",
                headerToolbar: {
                    left: "prev",
                    center: "title",
                    right: "next",
                    height: "70%",
                },
            };
        }
    }
</script>

<main>
    <h2 class="contact-title">{infoData[0].title}</h2>
    <div class="contact-content">
        <p>{infoData[0].content}</p>
    </div>
    <FullCalendar {options} />
</main>

<style>
    main {
        padding: 0 2rem;
    }
</style>
