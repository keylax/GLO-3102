import ArtistGenre from '../../components/Artist/ArtistGenre';
import ArtistCover from '../../components/Artist/ArtistCover';
import ArtistiTunesLink from '../../components/Artist/ArtistiTunesLink';
import ArtistAlbumList from '../../components/Artist/ArtistAlbumList';

export default {
  data() {
    return {
      headerClass: 'collapsible-header collapsible-header-div',
      mainClass: 'collapsible',
      bodyClass: 'collapsible-body collapsible-body-artist',
      collectionClass: 'collection artist-collection',
      collectionItemClass: 'collection-item collection-item-artist',
      artistID: this.$route.params.valueOf().id
    };
  },
  components: {
    ArtistGenre,
    ArtistCover,
    ArtistiTunesLink,
    ArtistAlbumList
  },
};
