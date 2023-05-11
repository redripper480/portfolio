<template>
  <div class="fixed top-0 md:mx-[5vw] md:pt-7">
    <font-awesome-icon
      icon="fa-solid fa-bars"
      class="menu-icon text-3xl hover:text-5xl cursor-pointer"
      v-on:click="move"
      :class="changeColor?'text-white':''"
    />
  </div>
  <div
    id="menu"
    class="absolute h-[100vh] w-[30%] bg-white flex flex-col gap-10 close"
  >
    <div class="flex flex-col justify-center my-3 mx-4 items-end">
      <font-awesome-icon
        icon="fa-solid fa-arrow-left"
        class="text-3xl cursor-pointer"
        v-on:click="move"
      />
    </div>
    <hr class="border-b-2 border-black mx-2" />
    <div class="text-center">
      <h1
        class="my-3 text-5xl font-robotomono border-b-2 border-gray-400 inline"
      >
        Hire Me!
      </h1>
    </div>
    <hr class="border-b-2 border-black mx-2" />

    <div class="text-center">
      <h1
        class="my-3 text-5xl font-robotomono border-b-2 border-gray-400 inline"
      >
        Hire Me!
      </h1>
    </div>
    <hr class="border-b-2 border-black mx-2" />

    <div class="text-center">
      <h1
        class="my-3 text-5xl font-robotomono border-b-2 border-gray-400 inline"
      >
        See My Work
      </h1>
    </div>
    <hr class="border-b-2 border-black mx-2" />

    <div class="text-center">
      <h1
        class="my-3 text-5xl font-robotomono border-b-2 border-gray-400 inline"
      >
        Contact Me
      </h1>
    </div>
    <hr class="border-b-2 border-black mx-2" />
  </div>
</template>

<script lang="ts">
export default {
  name: "NavBar",
  data() {
    return {
      menuOpened: false,
    };
  },
  props: {
    distance: {
      type: Number,
      required: true,
    },
  },
  computed: {
    changeColor() {
      if (this.distance < 55) {
        return true;
      }
      else{
        return false;
      }
    },
  },
  methods: {
    move() {
      const menuBar = document.getElementById("menu");
      if (this.menuOpened) {
        menuBar?.classList.add("close");
        this.menuOpened = false;
      } else {
        menuBar?.classList.remove("close");
        this.menuOpened = true;
      }
    },
  },
};
</script>

<style scoped>
.menu-icon {
  transition-duration: 100ms;
}
#menu {
  transition-duration: 200ms;
}
.close {
  transform: translateX(-100%);
}
.open {
  transform: translateX(0%);
}
</style>
