export default {
  name: 'user-tracks',
  props: ['trackName', 'trackNumber', 'albumName', 'duration', 'previewUrl', 'artistName', 'coverImage'],
  methods: {
    playMusic: function playMusic(event) {
      event.stopPropagation();
      const track = {
        artistName: this.artistName,
        coverImage: this.coverImage,
        previewUrl: this.previewUrl,
        trackName: this.trackName
      };
      this.$emit('playMusic', [track]);
    }
  }
};
