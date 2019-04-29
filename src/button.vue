<template>
  <div>
    <button class='g-button'>
<svg class="icon" aria-hidden="true">
    <use xlink:href="#i-setting"></use>
</svg>      
      <slot></slot>
    </button>
  </div>

</template>

<script>
  export default {

  }

</script>

<style lang='scss'>
.g-button{
  height:var(--button-height);
  padding:0 1em;
  font:inherit;
  border-radius:var(--border-radius);
  border:1px solid var(--border-color);
  font-size:var(--font-size);
  height:var(--button-height);
}
.g-button:hover{
  border-color:var(--border-color-hover);
}
.g-button:active{
  background-color:var(--button-active-bg);
}
.g-button:focus{
  outline:none;
}

</style>
