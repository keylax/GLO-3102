import millisToMinutesAndSeconds from '../../assets/js/durationFormatter';
import UserTracks from '../../components/UserProfile/UserTrack';

export default {
  components: { UserTracks },
  name: 'user-playlist',
  props: ['tracks', 'id', 'playlistName'],
  methods: {
    playPlaylist(event) {
      event.stopPropagation();
      const formatTracks = [];
      for (let i = 0; i < this.tracks.length; i += 1) {
        formatTracks.push({
          artistName: this.tracks[i].artistName,
          coverImage: this.tracks[i].artworkUrl100,
          previewUrl: this.tracks[i].previewUrl,
          trackName: this.tracks[i].trackName
        });
      }
      this.$emit('playMusic', formatTracks);
    },
    formatDuration(trackTimeMillis) {
      return millisToMinutesAndSeconds(trackTimeMillis);
    },
    playTrack(track) {
      this.$emit('playMusic', track);
    }
  }
};
