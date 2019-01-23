import Materialize from 'materialize-css';
import PlaylistAPIRequest from '../../APIRequests/PlaylistAPIRequest';
import ArtistAPIRequest from '../../APIRequests/ArtistAPIRequest';
import AlbumAPIRequest from '../../APIRequests/AlbumAPIRequest';
import PlaylistItem from '../../../components/Album/PlaylistItem';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

export default {
  data() {
    return ({
      playlists: [],
      wrapperTypeArtist: 'artist',
      wrapperTypeCollection: 'collection',
      wrapperTypeTrack: 'track',
      playlistAPIRequest: new PlaylistAPIRequest(),
      artistAPIRequests: new ArtistAPIRequest(),
      albumAPIRequests: new AlbumAPIRequest()
    });
  },
  props: {
    selectedValue: {},
    selectedWrapperType: String
  },
  components: {
    'playlist-item': PlaylistItem
  },
  mounted() {
    this.initUser();
  },
  methods: {
    initUser() {
      this.playlistAPIRequest.getTokenInfo(this.initList,
        error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
    },
    initList(user) {
      this.playlistAPIRequest.getPlaylists(user.id, data => this.setDataFunc(data),
        error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
    },
    setDataFunc(data) {
      this.playlists = data;
    },
    errorHandlerFunc() {
      Materialize.toast("Couldn't Retrieve Playlists", 2000, 'red');
    },
    addToPlayList(playList) {
      if (this.selectedWrapperType === this.wrapperTypeArtist) {
        this.artistAPIRequests.getArtistAlbums(this.selectedValue.artistId,
        data => this.addAlbumsToPlaylist(data.results, playList),
        error => AuthentificationErrorHandler(this,
          this.errorAddedToPlaylist.bind(this, this.selectedValue.artistId, playList.name), error));
      } else if (this.selectedWrapperType === this.wrapperTypeCollection) {
        this.addAlbumsToPlaylist([this.selectedValue], playList);
      } else if (this.selectedWrapperType === this.wrapperTypeTrack) {
        this.addTracksToPlaylist([this.selectedValue], playList);
      }
    },
    addAlbumsToPlaylist(albums, playList) {
      for (let i = 0; i < albums.length; i += 1) {
        this.albumAPIRequests.getAlbumTracks(albums[i].collectionId,
        data => this.addTracksToPlaylist(data.results, playList),
        error => AuthentificationErrorHandler(this,
          this.errorAddedToPlaylist.bind(this, albums[i].collectionName, playList.name), error));
      }
    },
    addTracksToPlaylist(tracks, playList) {
      for (let i = 0; i < tracks.length; i += 1) {
        this.playlistAPIRequest.addTrackToPlaylist(playList.id, tracks[i],
          this.succesAddedToPlaylist.bind(this, tracks[i].trackName, playList.name),
          error => AuthentificationErrorHandler(this,
            this.errorAddedToPlaylist.bind(this, tracks[i].trackName, playList.name), error));
      }
    },
    succesAddedToPlaylist(trackName, playlistName) {
      Materialize.toast(`Added ${trackName} to ${playlistName}`, 2000, 'green');
    },
    errorAddedToPlaylist(valueName, playlistName) {
      if (valueName && playlistName) {
        Materialize.toast(`Couldn't Add ${valueName} to ${playlistName}`, 2000, 'red');
      } else {
        Materialize.toast("Couldn't add track(s) to playlist", 2000, 'red');
      }
    },
  }
};
