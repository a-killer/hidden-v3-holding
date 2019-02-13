<template>
  <div id="fullpage-container">
  
  <div id="info" class="box flex">
    <div class="item-content">
      <div class="item">
        <h1>Hidden is a next generation creative agency, producing engaging experiences, supporting grass-root talent, building bridges across disciplines with an ear-to-the-ground mentality and attitide</h1>
        <h1>We elevate brands, assiting them in staying cultrally relevant and connecting them with the consumers of tomorrow</h1>
        <h1>Connectes, agile, ideas lead and results driven, we are re-defining visual culture and creative strategy from the ground up.</h1>
        <h1>Formed from a collective of thinkers and doers with over fifteen years of creative knoweloedge providing creative, strategy, art direction, design, digital and production services for culture, fashion and lifestyle industires.</h1>
      </div>
    </div>
  </div>

    <div id="fullpage">
      <div class="page-slide">
        <component v-bind:is="randomComponent" v-bind="page"></component>
      </div>
    </div>
  </div>
</template>

<script>
import fimage from '../components/fimage.vue'
import fvideo from '../components/fvideo.vue'
import typeface from '../components/typeface.vue'
export default {
  name: 'Home',
  components: {
    fimage,
    fvideo,
    typeface,
  },
  data() {
    /*
    The first array is the pages, the inner array is the random elements in that page

    Image type template: {id:1, type:"image", src:"/static/img/3.jpg"},
    Video type template: {id:4, type:"video", src:"/static/img/Swans - 1287.mp4", poster:"/static/img/swan-poster.png"},
    Custom Component type template { id: 5, type:"component", component: Particle} //where name is the </element> tag
    */
    return {
      pages: [
        {id:1, type:"video", src:"/static/video/HoldingPage_1.mp4", poster:"/static/img/poster.png"},
        {id:2, type:"video", src:"/static/video/HoldingPage_2.mp4", poster:"/static/img/poster.png"},
        {id:3, type:"video", src:"/static/video/HoldingPage_3.mp4", poster:"/static/img/poster.png"},
        {id:4, type:"video", src:"/static/video/HoldingPage_4.mp4", poster:"/static/img/poster.png"},
        {id:5, type:"video", src:"/static/video/HoldingPage_5.mp4", poster:"/static/img/poster.png"},
        {id:6, type:"video", src:"/static/video/HoldingPage_6.mp4", poster:"/static/img/poster.png"},
        {id:7, type:"video", src:"/static/video/HoldingPage_7.mp4", poster:"/static/img/poster.png"},
        {id:8, type:"video", src:"/static/video/HoldingPage_8.mp4", poster:"/static/img/poster.png"},
        {id:9, type:"video", src:"/static/video/HoldingPage_9.mp4", poster:"/static/img/poster.png"},
        {id:10, type:"video", src:"/static/video/HoldingPage_10.mp4", poster:"/static/img/poster.png"},
        {id:11, type:"video", src:"/static/video/HoldingPage_11.mp4", poster:"/static/img/poster.png"},
        {id:12, type:"video", src:"/static/video/HoldingPage_12.mp4", poster:"/static/img/poster.png"},
        {id:13, type:"video", src:"/static/video/HoldingPage_13.mp4", poster:"/static/img/poster.png"},
        {id:14, type:"video", src:"/static/video/HoldingPage_14.mp4", poster:"/static/img/poster.png"},
        {id:15, type:"video", src:"/static/video/HoldingPage_15.mp4", poster:"/static/img/poster.png"},
        {id:16, type:"video", src:"/static/video/HoldingPage_16.mp4", poster:"/static/img/poster.png"},
        {id:17, type:"video", src:"/static/video/HoldingPage_17.mp4", poster:"/static/img/poster.png"},
        {id:18, type:"video", src:"/static/video/HoldingPage_18.mp4", poster:"/static/img/poster.png"},
        {id:19, type:"video", src:"/static/video/HoldingPage_19.mp4", poster:"/static/img/poster.png"},
        {id:20, type:"video", src:"/static/video/HoldingPage_20.mp4", poster:"/static/img/poster.png"},
        {id:21, type:"video", src:"/static/video/HoldingPage_21.mp4", poster:"/static/img/poster.png"},
        {id:22, type:"video", src:"/static/video/HoldingPage_22.mp4", poster:"/static/img/poster.png"},
        {id:23, type:"video", src:"/static/video/HoldingPage_23.mp4", poster:"/static/img/poster.png"},
        {id:24, type:"video", src:"/static/video/HoldingPage_24.mp4", poster:"/static/img/poster.png"},
        {id:25, type:"video", src:"/static/video/HoldingPage_25.mp4", poster:"/static/img/poster.png"},
        {id:26, type:"video", src:"/static/video/HoldingPage_26.mp4", poster:"/static/img/poster.png"},
        {id:27, type:"video", src:"/static/video/HoldingPage_27.mp4", poster:"/static/img/poster.png"},
        {id:28, type:"video", src:"/static/video/HoldingPage_28.mp4", poster:"/static/img/poster.png"},
        {id:29, type:"video", src:"/static/video/HoldingPage_29.mp4", poster:"/static/img/poster.png"},
        //{id:6, type:"component", component:typeface},
      ],
      page: null,
      lastScrollTop:0,
      totalNumberOfPages: 0,
      prevTime:null,
      currentPageIndex:0,
      fullpageEl:null,
    }
  },
  beforeCreate: function() {
  },
  created () {
    window.addEventListener("mousewheel", this.MouseWheelHandler, false);
    window.addEventListener("DOMMouseScroll", this.MouseWheelHandler, false);
    document.documentElement.classList.add('no-scroll');
    this.prevTime = new Date().getTime();
  },
  mounted(){
    this.totalNumberOfPages = document.getElementsByClassName("page-slide").length;
    this.fullpageEl = document.getElementById("fullpage");
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll, false);
    document.documentElement.classList.remove('no-scroll');
  },
  methods: {
    MouseWheelHandler(e) {
      var curTime = new Date().getTime();

      // cross-browser wheel delta
      e = e || window.event;
      var value = e.wheelDelta || -e.deltaY || -e.detail;
      var delta = Math.max(-1, Math.min(1, value));

      //time difference between the last scroll and the current one
      var timeDiff = curTime-this.prevTime;
      this.prevTime = curTime;

      //haven't they scrolled in a while?
      //(enough to be consider a different scrolling action to scroll another section)
      if(timeDiff > 200){

      var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
      var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

      if(isScrollingVertically){
          //scrolling down?
          if (delta < 0) {
              console.log('down');
              this.pageDown();
          //scrolling up?
          }else {
              console.log('up');
              this.pageUp();
          }
      }

      //preventing to scroll the site on mouse wheel when scrollbar is present
      // if(options.scrollBar){
      //     e.preventDefault ? e.preventDefault() : e.returnValue = false;
      // }
      }


      return false;

    },
    pageDown() {
      if(this.currentPageIndex < this.totalNumberOfPages-1) {
        this.currentPageIndex++;
        let calc = -(window.innerHeight * this.currentPageIndex);
        this.fullpageEl.style.transform = "translate3d(0px, " + calc + "px, 0px)";
      }
      //ignore, you are on the last page
    },
    pageUp(){
      if(this.currentPageIndex > 0) {
        this.currentPageIndex--;
        let calc = -(window.innerHeight * this.currentPageIndex);
        this.fullpageEl.style.transform = "translate3d(0px, " + calc + "px, 0px)";
      }
      //ignore, you are on the first page
    },
  },
  computed: {
    randomComponent: function () {
      let item = this.pages[Math.floor(Math.random()*this.pages.length)];
      this.page = item;
      console.log("showing random with id", item.id);
      if(item.type == "image") {
        return fimage;
      }
      if(item.type == "video") {
        return fvideo;
      }
      if(item.type == "component") {
        return item.component;
      }
      throw "Cannot choose type";
    }
  },
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
  #fullpage-container {
    overflow: hidden;
    height: 100%;
  }
  #fullpage {
    width: 100%;
    height: 100%;
    will-change: transform;
    transition: transform 1000ms cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .page-slide {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-slide h1 {
    text-align: center;
    font-size: 3rem;
  }
</style>