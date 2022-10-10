<script lang="ts">
  import { getPosition } from "./state";
  const position = getPosition();

  $: url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDrDlYJlqRF7v9mL5f833RFkCFhBb0VJ7M&q=${$position || "Gløshaugen"}`
</script>

<div class="w-full h-full">
  <iframe
    width="100%"
    height="100%"
    style="border:0"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src={url}
    >
  </iframe>
</div>

<style>
</style>
