import millisToMinutesAndSeconds from '../../js/durationFormatter';

export default {
  name: 'playlist-tracks',
  props: ['track', 'enableEditing'],
  methods: {
    playPlaylist(track) {
      this.$emit('playPlaylist', track);
    },
    removeTrack(track) {
      this.$emit('removeTrack', track);
    },
    formatDuration(trackTimeMillis) {
      return millisToMinutesAndSeconds(trackTimeMillis);
    }
  }
};
