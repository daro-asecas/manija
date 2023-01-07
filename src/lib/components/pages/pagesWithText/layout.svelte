<script>
    import Title from "./title.svelte"
    import Content from "./content.svelte"
    import Text from "./text.svelte"
    export let data
</script>

<div id="text-page">
    <Title data={data} />
    <Content>
        <Text data={data} />
    </Content>
</div>