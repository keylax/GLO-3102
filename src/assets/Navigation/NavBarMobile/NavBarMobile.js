import NavLink from '../../../components/Navigation/NavLink';
import NavLabel from '../../../components/Navigation/NavLabel';
import NavSearch from '../../../components/Navigation/NavSearch/NavSearch';

export default {
  data() {
    return {
      playlistsLink: {
        textLink: 'Playlists',
        iconLink: 'queue_music',
        routerLink: '/playlists'
      },
      logoutLink: {
        textLink: 'Logout',
        iconLink: 'exit_to_app',
        routerLink: '/signin'
      },
      signinLink: {
        textLink: 'Log In',
        iconLink: 'forward',
        routerLink: '/signin'
      },
      signupLink: {
        textLink: 'Sign up',
        iconLink: 'border_color',
        routerLink: '/signup'
      },
      settingsLink: {
        textLink: 'Account settings',
        iconLink: 'settings',
        routerLink: '/'
      },
      homeLink: {
        textLink: 'Home',
        iconLink: 'home',
        routerLink: '/'
      },
      accountLabel: {
        iconLabel: 'account_circle'
      },
      searchClass: {
        containerClass: 'search-bar-mobile mobile-separator search-bar input-field',
        labelClass: 'search-bar mid-height',
        inputClass: 'mobile-search-bar search-bar'
      },
      searchID: {
        idClearButton: 'btn-clear-mobile',
        idInput: 'btn-input-mobile'
      },
      navLinkClass: {
        containerClass: 'pull-left mobile-container mobile-link',
        routerClass: 'pull-left mobile-link',
        iconClass: 'pull-left mobile-icon-text-link material-icons prefix',
        textClass: 'pull-left mobile-icon-text-link icon-text-link'
      }
    };
  },
  props: {
    navBarID: String,
    navBarClass: String,
    connectedUser: String
  },
  components: {
    NavLink,
    NavLabel,
    NavSearch
  },
  methods: {
    disconnectUser() {
      this.$emit('user-disconnection');
    }
  }
};
