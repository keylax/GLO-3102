import Materialize from 'materialize-css';
import SignAPIRequest from '../../APIRequests/SignAPIRequest';

export default {
  metaInfo() {
    return {
      title: 'UBeat - Sign In'
    };
  },
  data() {
    return {
      errors: [],
      email: '',
      password: '',
      signAPI: new SignAPIRequest()
    };
  },
  methods: {
    signin() {
      if (this.email === '' || this.password === '') {
        Materialize.toast("Username and password can't be empty", 2000, 'red');
      } else {
        this.signAPI.signin(this.email, this.password, this.apiRequestSuccess, this.apiRequestFail);
      }
    },
    apiRequestSuccess(data) {
      this.$router.push('/');
      this.$emit('user-connection', data);
    },
    apiRequestFail(error) {
      if (error.response.status === 401) {
        Materialize.toast('Bad email/password combination', 2000, 'red');
      } else {
        Materialize.toast('Sign in has failed', 2000, 'red');
      }
    },
  }
};
