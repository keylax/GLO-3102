import Materialize from 'materialize-css';
import millisToMinutesAndSeconds from '../../js/durationFormatter';
import AlbumAPIRequest from '../../APIRequests/AlbumAPIRequest';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

export default {
  props: {
    albumId: Number,
    bodyClass: String,
    collectionClass: String,
    collectionItemClass: String,
  },
  data() {
    return {
      tracks: [],
      albumLink: '',
    };
  },
  mounted() {
    const albumApi = new AlbumAPIRequest();
    albumApi.getAlbumTracks(this.albumId, this.setTracks,
    error => AuthentificationErrorHandler(this, this.errorHandlerTracks, error));
  },
  methods: {
    setTracks(data) {
      this.tracks = data.results;
    },
    errorHandlerTracks() {
      const albumID = toString(this.albumId);
      const msg = `Error retrieving tracks for album ${albumID}`;
      Materialize.toast(msg, 2000, 'red');
    },
    formatDuration(trackTimeMillis) {
      return millisToMinutesAndSeconds(trackTimeMillis);
    },
  },
};
