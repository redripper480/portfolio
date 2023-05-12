<template>


<div class="absolute top-0 mt-10 -rotate-180">
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="af block text-2xl cursor-pointer"
          :class="color"
          v-on:click="$emit('click')"
        />
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="as block text-2xl cursor-pointer"
          :class="color"
          v-on:click="$emit('click')"
        />
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="at block text-2xl cursor-pointer"
          :class="color"
          v-on:click="$emit('click')"
        />
      </div>
</template>

<script lang="ts">
export default{
    name:"NavigatorUp",
    props:{
      color: String
    },

}
</script>

<style scoped>

</style>