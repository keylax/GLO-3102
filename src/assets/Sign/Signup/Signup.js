import Materialize from 'materialize-css';
import $ from 'jquery';
import SignAPIRequest from '../../APIRequests/SignAPIRequest';

export default {
  metaInfo() {
    return {
      title: 'UBeat - Signup'
    };
  },
  data() {
    return {
      errors: [],
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  },
  mounted() {
    $('button').on('mousedown',
      (event) => {
        event.preventDefault();
      }
    );
  },
  methods: {
    signup() {
      this.errors = [];
      if (!this.fieldsFilled()) {
        this.errors.push('Please fill all the information');
      } else if (!this.emailIsValid()) {
        this.errors.push('Please enter a valid email adress.');
      }
      if (!this.passwordRepeated()) {
        this.errors.push('Passwords entered are not identical.');
      }
      if (this.errors.length > 0) {
        for (let i = 0; i < this.errors.length; i++) {
          Materialize.toast(this.errors[i], 2000, 'red');
        }
      } else {
        const signupAPI = new SignAPIRequest();
        signupAPI.signup(this.name, this.email, this.password, this.apiRequestSuccess, this.apiRequestFail);
      }
    },
    apiRequestSuccess() {
      this.$router.push('/signin');
    },
    apiRequestFail(error) {
      if (error.response.status === '401') {
        Materialize.toast('An account with that email already exists.', 2000, 'red');
      } else {
        Materialize.toast('Sign up has failed', 2000, 'red');
      }
    },
    fieldsFilled() {
      return (this.name && this.email && this.password && this.repeatPassword);
    },
    passwordRepeated() {
      return (this.password == this.repeatPassword);
    },
    emailIsValid() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    }
  },
};
