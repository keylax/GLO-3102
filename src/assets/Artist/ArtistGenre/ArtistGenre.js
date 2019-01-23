import Materialize from 'materialize-css';
import ArtistAPIRequest from '../../APIRequests/ArtistAPIRequest';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

export default {
  props: {
    artistID: String,
  },
  data() {
    return {
      primaryGenre: '',
    };
  },
  mounted() {
    const api = new ArtistAPIRequest();
    api.getArtist(this.artistID, this.setDataFunc,
    error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
  },
  methods: {
    setDataFunc(data) {
      this.primaryGenre = data.results[0].primaryGenreName;
    },
    errorHandlerFunc() {
      const msg = `Error retrieving the genre for artist ${this.artistID}`;
      Materialize.toast(msg, 2000, 'red');
    }
  }
};
