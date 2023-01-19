<script>
    import TitleScreen from "./titleScreen.svelte"
    import Title from "./title.svelte"
    import Content from "./content.svelte"
    import Text from "./text.svelte"
    export let data
</script>

<div id="text-page">
    <TitleScreen data={data} />
    <Content>
        <Title data={data} />
        <Text data={data} />
    </Content>
</div>