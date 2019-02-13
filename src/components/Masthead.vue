<template>

  <!--
  <div class="masthead">
    <div class="branding">
      <router-link :to="{ name: 'Home' }" exact><img src="../assets/images/1.gif" height="200" class="hector size-60"></router-link>
    </div>

    <nav class="navigation">
      <ul>
      <li><router-link :to="{ name: 'Work' }" exact>Work</router-link></li>
      <li><router-link :to="{ name: 'About' }" exact>About</router-link></li>
      <li><router-link :to="{ name: 'Project' }" exact>Project</router-link></li>
      <li><router-link :to="{ name: 'Example1' }" exact>Example 1</router-link></li>
      <li><router-link :to="{ name: 'Example2' }" exact>Example 2</router-link></li>
      </ul>
    </nav>
  </div>
    -->

  <div>

    <div class="brand">
      <div class="branding">
        <router-link :to="{ name: 'Home' }" exact></router-link>
      </div>
    </div>




  <div class="navigation-container">
    <!-- Main container -->
    <nav class="">
      <ul class="navigation">
        <li class="info-trigger" @click="toggleInfo"><a class="">INFO</a></li>
      </ul>
    </nav>
    <!-- end Main container -->
  </div>


</div>

</template>

<script>
import { EventBus } from '../App.vue';

export default {
  name: 'Masthead',
  methods: {
    toggleInfo() {
        EventBus.$emit('toggle-info');
    },
      toggleClass: function(event){
         // Check value
         if(this.isActive){
           this.isActive = false;
         }else{
           this.isActive = true;
         }

      }
    }
}
</script>
