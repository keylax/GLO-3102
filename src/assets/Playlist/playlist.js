import $ from 'jquery';
import Materialize from 'materialize-css';
import PlaylistCreate from '@/components/Playlist/PlaylistCreate';
import PlaylistComponent from '@/components/Playlist/PlaylistComponent';
import PlaylistSearch from '@/components/Playlist/PlaylistSearch';
import PlaylistFloatingButton from '@/components/Playlist/PlaylistFloatingButton';
import PlaylistAPIRequest from '../APIRequests/PlaylistAPIRequest';
import AuthentificationErrorHandler from '../js/AuthentificationErrorHandler';

const playlistAPIRequest = new PlaylistAPIRequest();

export default {
  name: 'playlists',
  data() {
    return {
      items: [],
      editMode: false,
      showPlaylist: false,
      selectedPlaylist: {},
      editingName: '',
      connectedUserId: ''
    };
  },
  metaInfo() {
    return {
      title: 'UBeat - Playlists'
    };
  },
  methods: {
    enableEditMode(enableEditMode) {
      this.editMode = enableEditMode;
      this.editingName = this.selectedPlaylist.name;
    },
    showSelectedPlaylist(item) {
      this.editMode = false;
      this.selectedPlaylist = item;
      this.showPlaylist = true;
    },
    playPlaylist(tracks) {
      const formatTracks = [];
      for (let i = 0; i < tracks.length; i += 1) {
        formatTracks.push({
          artistName: tracks[i].artistName,
          coverImage: tracks[i].artworkUrl100,
          previewUrl: tracks[i].previewUrl,
          trackName: tracks[i].trackName
        });
      }
      this.$emit('playMusic', formatTracks);
    },
    removePlaylist(playlistId, e) {
      playlistAPIRequest.deletePlaylist(playlistId,
        this.removePlaylistSuccess,
        error => AuthentificationErrorHandler(this, this.removePlaylistFailed, error));
      e.stopPropagation(); // keep from triggering a click on the 'li' element.
    },
    removePlaylistSuccess() {
      this.initUser();
      this.selectedPlaylist = {};
      this.showPlaylist = false;
    },
    removePlaylistFailed() {
      if (this.selectedPlaylist.name) {
        Materialize.toast(`Couldn't delete ${this.selectedPlaylist.name}`, 2000, 'red');
      } else {
        Materialize.toast("Couldn't delete current playlist", 2000, 'red');
      }
    },
    selectNewPlaylist(data) {
      this.showSelectedPlaylist(data);
      this.initUser();
    },
    initList(user) {
      playlistAPIRequest.getPlaylists(user.id, data => this.setDataFunc(data),
        error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));
    },
    initUser() {
      playlistAPIRequest.getTokenInfo(this.initList,
        error => AuthentificationErrorHandler(this, this.errorHandlerConnectedUserFunc, error));
    },
    setDataFunc(data) {
      this.items = data;
    },
    errorHandlerFunc() {
      Materialize.toast("Couldn't get playlists", 2000, 'red');
    },
    setConnectedUser(data) {
      this.connectedUserId = data.id;
    },
    errorHandlerConnectedUserFunc() {
      Materialize.toast("Couldn't Retrieve connected user", 2000, 'red');
    },
  },
  mounted() {
    this.initUser();
    $('.modal').modal();
    $('select').material_select();
  },
  created() {

  },
  updated() {
    $('.dropdown-button').dropdown();
  },
  components: {
    'playlist-create-modal': PlaylistCreate,
    'playlist-component': PlaylistComponent,
    'playlist-search': PlaylistSearch,
    'playlist-floating-button': PlaylistFloatingButton
  }
};

