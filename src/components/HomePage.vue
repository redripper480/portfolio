<template>
  <div>
    <NavBar :currentTab="current"></NavBar>
    <!-- <MiniMap :xtranslate="xtranslate" :ytranslate="ytranslate" ></MiniMap>  -->

    <div
      id="Info"
      class="h-screen w-screen flex flex-col justify-center items-center bg-black"
    >

        <Landing3d></Landing3d>
      
    </div>

    <div
      class="translateWindow worktab h-screen w-screen bg-black absolute flex flex-col justify-around items-center"
      :class="current === 'worktab' ? '' : 'translate-x-full'"
    >
      <div class="flex flex-wrap justify-center w-[80%] lg:w-[39%]">
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white hover:w-[7rem] hover:h-[7rem] md:hover:w-[13rem] md:hover:h-[13rem]"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white hover:w-[7rem] hover:h-[7rem] md:hover:w-[13rem] md:hover:h-[13rem]"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white hover:w-[7rem] hover:h-[7rem] md:hover:w-[13rem] md:hover:h-[13rem]"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white hover:w-[7rem] hover:h-[7rem] md:hover:w-[13rem] md:hover:h-[13rem]"
        ></div>

        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white hover:w-[7rem] hover:h-[7rem] md:hover:w-[13rem] md:hover:h-[13rem]"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white hover:w-[7rem] hover:h-[7rem] md:hover:w-[13rem] md:hover:h-[13rem]"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white hover:w-[7rem] hover:h-[7rem] md:hover:w-[13rem] md:hover:h-[13rem]"
        ></div>
        <div
          class="md:h-[12rem] h-[6.5rem] md:w-[12rem] w-[6.5rem] grow border border-light-black box hover:bg-white hover:w-[7rem] hover:h-[7rem] md:hover:w-[13rem] md:hover:h-[13rem]"
        ></div>
      </div>

      <NavigatorDown @click="moveDown" :color="'text-white'"></NavigatorDown>

      <NavigatorLeft @click="moveLeft" :color="'text-white'"></NavigatorLeft>
    </div>

    <div
      id="Home"
      class="translateWindow relative w-screen h-screen bg-yellow-background flex flex-col justify-center items-center z-0"
      :class="current === 'worktab' ? '-translate-x-full' : ''"
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
      <NavigatorUp @click="moveUp" :color="'text-black'"></NavigatorUp>
      <NavigatorDown @click="moveDown" :color="'text-black'"></NavigatorDown>
      <NavigatorRight @click="moveRight" :color="'text-black'"></NavigatorRight>
      <NavigatorLeft @click="moveLeft" :color="'text-black'"></NavigatorLeft>
    </div>

    <div
     class="translateWindow bg-pink-500 w-screen  h-screen absolute  contactUs "
     :class="current === 'contactUs' ? '' : '-translate-x-full'"
     >
      <div class="w-[50%] pl-10 h-full flex flex-col justify-center">
        <h1 class="font-cornerstone text-[5rem] text-white mb-40">
          READY TO MAKE EM SAY WOW?
        </h1>
      </div>
      <div class="w-[50%] h-full">

      </div>
    </div>

    <div
      id="aboutpage"
      class="h-screen translateWindow w-screen relative bg-[#C77DFF] flex flex-col justify-center items-center"
     :class="current === 'contactUs' ? 'translate-x-full' : ''"

    >
      <div class="flex w-full h-full justify-center items-center">
        <div
          class="w-[90%] h-[87%] p-2 mt-10 relative before:w-full before:bg-[#5A189A] before:blur-xl before:h-full before:-inset-0 before:absolute before:-z-5 before:rounded-xl before:top-0"
        >
          <div
            class="w-full h-full rounded-2xl bg-black flex justify-between items-center relative"
          >
            <div
              class="w-[100%] h-[93.5%] mx-7 flex flex-col relative justify-between items-center"
            >
              <div class="w-full flex justify-center items-center">
                <div class="w-[50%] justify-center items-center">
                  <h1
                    class="-translate-y-[90%] underline font-bold font-cornerstone text-white text-6xl"
                  >
                    OUR SERVICES
                  </h1>
                </div>
                <div class="w-[50%] justify-center items-center"></div>
              </div>
              <div class="w-full flex justify-between items-center grow pt-5">
                <div
                  class="w-[50%] h-full flex flex-col justify-between items-start"
                >
                  <div
                    class="w-[95%] hide service-cards hidden-element rounded-lg font-cornerstone hover:text-3xl text-3xl text-white flex flex-col justify-center items-start hover:bg-[#c766ff] h-[130px] bg-black outline outline-[4px] outline-[#212121] hover:outline hover:outline-3 hover:outline-[#5A189A]"
                    @mouseover="
                      () => {
                        hovering('first');
                        typeWriter('first');
                      }
                    "
                    :onMouseleave="notHovering"
                  >
                    <div class="grow flex flex-col justify-center items-start">
                      <h1 class="service-text ml-5">This is Dummy Text 1</h1>
                    </div>
                    <div class="h-[50%]" v-if="current_hover === 'first'">
                      <font-awesome-icon
                        class="ml-6 text-5xl"
                        :icon="['fas', 'arrow-right-long']"
                        beat-fade
                      />
                    </div>
                  </div>
                  <div
                    class="w-[95%] hide service-cards hidden-element rounded-lg font-cornerstone hover:text-3xl text-3xl text-white flex flex-col justify-center items-start hover:bg-[#c766ff] h-[130px] bg-black outline outline-[4px] outline-[#212121] hover:outline hover:outline-3 hover:outline-[#5A189A]"
                    @mouseover="
                      () => {
                        hovering('second');
                        typeWriter('second');
                      }
                    "
                    :onMouseleave="notHovering"
                  >
                    <div class="grow flex flex-col justify-center items-start">
                      <h1 class="service-text ml-5">This is Dummy Text 2</h1>
                    </div>
                    <div class="h-[50%]" v-if="current_hover === 'second'">
                      <font-awesome-icon
                        class="ml-6 text-5xl"
                        :icon="['fas', 'arrow-right-long']"
                        beat-fade
                      />
                    </div>
                  </div>
                  <div
                    class="w-[95%] hide service-cards hidden-element rounded-lg font-cornerstone hover:text-3xl text-3xl text-white flex flex-col justify-center items-start hover:bg-[#c766ff] h-[130px] bg-black outline outline-[4px] outline-[#212121] hover:outline hover:outline-3 hover:outline-[#5A189A]"
                  >
                    <div class="grow flex flex-col justify-center items-start">
                      <h1 class="service-text ml-5">This is Dummy Text 3</h1>
                    </div>
                    <div class="h-[50%]" v-if="current_hover === 'third'">
                      <font-awesome-icon
                        class="ml-6 text-5xl"
                        :icon="['fas', 'arrow-right-long']"
                        beat-fade
                      />
                    </div>
                  </div>
                  <div
                    class="w-[95%] hide service-cards hidden-element rounded-lg font-cornerstone hover:text-3xl text-3xl text-white flex flex-col justify-center items-start hover:bg-[#c766ff] h-[130px] bg-black outline outline-[4px] outline-[#212121] hover:outline hover:outline-3 hover:outline-[#5A189A]"
                  >
                    <div class="grow flex flex-col justify-center items-start">
                      <h1 class="service-text ml-5">This is Dummy Text 4</h1>
                    </div>
                    <div class="h-[50%]" v-if="current_hover === 'fourth'">
                      <font-awesome-icon
                        class="ml-6 text-5xl"
                        :icon="['fas', 'arrow-right-long']"
                        beat-fade
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="w-[50%] z-20 h-full transition-all relative before:w-full before:-z-[1] before:absolute before:-inset-0 before:h-full before:blur-lg before:rounded"
                >
                  <div
                    class="desc-box w-full z-30 h-full hidden-element hide rounded-xl flex p-5 justify-center items-center bg-gradient-to-b from-[#212121] via-[#181818] to-black"
                  >
                    <div
                      id="desc"
                      class="w-full text-[32px] font-cornerstone font-bold text-white h-full"
                      v-html="desc_inner"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigatorUp @click="moveUp" :color="'text-white'"></NavigatorUp>
    </div>
    

  </div>
