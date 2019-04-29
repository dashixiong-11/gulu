<template>
  <button class='g-button' :class='{[`icon-${iconPosition}`]:true}'>
    <g-icon v-if='icon':name='icon'></g-icon>
    <g-icon class='loading' name='jiazaizhong'></g-icon>
      <div class="content">
        <slot></slot>
      </div>
    </button>
</template>

<script>
  export default {
    props:{
      icon:{},
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
          return (value == 'left' || value == 'right')
        }
      }
    }

  }

</script>

<style lang='scss'>
@keyframes spin {
  0%{ transform:rotate(0deg); }
  100%{ transform:rotate(360deg); }
}
.g-button{
  display:inline-flex;
  justify-content:center;
  align-items:center;
  height:var(--button-height);
  padding:0 1em;
  font:inherit;
  border-radius:var(--border-radius);
  border:1px solid var(--border-color);
  font-size:var(--font-size);
  height:var(--button-height);
  vertical-align:middle;
    > .icon{
      order:1;
      margin-right:.1em;
    }
    > .content{
      order:2;
    }
  &:hover{
    border-color:var(--border-color-hover);
  }
  &:active{
    background-color:var(--button-active-bg);
  }
  &:focus{
    outline:none;
  }
  &.icon-right{
    > .icon{
      order:2;
      margin-left:.1em;
      margin-right:0;
    }
    > .content{
      order:1;
    }
  }
  .loading{
    animation: spin 1s infinite linear;
  }
        }

</style>
