<template>

  <div class="about page">

    <div class="content">

      <div class="child-page box flex">
      
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-10 is-narrow">


              <a @click="go" class="btn"></a>
              
              <div id="basicTimeline" ref="square">
                <div class="demo-content">
                    <div class="slide">
                      <div class="square el"></div>
                    </div>
                    <div class="slide">
                      <div class="circle el"></div>
                    </div>
                    <div class="line">
                      <div class="triangle el"></div>
                    </div>
                </div>
              </div>

            </div>
          </div>    
        </div>
      </div>

    </div>
 

    </div>  

  </div>
</template>

<script>
import { timeline } from '../animate'
export default {
  name: 'About',
  methods: {
    go( ) {
      timeline(this.$refs.square)
    }
  },
  beforeCreate: function() {
      document.body.className = 'light';
  },
  data () {
    return {
      msg: 'Creative Agency * Next Generation * Bandits'
    }
  }
  
}
</script>

<style scoped>
#basicTimeline {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    min-height: 500px;
    padding-top: 35px;
    cursor: pointer;
}

.demo-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 500px;
}

.line {
    width: 100%;
    padding: 1px 0px;
}

.slide {
    width: 100%;
    height:100%;
    display:block;
    position:absolute;
    top:0;
    left: 0;
    padding:0px;
}


.square, .circle, .triangle {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 500px;
    top:0;
    left:0;
    background-color: currentColor;
    font-size: 12px;
}

.square {
  background-color: red;
  z-index: 0;  

}
.circle {
    /*border-radius: 50%;*/
    color: green;
    background-color: currentColor;
    z-index: -1;
}

.triangle {
    /*border-radius: 50%;*/
    color: blue;
    background-color: currentColor;
    z-index: -2;
}


.block {
  pointer-events: none;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 1px;
  background-color: currentColor;
  background: url(../assets/images/1.gif) 0 0 no-repeat;
  background-size: cover;
  font-size: 12px;
  color: #FF00FF;
}

a.btn {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    padding: 0;
    background-color: #00ff00;
}
</style>

