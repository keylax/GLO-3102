import $ from 'jquery';
import Materialize from 'materialize-css';
import PlaylistErrors from '@/components/Playlist/PlaylistErrors';
import PlaylistAPIRequest from '../../APIRequests/PlaylistAPIRequest';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

const playlistAPIRequest = new PlaylistAPIRequest();

export default {
  name: 'playlist-create',
  data() {
    return {
      playlistName: '',
      errors: []
    };
  },
  methods: {
    createPlaylist() {
      playlistAPIRequest.addPlaylist(this.playlistName, this.createPlaylistSuccess,
        error => AuthentificationErrorHandler(this, this.createPlaylistFailed, error));
    },
    createPlaylistSuccess(data) {
      $('.modal').modal('close');
      this.$emit('selectPlaylist', data);
    },
    createPlaylistFailed() {
      Materialize.toast(`Couldn't create ${this.playlistName}`, 2000, 'red');
    },
    checkForm(e) {
      if (this.playlistName) this.createPlaylist();
      this.errors = [];
      if (!this.playlistName) this.errors.push('Name required.');
      e.preventDefault();
    }
  },
  components: {
    'playlist-errors': PlaylistErrors
  }
};
