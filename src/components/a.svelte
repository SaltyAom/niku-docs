<script lang="ts">
    let counter = 0

    const increment = () => {
        counter++
    }
</script>

<button on:click={increment}>{counter}</button>