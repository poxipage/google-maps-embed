<script lang="ts">
    import { getPosition } from "./state";
    const position = getPosition();
</script>


<div>
    <h2>
        Enter name of place you want to pin
    </h2>
    <input class="input w-full" bind:value={$position} type="text">
</div>