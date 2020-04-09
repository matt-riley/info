<script>
  import { draw, fade } from "svelte/transition";
  import { onMount } from 'svelte'

  const bottomBorder = "M8.839,371.339l621.5,0.92";
  const topBorder = `M8.839,8.839l621.5,0.92`;
  const text = `M349.06,188.589l0,-92.562l-108.942,234.522l-20,0l-110,-236.8l0,236.8l-20,0l0,-280l20,0l120,258.4l120.801,-258.4l19.185,0l0,20.663l0.014,0l0,117.377l-21.058,0Zm21.058,11.955l0,0.005l93.742,0c36,0
      65.2,-29.2 65.2,-65.2c0,-35.2 -29.2,-64.8
      -65.2,-64.8l-82.07,0l0,-20l82.07,0c47.2,0 85.2,38 85.2,84.8c0,34.8
      -20.4,64 -49.2,77.2l48,118l-21.6,0l-45.6,-111.6c-4.4,1.2 -10,1.6
      -16.8,1.6l-93.742,0l0,110l-21.058,0l0,-130.005l21.058,0Z`;
  export let visible = false;

  onMount(() => {
    visible = true
  })
</script>

<style>
  svg {
    width: 90%;
  }
  
  #borders {
    stroke: #fff;
    stroke-width:12.5px;
  }

  #text {
    fill: #fff;
  }
</style>

<svg viewBox="0 0 640 382" xmlns="http://www.w3.org/2000/svg">
  <g id="text">
    {#if visible}
    <path
      in:fade="{{duration: 3000 }}"
      out:fade
      d="{text}"
      />
    {/if}
  </g>
  <g id="borders">
    {#if visible}
    <path
      in:draw={{ duration: 3000 }}
      d={topBorder} 
      out:fade />
    <path
      in:draw={{ duration: 3000 }}
      d={bottomBorder} />
    {/if}
  </g>
</svg>
