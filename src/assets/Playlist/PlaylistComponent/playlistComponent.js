import $ from 'jquery';
import Materialize from 'materialize-css';
import PlaylistSearch from '@/components/Playlist/PlaylistSearch';
import PlaylistFloatingButton from '@/components/Playlist/PlaylistFloatingButton';
import PlaylistTracks from '@/components/Playlist/PlaylistTracks';
import PlaylistErrors from '@/components/Playlist/PlaylistErrors';
import PlaylistAPIRequest from '../../APIRequests/PlaylistAPIRequest';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

const playlistAPIRequest = new PlaylistAPIRequest();

export default {
  name: 'playlist-component',
  props: ['item', 'enableEditing', 'canEdit', 'playlistName'],
  data() {
    return {
      mutableItem: {},
      initialItem: {},
      errors: []
    };
  },
  methods: {
    playPlaylist(track) {
      this.$emit('playMusic', [track]);
    },
    savePlaylist() {
      const errors = [];
      if (!this.mutableItem.name) {
        errors.push('Name required.');
      }
      this.errors = errors;

      if (errors.length === 0) {
        const editedPlaylist = {
          name: this.mutableItem.name,
          id: this.mutableItem.id,
          owner: this.mutableItem.owner,
          tracks: this.mutableItem.tracks
        };
        playlistAPIRequest.modifyPlaylist(editedPlaylist, this.editPlaylistSuccess,
        error => AuthentificationErrorHandler(this, this.editPlaylistFailed, error));
        this.$emit('setEditMode', false);
      }
    },
    editPlaylistSuccess(data) {
      this.$emit('selectPlaylist', data);
    },
    editPlaylistFailed() {
      if (this.initialItem.name) {
        Materialize.toast(`Couldn't save modifications on ${this.initialItem.name}`, 2000, 'red');
      } else {
        Materialize.toast("Couldn't save modifications on current playlist", 2000, 'red');
      }
    },
    removeTrack(track) {
      const index = this.mutableItem.tracks.indexOf(track);

      if (index > -1) {
        this.mutableItem.tracks.splice(index, 1);
      }
    },
    addTrackToPlaylist(track) {
      this.mutableItem.tracks.push(track);
    },
    editBtnClick() {
      this.$emit('setEditMode', !this.enableEditing);
    },
    cancelEditing() {
      this.mutableItem = this.initialItem;
      this.errors = [];
    }
  },
  watch: {
    item(newVal) {
      if (!this.enableEditing) {
        this.initialItem = newVal;
        this.mutableItem = $.extend(true, {}, newVal);
      } else {
        this.mutableItem.name = newVal.name;
      }
      this.errors = [];
    }
  },
  components: {
    'playlist-search': PlaylistSearch,
    'playlist-floating-button': PlaylistFloatingButton,
    'playlist-tracks': PlaylistTracks,
    'playlist-errors': PlaylistErrors
  }
};
