<template>
  <div class="content-div" v-on:keyup.enter="signin">
    <div id="basic-form" class="section sign-container">
      <div class="header-div z-depth-3">
        <h4>Sign In</h4>
      </div>
      <div class="card-panel card-panel-sign z-depth-3">
        <div class="row">
          <div class="col s12 sign-form">
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" v-model="email">
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" v-model="password">
                <label for="password">Password</label>
              </div>
            </div>
            <div class="sign-button-div">
              <button class="waves-effect waves-purple btn btn-default" v-on:click="signin">Sign In</button>
            </div>
          </div>
        </div>
        <div class="sign-link-div">
          <hr style="border-top: dotted 2px; color:darkgray;" />
          <p>Doesn't have an account?</p>
          <router-link class="waves-effect waves-purple btn btn-default sign-link-button" to="/signup">Sign up</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script scoped src="../assets/Sign/Signin/Signin.js"></script>
<style scoped src="../assets/Sign/Sign.css"></style>
