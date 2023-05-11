<template>
  <div>
    <NavBar
      :distance="menuoverlap"
      :workTab="showWork"
      :currentTab="current"
    ></NavBar>
    <div
      class="worktab h-screen w-screen bg-black absolute flex flex-col justify-around items-center"
      :class="showWork ? '' : 'translate-x-full'"
    >
      <div
        class="flex flex-wrap justify-center w-[80%] lg:w-[40%] border border-light-black rounded"
      >
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white"
        ></div>

        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white"
        ></div>
      </div>

      <NavigatorDown></NavigatorDown>
      <NavigatorLeft></NavigatorLeft>
      
    </div>
    
    <div
      id="topPage"
      class="homescreen w-screen h-screen bg-yellow-background flex flex-col justify-center items-center z-0"
      :class="showWork ? '-translate-x-full' : ''"
    >
      <div class="md:w-[80%] w-full gap-[50px] flex flex-col justify-between">
        <h1
          class="font-martianomono font-semiboldx text-center text-3xl md:text-5xl"
        >
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
      <NavigatorUp></NavigatorUp>
      <NavigatorDown></NavigatorDown>
      <NavigatorRight></NavigatorRight>
      <NavigatorLeft></NavigatorLeft>
    </div>

    <div
      id="nextpage"
      class="h-screen w-screen bg-black flex justify-center items-center"
    >
      <h1 class="font-martianomono text-5xl text-white">
        'Work . In . Progress'
      </h1>
    </div>
  </div>
</template>
<script lang="ts">
import NavBar from "./NavBar.vue";
import NavigatorDown from "./utility/NavigatorDown.vue";
import NavigatorUp from "./utility/NavigatorUp.vue";
import NavigatorLeft from "./utility/NavigatorLeft.vue";
import NavigatorRight from "./utility/NavigatorRight.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
    NavigatorDown,
    NavigatorUp,
    NavigatorLeft,
    NavigatorRight,
  },
  data() {
    return {
      profession: "Developer",
      professions: ["repoleveD", "tnedutS", "remmargmorP", "tsaisuhtnE YID"],
      menuoverlap: 1920,
      showWork: false,
      current: "Home",
      direction: "",
    };
  },
  methods: {
    scrollintoview(e: string) {
      let elementselect = document.getElementById(e);
      elementselect?.scrollIntoView({ behavior: "smooth" });
    },
    elementsOverlap(el: any) {
      const domRect1 = el.getBoundingClientRect();
      return domRect1["y"];
    },
    scrolltotop() {
      let elementselect = document.getElementById("topPage");
      elementselect?.scrollIntoView({ behavior: "smooth" });
    },
    changePage() {
      if (this.current === "Home") {
        if (this.direction === "right") {
        } else if (this.direction === "down") {
          this.scrollintoview("nextpage");
        }
      }
    },
  },

  mounted() {
    document.addEventListener("scroll", () => {
      let el = document.getElementById("nextpage");
      let val = this.elementsOverlap(el);
      console.log(val);
      this.menuoverlap = val;
    });
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


.cursor::after {
  content: "";
  background: black;
  width: 5px;
  height: 80%;
  margin-left: 4px;
  display: inline-block;
  animation: cursor-blink 1.5s steps(2) infinite;
}



.worktab,
.homescreen {
  transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.box {
  transition-duration: 500ms;
}
</style>
