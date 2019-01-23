import Materialize from 'materialize-css';
import ArtistAPIRequest from '../../APIRequests/ArtistAPIRequest';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

export default {
  props: {
    artistID: String,
  },
  data() {
    return {
      itunesLink: '',
      artistName: '',
    };
  },
  mounted() {
    const api = new ArtistAPIRequest();
    api.getArtist(this.$route.params.valueOf().id, this.setDataFunc,
    error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
  },
  methods: {
    setDataFunc(data) {
      this.itunesLink = data.results[0].artistLinkUrl;
      this.artistName = data.results[0].artistName;
    },
    errorHandlerFunc() {
      const artistId = this.$route.params.valueOf().id;
      const msg = `Error retrieving some information for artist ${artistId}`;
      Materialize.toast(msg, 2000, 'red');
    }
  }
};