</template>
<script lang="ts">
import NavBar from "./NavBar.vue";
import NavigatorDown from "./utility/NavigatorDown.vue";
import NavigatorUp from "./utility/NavigatorUp.vue";
import NavigatorLeft from "./utility/NavigatorLeft.vue";
import NavigatorRight from "./utility/NavigatorRight.vue";
import MiniMap from "./utility/MiniMap.vue";
import Landing3d from "./Landing3d.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
    NavigatorDown,
    NavigatorUp,
    NavigatorLeft,
    NavigatorRight,
    MiniMap,
    Landing3d
  },
  data() {
    return {
      profession: "Developer",
      professions: ["repoleveD", "tnedutS", "remmargmorP", "tsaisuhtnE YID"],
      current: "Info",
      xtranslate: 0,
      ytranslate: 0,
      presscount: 0,
      desc_inner: "",
      i: 0,
      hover_state: false,
      current_hover: "",
      first_desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat luctus ex, eget lacinia augue. Suspendisse porttitor lacus sit amet enim faucibus maximus. Curabitur consequat neque leo, varius sodales diam dapibus nec. Morbi vitae facilisis magna. Duis vitae",
      sec_desc: "Ipsum De uttay Lorem thee gay ustaad",
      intervals: [] as any,
    };
  },
  computed: {
    servide_card_hover() {
      if (this.current_hover === "first") {
        return "before:bg-purple-700";
      } else if (this.current_hover === "second") {
        return "before:bg-red-700";
      } else if (this.current_hover === "third") {
        return "before:bg-yellow-700";
      } else if (this.current_hover === "fourth") {
        return "before:bg-orange-700";
      }
    },
  },
  methods: {
    hovering(el: string) {
      this.current_hover = el;
      console.log(el);
      this.hover_state = true;
    },

    notHovering() {
      this.current_hover = "";
      this.hover_state = false;
    },
    typeWriter(el: string) {
      this.desc_inner = "";
      let desc: string = "";
      if (el === "first") {
        desc = this.first_desc;
      } else if (el === "second") {
        desc = this.sec_desc;
      }
      this.i = 0;
      if (this.intervals.length != 0) {
        clearInterval(this.intervals[0]);
        this.intervals.pop();
      }
      let interval = setInterval(() => {
        this.desc_inner += desc.charAt(this.i);
        this.i++;
      }, 35);
      this.intervals.push(interval);
      this.i = 0;
    },
    scrollintoview(e: string) {
      let elementselect = document.getElementById(e);
      elementselect?.scrollIntoView({ behavior: "smooth" });
    },
    moveDown() {
      if (this.current === "Home") {
        this.presscount += 1;
        console.log("Press Count: " + this.presscount);
        this.current = "aboutpage";
        this.scrollintoview("aboutpage");
        this.ytranslate += 100;
      } else if (this.current === "Info") {
        this.presscount += 1;
        console.log("Press Count: " + this.presscount);
        this.current = "Home";
        this.scrollintoview("Home");
        this.ytranslate += 100;
      }
    },
    moveUp() {
      if (this.current === "aboutpage") {
        this.presscount += 1;
        console.log("Press Count: " + this.presscount);
        this.scrollintoview("Home");
        this.current = "Home";
        this.ytranslate -= 100;
      } else if (this.current === "Home") {
        this.presscount += 1;
        console.log("Press Count: " + this.presscount);
        this.current = "Info";
        this.scrollintoview("Info");
        this.ytranslate -= 100;
      }
    },
    moveRight() {
      if (this.current === "Home") {
        this.presscount += 1;
        console.log("Press Count: " + this.presscount);
        this.current = "worktab";
        this.xtranslate += 100;
      }
      else if (this.current === "contactUs") {
        this.current = "aboutpage";
      }
    },
    moveLeft() {
      if (this.current === "worktab") {
        this.presscount += 1;
        console.log("Press Count: " + this.presscount);
        this.current = "Home";
        this.xtranslate -= 100;
      }
      else if(this.current === 'aboutpage'){
        this.current = "contactUs";
      }
    },
  },

  mounted() {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hide");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("hide");
        }
      });
    });

    let HiddenElements = document.querySelectorAll(".hidden-element");
    HiddenElements.forEach((element) => {
      observer.observe(element);
      console.log(element);
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

    document.addEventListener("keypress", (e) => {
      if (e.which === 119) {
        this.moveUp();
      } else if (e.which === 100) {
        this.moveRight();
      } else if (e.which === 115) {
        this.moveDown();
      } else if (e.which === 97) {
        this.moveLeft();
      }
    });
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

.translateWindow {
  transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.box {
  transition-duration: 500ms;
}

.service-cards {
  transition-duration: 1s;
}
.hide {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(-100px);
}
.service-cards:hover {
  transition-duration: 0.5s;

  height: 180px;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

.desc-box {
  transition-duration: 1s;
}
.service-text {
  transition-duration: 0.7s;
}
</style>
