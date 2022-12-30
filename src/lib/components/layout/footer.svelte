<script>
    import Mail from "svelte-material-icons/EmailOutline.svelte";
    import WhatsApp from "svelte-material-icons/Whatsapp.svelte";
    // import Phone from "svelte-material-icons/PhoneOutline.svelte";

    export let contactData
    export let lang = ["es"]

    let width = {}

    $: width.whatsappDiv = width.whatsapp+34

</script>

<style>
    * {
        transition: all 200ms ease;

    }

    .footer {
        height: var(--height-footer);
        padding: 0 0.8rem;
        font-size: 1.15em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        background-color: rgba(20,20,20,1);
    }

    #footer-line {
        height: 1px;
        width: 100%;
        background: linear-gradient(90deg, hsla(52, 50%, 13%, 0) 0%,
                                           hsla(52, 50%, 38%, 0.43) 25%,
                                           hsla(52, 50%, 38%, 0.43  ) 75%,
                                           hsla(52, 50%, 13%, 0) 100%);
    }

    .contact-data {
        height: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    .contact {
        max-width: fit-content;
        overflow: hidden;
        white-space: nowrap;
    }

    .contact-item-full-height {
        height: 100%;
        display: flex;
        align-items: center;
        padding-inline: 0.5rem;
    }

    .contact-item {
        max-width: 2.5rem;
        padding: 0.2rem 0.5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: left;
        align-items: center;
        gap: 0.5em;
        /* padding: 0.5em 0; */
        /* padding: 0.5rem; */
        border-radius: 0.25em;
    }

    .contact-item * {
        display: flex;
        align-items: center;
    }

    .contact-item > a {
        overflow: hidden;
        transform: scaleX(0.7);
        /* transition: transform 0ms; */
    }
    
    .contact-item-full-height:hover * {
        transition: all 500ms ease;
    }

    .contact-item-full-height:hover .contact-item {
        background-color: hsla(var(--dark-hsl), 0.5);
        max-width: 30rem;
    }
    
    .contact-item-full-height:hover .contact-item > a {
        /* max-width: 10rem; */
        padding-left: 0.5em;
        transform: scaleX(1);
    }

</style>

<div id="footer-line"></div>
<footer class="footer" > <!-- class:wave-light={waveLight}> -->

    <a class="contact" href="/contact">La Manija Tango Club</a>

    <div class="contact-data">

        <div class="contact-item-full-height">
            <div class="contact-item whatsapp">
                <span class="contact-logo"><WhatsApp/></span>
                <a href="https://wa.me/{contactData.phone}?text={encodeURIComponent(contactData.whatsappMessage[lang])}" data="{contactData.phone}">{contactData.phone}</a>
            </div>
        </div>

        <div class="contact-item-full-height">
            <div class="contact-item mail">
                <span class="contact-logo"><Mail/></span>
                <a href="mailto:{contactData.mail}">{contactData.mail}</a>
            </div>
        </div>

        <!--<div class="contact-item-full-height">
            <div class="contact-item phone">
                <span class="contact-logo"><Phone/></span>
                <a href="tel:{contactData.phone}">{contactData.phone}</a>
            </div>
        </div>-->

    </div>

</footer>
