<template>

    <div class="fixed bottom-10 right-10 collapse lg:visible h-[13rem] w-[13rem] bg-white z-30 opacity-70 flex flex-col justify-start items-center p-7" >
        <div  class="absolute position w-[4rem] h-[3rem] bg-underline-blue z-10 "
        :class="posi"
        ></div>

        <div class="w-[4rem] h-[3rem] bg-yellow-background z-0">

        </div>
        <div class="absolute translate-x-full w-[4rem] h-[3rem] bg-black z-0">

</div>
        <div class="w-[4rem] h-[3rem] bg-black z-0">

</div>
    </div>

</template>
    
<script lang="ts">
export default {
    name: "MiniMap",
    props: {
        ytranslate:Number,
        xtranslate:Number,

    },
    computed:{
        posi(){
            return ("translate-y-["+this.ytranslate+"%]" + " translate-x-["+this.xtranslate+"%]") ;
        }
    }
}
</script>
    
<style scoped>
.position{
    transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>