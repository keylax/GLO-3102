export default {
  name: 'playlist-floating-button',
  props: ['canEdit', 'enableEditing'],
  methods: {
    editBtnClick() {
      this.$emit('editBtnClick');
    },
    savePlaylist() {
      this.$emit('savePlaylist');
    },
    cancelEditing() {
      this.$emit('cancelEditing');
    }
  }
};
