export default {
  name: 'nav-search-result',
  props: ['item', 'isTrack', 'isArtist', 'isAlbum', 'isUser', 'routerLink', 'enableAlbumCover'],
  data() {
    return {
      isUserTitle: 'User'
    };
  },
  methods: {
    redirectTo() {
      let page;
      let id;

      if (this.isArtist) {
        page = '/artist/';
        id = this.item.artistId;
      } else if (this.isAlbum) {
        page = '/album/';
        id = this.item.collectionId;
      } else if (this.isTrack) {
        page = '/album/';
        id = this.item.collectionId;
      } else if (this.isUser) {
        page = '/user/';
        id = this.item.id;
      }

      this.$emit('clearInputValue');
      this.$router.push(page.concat(id));
    },
    convertDisplay(display) {
      if (display === 'COLLECTION') {
        return 'ALBUM';
      }
      return display;
    }
  }
};
