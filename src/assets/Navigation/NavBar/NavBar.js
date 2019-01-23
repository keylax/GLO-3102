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
      accountLabel: {
        iconLabel: 'account_circle'
      },
      searchClass: {
        containerClass: 'search-bar input-field',
        labelClass: 'mid-height',
        inputClass: 'search-bar'
      },
      searchID: {
        idClearButton: 'btn-clear',
        idInput: 'btn-input'
      },
      navLinkClass: {
        containerClass: '',
        routerClass: 'pull-left nav-link',
        iconClass: 'pull-left material-icons icon-text-link',
        textClass: 'pull-left icon-text-link'
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
