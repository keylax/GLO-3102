import Materialize from 'materialize-css';
import SearchAPIRequest from '../../APIRequests/APISearchRequest';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

const searchAPIRequest = new SearchAPIRequest();

export default {
  name: 'playlist-search',
  data() {
    return {
      searchedTrack: '',
      searchedTracksResult: []
    };
  },
  props: ['id'],
  methods: {
    searchTrack() {
      const name = this.searchedTrack;
      searchAPIRequest.getTracks(name, 10, this.searchTrackSuccess,
        error => AuthentificationErrorHandler(this, this.searchTrackFailed, error));
    },
    searchTrackSuccess(data) {
      this.searchedTracksResult = data.results;
    },
    searchTrackFailed() {
      Materialize.toast("Couldn't search tracks", 2000, 'red');
    },
    addSongToPlaylist(track) {
      this.clearInput();
      this.$emit('addToPlaylist', track);
    },
    addSongToPlaylistSuccess() {
      this.$emit('refreshTracks');
    },
    clearInput() {
      this.searchedTrack = '';
      this.searchedTracksResult = [];
    }
  }
};
