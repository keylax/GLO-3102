<template>
  <div class="content-div" v-on:keyup.enter="signup">
    <div id="basic-form" class="section sign-container">
      <div class="header-div z-depth-3">
        <h4>Sign up</h4>
      </div>
      <div class="card-panel card-panel-sign z-depth-3">
        <div class="row">
          <div class="col s12 sign-form">
            <div class="row">
              <div class="input-field col s12">
                <input id="name" type="text" v-model="name">
                <label for="name">Name</label>
              </div>
            </div>
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
            <div class="row">
              <div class="input-field col s12">
                <input id="repeat-password" type="password" v-model="repeatPassword">
                <label for="repeat-password">Repeat password</label>
              </div>
            </div>
            <div class="sign-button-div">
              <button class="waves-effect waves-purple btn btn-default" v-on:click="signup">Sign up</button>
            </div>
          </div>
        </div>
        <div class="sign-link-div">
          <hr style="border-top: dotted 2px; color:darkgray;" />
          <p>Already have an account?</p>
          <router-link class="waves-effect waves-purple btn btn-default sign-link-button" to="/signin">Sign In</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script scoped src="../assets/Sign/Signup/Signup.js"></script>
<style scoped src="../assets/Sign/Sign.css"></style>
