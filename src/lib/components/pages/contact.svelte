<script>
    import TextField from "./contact/textField.svelte";
    import Pb from "./contact/primaryButton.svelte";
    import WhatsApp from "svelte-material-icons/Whatsapp.svelte";
    import Mail from "svelte-material-icons/EmailOutline.svelte";
    // import Phone from "svelte-material-icons/PhoneOutline.svelte";

    export let data;
    export let name, mail, phone, message = ""
    export let sending = false

    let messages = {
        "error": {
            "missingName": {
                "es": "Te faltó el nombre",
                "en": "Please write your name"
            },
            "missingMailOrPhone": {
                "es": "Te faltó el mail o el teléfono",
                "en": "Please write your mail and phone"
            },
            "invalidMail": {
                "es": "Ups! Parece que el mail no es un mail válido",
                "en": "Ups! It seems that e-mail is not valid"
            },
            "missingMessage": {
                "es": "Te faltó completar el mensaje",
                "en": "Please write the message"
            },
        },
        "success": {
                "es": "En breve nos ponemos en contacto con vos",
                "en": "We will contact you soon"
        }

    }
    
    import lang from '$lib/data/storeLanguage.js'
    lang.subscribe((value) => {})

    // import {getNotifier} from "../Notify/notify";   // rastrear esto console.log()


    export const submit = async () => {

        if(sending) {
            return;
        }

        sending = true;

        let values = {
            name: name.trim(),
            mail: mail.trim(),
            phone: phone.trim(),
            message: message.trim()
        }

        const errors = [];

        if(values.name === ""){
            errors.push("Te faltó completar el nombre")
        }

        if(values.mail === "" && values.phone === "") {
            errors.push("Te faltó completar el mail o el teléfono");
        }

        if(values.mail !== "" && !values.mail.includes("@")) {
            errors.push("Ups! parece que el mail no es un mail válido")
        }

        if(values.message === "") {
            errors.push("Te faltó completar el mensaje")
        }

        if(errors.length) {
            getNotifier().add({
                variant: "error",
                html: errors.join("<br/>"),
                duration: 6000
            })
        } else {
            await new Promise(resolve => setTimeout(resolve, 500));
            getNotifier().add({
                variant: "success",
                html: "El formulario se envió con éxito.<br/>En breve nos ponemos en contacto con vos",
                duration: 5000
            })

            name =
            mail =
            phone =
            message = "";
        }

        sending = false;
    }

</script>


<style>
    #contact-page {
        position: relative;
        width: 100%;
        height: 100vh;
        padding-top: 7rem;
    }
    
    #contact-data {
        margin: 0 auto 1rem;
        /* text-align: center; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
    }

    h2 {
        font-size: 2.5rem;
        text-transform: capitalize;
        margin-block: 0.3rem;
    }

    .contact-item {
        width: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 0.3rem 0.7rem;
    }
    
    .contact-item:hover {
        background-color: hsla(var(--dark-hsl), 0.5);
        font-weight: bold;
    }

    #contact-form {
        width: 800px;
        max-width: 80%;
        border-top: hsla(var(--background-color),1) 4px solid;
        border-radius: 3px;
        margin: 0 auto;
        padding: 2em;
        --contact-form-background: #444;
        background: var(--contact-form-background);
        color: #333;
    }

    .field + .field {
        margin-top: 2em;
    }

    .send {
        display: flex;
        flex-direction: row-reverse;
        margin: 2em 0 0 2em;
    }
</style>

<div id="contact-page">

    <div id="contact-data">
        <h2 class="page-title">Contactanos</h2>
        <a class="contact-item" href="mailto:{data.mail}"><Mail />{data.mail}</a>
        <!-- <a class="na" href="tel:{data.phone}"><Phone />+{data.phone}</a> -->
        <a class="contact-item" href="https://wa.me/{data.phone}?text={encodeURIComponent(data.whatsappMessage[lang])}"><WhatsApp />+{data.phone}</a>
    </div>  

    <form id="contact-form" on:submit|preventDefault={submit} method="post" action="/contacto">
        <div class="field">
            <TextField label="Nombre" bind:value={name} name="name"/>
        </div>
        <div class="field">
            <TextField label="Mail" name="mail" bind:value={mail} type="email"/>
        </div>
        <div class="field">
            <TextField label="Teléfono" name="phone" bind:value={phone} type="phone"/>
        </div>
        <div class="field">
            <TextField label="Mensaje" name="message" bind:value={message} multiline minrows={4}/>
        </div>

        <div class="send">
            <Pb>Enviar</Pb>
        </div>
    </form>

</div>