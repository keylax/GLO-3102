import Materialize from 'materialize-css';
import ArtistAPIRequest from '../../APIRequests/ArtistAPIRequest';
import AlbumAPIRequest from '../../APIRequests/AlbumAPIRequest';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

export default {
  props: {
    artistID: String,
  },
  data() {
    return {
      artistName: '',
      artistAvatar: ''
    };
  },
  metaInfo() {
    return {
      title: `UBeat - ${this.artistName}`
    };
  },
  mounted() {
    const artistApi = new ArtistAPIRequest();
    artistApi.getArtist(this.artistID, this.setArtistName,
    error => AuthentificationErrorHandler(this, this.artistNameError, error));
    artistApi.getArtistAlbums(this.artistID, this.getRandomAlbum,
    error => AuthentificationErrorHandler(this, this.avatarError, error));
  },
  methods: {
    setArtistName(data) {
      this.artistName = data.results[0].artistName;
    },
    getRandomAlbum(data) {
      const randomAlbum = Math.floor(Math.random() * Math.floor(data.resultCount));
      const albumApi = new AlbumAPIRequest();
      const randomAlbumID = data.results[randomAlbum].collectionId;

      albumApi.getAlbum(randomAlbumID, this.setArtistAvatar,
      error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
    },
    setArtistAvatar(data) {
      this.artistAvatar = data.results[0].artworkUrl100;
    },
    avatarError() {
      const msg = `Error retrieving the avatar for artist ${this.artistID}`;
      Materialize.toast(msg, 2000, 'red');
    },
    artistNameError() {
      const msg = `Error retrieving the name for artist ${this.artistID}`;
      Materialize.toast(msg, 2000, 'red');
    }
  },
};
