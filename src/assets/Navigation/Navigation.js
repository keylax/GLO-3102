import $ from 'jquery';
import Materialize from 'materialize-css';
import NavBar from '../../components/Navigation/NavBar';
import NavBarMobile from '../../components/Navigation/NavBarMobile';
import SignAPIRequest from '../APIRequests/SignAPIRequest';
import AuthentificationErrorHandler from '../js/AuthentificationErrorHandler';

export default {
  data() {
    return {
      navBarParams: {
        id: 'nav-mobile',
        class: 'right hide-on-med-and-down'
      },
      mobileNavBarParams: {
        id: 'mobile-side-nav',
        class: 'side-nav'
      },
      signAPI: new SignAPIRequest()
    };
  },
  components: {
    NavBar,
    NavBarMobile
  },
  props: {
    connectedUser: String
  },
  methods: {
    disconnectUser() {
      this.$emit('user-disconnection');
      this.signAPI.logout(this.disconnectionErrorHandler);
    },
    connectUser(data) {
      this.$emit('user-connection', data);
    },
    connectionErrorHandler() {
      Materialize.toast('User connection with token has failed', 2000, 'red');
    },
    disconnectionErrorHandler() {
      Materialize.toast('User disconnection has failed', 2000, 'red');
    }
  },
  created() {
    this.signAPI.signInWithToken(data => this.connectUser(data),
    error => AuthentificationErrorHandler(this, this.connectionErrorHandler, error));
  }
};

function setEventHandler() {
  window.onresize = function closeHamburgerMenu() {
    $('.button-collapse').sideNav('hide');
  };

  $(document).ready(
    $('.button-collapse').sideNav()
  );
}

if (document.readyState !== 'loading') {
  setEventHandler();
} else {
  document.addEventListener('DOMContentLoaded', setEventHandler);
}

