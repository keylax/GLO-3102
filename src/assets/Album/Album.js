import Materialize from 'materialize-css';
import moment from 'moment';
import AlbumAPIRequest from '../APIRequests/AlbumAPIRequest';
import TracksManagement from '../../components/Album/TracksManagement';
import AuthentificationErrorHandler from '../js/AuthentificationErrorHandler';

export default {
  name: 'Albums',
  data() {
    return ({
      albumName: '',
      coverImage: '',
      genre: '',
      releaseDate: moment().format('LL'),
      numberTracks: '',
      artistName: ''
    });
  },
  metaInfo() {
    return {
      title: `UBeat - ${this.artistName} - ${this.albumName}`
    };
  },
  components: {
    TracksManagement
  },
  mounted() {
    const api = new AlbumAPIRequest();
    api.getAlbum(this.$route.params.valueOf().id, this.setDataFunc,
    error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
  },
  methods: {
    year(date) {
      return moment(date).format('YYYY');
    },
    formatDate(date) {
      return moment(date).format('LL');
    },
    setDataFunc(data) {
      this.albumName = data.results[0].collectionName;
      this.coverImage = data.results[0].artworkUrl100;
      this.genre = data.results[0].primaryGenreName;
      this.releaseDate = data.results[0].releaseDate;
      this.numberTracks = data.results[0].trackCount;
      this.artistName = data.results[0].artistName;
    },
    errorHandlerFunc() {
      Materialize.toast("Couldn't Retrieve Album Informations", 2000, 'red');
    },
    changeTrackURL(track) {
      const enhancedTrack = {
        artistName: this.artistName,
        coverImage: this.coverImage,
        previewUrl: track.previewUrl,
        trackName: track.trackName
      };

      this.$emit('playMusic', [enhancedTrack]);
    }
  }
};
