import Materialize from 'materialize-css';
import PlaylistAPIRequest from '../../assets/APIRequests/PlaylistAPIRequest';
import PlaylistItem from '../../components/Album/PlaylistItem';
import AuthentificationErrorHandler from '../js/AuthentificationErrorHandler';

const api = new PlaylistAPIRequest();
export default {
  name: 'Playlist',
  data() {
    return ({
      playlists: []
    });
  },
  components: {
    PlaylistItem
  },
  mounted() {
    this.initUser();
  },
  methods: {
    initUser() {
      api.getTokenInfo(this.initList,
        error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
    },
    initList(user) {
      api.getPlaylists(user.id, data => this.setDataFunc(data),
        error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
    },
    setDataFunc(data) {
      this.playlists = data;
    },
    errorHandlerFunc() {
      Materialize.toast("Couldn't Retrieve Playlists", 2000, 'red');
    },
    addToPlayList(playList) {
      this.$emit('addToPlayList', playList);
    }
  }
};
