import Materialize from 'materialize-css';
import millisToMinutesAndSeconds from '../js/durationFormatter';
import AlbumAPIRequest from '../APIRequests/AlbumAPIRequest';
import PlaylistAPIRequest from '..//APIRequests/PlaylistAPIRequest';
import TrackItem from '../../components/Album/TrackItem';
import Playlist from '../../components/Album/Playlist';
import AuthentificationErrorHandler from '../js/AuthentificationErrorHandler';

export default {
  name: 'TracksManagement',
  data() {
    return ({
      tracks: [],
      selectedTracks: []
    });
  },
  components: {
    TrackItem,
    Playlist
  },
  mounted() {
    const api = new AlbumAPIRequest();
    api.getAlbumTracks(this.$route.params.valueOf().id, this.setDataFunc,
    error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
  },
  methods: {
    setDataFunc(data) {
      this.tracks = data.results;
    },
    errorHandlerFunc() {
      Materialize.toast("Couldn't Retrieve Tracks", 2000, 'red');
    },
    formatDuration(trackTimeMillis) {
      return millisToMinutesAndSeconds(trackTimeMillis);
    },
    addToPlayList(playList) {
      const api = new PlaylistAPIRequest();

      for (let i = 0; i < this.selectedTracks.length; i += 1) {
        api.addTrackToPlaylist(playList.id, this.selectedTracks[i],
          this.succesAddedToPlaylist.bind(this, this.selectedTracks[i].trackName, playList.name),
          error => AuthentificationErrorHandler(this,
            this.errorAddedToPlaylist.bind(this, this.selectedTracks[i].trackName, playList.name),
              error));
      }
    },
    selectTrack(track) {
      if (this.selectedTracks.includes(track)) {
        const indexofTrack = this.selectedTracks.findIndex(x => x === track);
        this.selectedTracks.splice(indexofTrack, 1);
      } else {
        this.selectedTracks.push(track);
      }
    },
    selectAll() {
      this.selectedTracks = this.tracks.slice();
    },
    deselectAll() {
      this.selectedTracks = [];
    },
    succesAddedToPlaylist(trackName, playlistName) {
      Materialize.toast(`Added ${trackName} to ${playlistName}`, 2000, 'green');
    },
    errorAddedToPlaylist(trackName, playlistName) {
      if (trackName && playlistName) {
        Materialize.toast(`Couldn't Add ${trackName} to ${playlistName}`, 2000, 'red');
      } else {
        Materialize.toast("Couldn't add track(s) to playlist", 2000, 'red');
      }
    },
    changeTrackURL(track) {
      this.$emit('playMusic', track);
    }
  }
};
