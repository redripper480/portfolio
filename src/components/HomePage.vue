<template>
  <div>
    <NavBar :distance="menuoverlap"></NavBar>
    <div
      class="w-screen h-screen bg-yellow-background flex flex-col justify-center items-center z-0"

    >
      <div
        class="md:w-[80%] w-full gap-[50px] flex flex-col justify-between"
      >
        <h1 class="font-martianomono font-semiboldx text-center text-3xl md:text-5xl">
          Hello, Im Zoraz and im
        </h1>
        <div class="text-center cursor">
          <p class="font-martianomono text-center text-3xl inline md:text-5xl">
            a
          </p>

          <p
            class="border-b-2 border-black font-martianomono text-center text-3xl inline md:text-5xl"
          >
            {{ profession }}
          </p>
        </div>
      </div>
      <div class="absolute bottom-0 mb-10">
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="af block text-2xl cursor-pointer"
          v-on:click="scrollintoview"
        />
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="as block text-2xl cursor-pointer"
          v-on:click="scrollintoview"
        />
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="at block text-2xl cursor-pointer"
          v-on:click="scrollintoview"
        />
      </div>

      <div class="absolute right-20 mb-10 -rotate-90">
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="af block text-2xl cursor-pointer"
          v-on:click="scrollintoview"
        />
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="as block text-2xl cursor-pointer"
          v-on:click="scrollintoview"
        />
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          class="at block text-2xl cursor-pointer"
          v-on:click="scrollintoview"
        />
      </div>
    </div>
    <div id="nextpage" class="h-screen w-screen bg-black"></div>
  </div>
</template>
<script lang="ts">
import NavBar from "./NavBar.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
  },
  data() {
    return {
      profession: "Developer",
      professions: ["repoleveD", "tnedutS", "remmargmorP", "tsaisuhtnE YID"],
      menuoverlap: 1920,
    };
  },
  methods: {
    scrollintoview() {
      let elementselect = document.getElementById("nextpage");
      elementselect?.scrollIntoView({ behavior: "smooth" , block:"start"});
    },
    elementsOverlap(el:any) {
      const domRect1 = el.getBoundingClientRect();
      return domRect1['y'];
    },
  },
 
  mounted() {

    document.addEventListener("scroll", () => {
      let el = document.getElementById("nextpage");
      let val = this.elementsOverlap(el);
      console.log(val);
      this.menuoverlap = val;
      
    })
    let size = this.professions.length;
    let currindex = size - 1;
    var vm = this;

    setInterval(() => {
      if (currindex == -1) {
        currindex = size - 1;
      }
      function repopulate() {
        let newword = vm.professions[currindex];
        currindex--;
        let newwordlength = newword.length;
        const repopulation = setInterval(() => {
          if (newwordlength == 0) {
            clearInterval(repopulation);
          }
          vm.profession += newword.charAt(newwordlength - 1);
          newwordlength--;
        }, 80);
      }
      let wordLength = this.profession.length;

      const removefunc = setInterval(() => {
        if (wordLength == 0) {
          clearInterval(removefunc);
          repopulate();
        }
        this.profession = this.profession.substring(
          0,
          this.profession.length - 1
        );
        wordLength--;
      }, 80);
    }, 8000);
  },
};
</script>

<style scoped>
@keyframes cursor-blink {
  0% {
    visibility: hidden;
  }
}

@keyframes farrow {
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;

  }
}
@keyframes sarrow {
  0% {
    opacity: 1;

  }
  50% {
    opacity: 0;

  }
  100% {
    opacity: 1;

  }
}
@keyframes tarrow {
  0% {
    opacity: 1;

  }
  50% {
    opacity: 1;

  }
  80% {
    opacity: 0;

  }
}
.cursor::after {
  content: "";
  background: black;
  width: 5px;
  height: 80%;
  margin-left: 4px;
  display: inline-block;
  animation: cursor-blink 1.5s steps(2) infinite;
}

.af {
  animation: farrow 0.5s ease-in infinite;
}
.as {
  animation: sarrow 0.5s ease-in infinite;
}
.at {
  animation: tarrow 0.5s ease-in infinite;
}
</style>
