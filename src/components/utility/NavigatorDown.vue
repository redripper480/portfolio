<template>

<div class="absolute bottom-0 mb-10 self-center">
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="af block text-black text-1xl cursor-pointer"
          v-on:click="$emit('click')"
          :class="color"
        />
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="as block text-black text-1xl cursor-pointer"
          v-on:click="$emit('click')"
          :class="color"
        />
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="at block text-black text-1xl cursor-pointer"
          v-on:click="$emit('click')"
          :class="color"
        />
      </div>
</template>

<script lang="ts">
export default{
    name:"NavigatorDown",
    props:{
      color: String,
    },
}
</script>

<style scoped>

</style>