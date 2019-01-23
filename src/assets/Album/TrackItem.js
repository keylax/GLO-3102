export default {
  name: 'TrackItem',
  props: ['trackNumber', 'trackName', 'albumName', 'duration', 'previewUrl', 'isSelected'],
  methods: {
    playMusic: function playMusic(event) {
      event.stopPropagation();
      const track = {
        previewUrl: this.previewUrl,
        trackName: this.trackName
      };
      this.$emit('playMusic', track);
    },
    select() {
      this.$emit('selected');
    }
  }
};
