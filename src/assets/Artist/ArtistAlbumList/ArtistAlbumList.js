import Materialize from 'materialize-css';
import ArtistAPIRequest from '../../APIRequests/ArtistAPIRequest';
import ArtistAlbumTrackList from '../../../components/Artist/ArtistAlbumTrackList';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';


export default {
  props: {
    artistID: String,
    headerClass: String,
    mainClass: String,
    bodyClass: String,
    collectionClass: String,
    collectionItemClass: String,
  },
  data() {
    return {
      albums: [],
    };
  },
  mounted() {
    const artistApi = new ArtistAPIRequest();
    artistApi.getArtistAlbums(this.artistID, this.setAlbums,
    error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
  },
  methods: {
    setAlbums(data) {
      this.albums = data.results;
    },
    errorHandlerFunc() {
      const msg = `Error retrieving albums for artist ${this.artistID}`;
      Materialize.toast(msg, 2000, 'red');
    }
  },
  components: {
    ArtistAlbumTrackList,
  },
};
