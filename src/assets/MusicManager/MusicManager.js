import MusicPlayer from '../../components/MusicPlayer';

export default {
  data() {
    return {
      track: {
        artistName: '',
        coverImage: '',
        previewUrl: '',
        trackName: ''
      },
      display: 'display: none',
      nbTracksInQueue: 0,
      nextInQueue: ''
    };
  },
  props: {
    tracks: Array
  },
  watch: {
    tracks(newTrack) {
      if (newTrack.length !== 0) {
        this.display = 'display: ';
        this.track = newTrack[0];
        this.nbTracksInQueue = newTrack.length - 1;
        if (this.nbTracksInQueue !== 0) {
          this.nextInQueue = `${newTrack[1].artistName} - ${newTrack[1].trackName}`;
        }
      }
    }
  },
  components: {
    MusicPlayer
  },
  methods: {
    changeTrack() {
      this.display = 'display: none';
      this.tracks.splice(0, 1);
    },
    endPlaylist() {
      this.$emit('stopPlaylist');
    }
  }
};
