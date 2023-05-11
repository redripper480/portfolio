<template>
  <div class="z-10">
    <div class="fixed top-0 mx-[2rem] pt-7">
      <font-awesome-icon
        icon="fa-solid fa-bars"
        class="menu-icon text-3xl cursor-pointer"
        v-on:click="move"
        :class="changeColor ? 'text-white' : ''"
      />
    </div>
    <div
      class="blurscreen z-[15] h-screen opacity-40 fixed w-screen bg-black"
      :class="menuOpened ? 'visible' : 'hidden'"
    ></div>
    <div
      id="menu"
      class="h-screen w-[40%] md:w-[30%] bg-white fixed z-20"
      :class="menuOpened ? '' : '-translate-x-full'"
    >
      <div>
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          class="text-3xl cursor-pointer pt-7 ml-[2rem]"
          v-on:click="move"
        />
      </div>

      <div class="flex h-full">
        <div
          class="h-full w-fit md:flex flex-col justify-center hidden md:visible"
        >
          <h1
            class="-rotate-90 w-[100px] whitespace-nowrap font-martianomono text-[2rem]"
          >
            ZORAZ JAVAID
          </h1>
        </div>
        <div class="grow flex flex-col px-20 justify-around">
          <div>
            <div class="py-5">
            <h1 class="font-martianomono text-2xl link1 pb-1 hover:text-gray-600 inline cursor-pointer select-none relative">My Work</h1>
          </div>
          <div class="py-5">
            <h1 class="font-martianomono text-2xl link2 pb-1 hover:text-gray-600 inline cursor-pointer select-none relative">LinkedIn</h1>
          </div>
          <div class="py-5">
            <h1 class="font-martianomono text-2xl link3 pb-1 hover:text-gray-600 inline cursor-pointer select-none relative">Hire Me!</h1>
          </div>
          <div class="py-5">
            <h1 class="font-martianomono text-2xl link4 pb-1 hover:text-gray-600 inline cursor-pointer select-none relative">Contact Me</h1>
          </div>
            
          </div>
          <div>aasdas</div>
        </div>
      </div>
    </div>
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
      } else {
        return false;
      }
    },
  },
  methods: {
    move() {
      if (this.menuOpened) {
        this.menuOpened = false;
      } else {
        this.menuOpened = true;
      }
    },
  },
};
</script>

<style scoped>
#menu {
  transition-duration: 300ms;
}
.link1::after, .link2::after,.link3::after,.link4::after{
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.link1:hover::after, .link2:hover::after,.link3:hover::after,.link4:hover::after{
  transform: scaleX(1);
  transform-origin: bottom left;
}

</style>
