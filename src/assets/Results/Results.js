import Materialize from 'materialize-css';
import ResultsGroup from '../../components/Results/ResultsGroup';
import SearchAPIRequest from '../APIRequests/APISearchRequest';
import UserAPIRequest from '../APIRequests/UserAPIRequest';
import ResultsAssignations from '../../components/Results/ResultsAssignations';
import AuthentificationErrorHandler from '../js/AuthentificationErrorHandler';

export default {
  data() {
    return {
      resultsQuery: {},
      userIcon: 'account_circle',
      albumIcon: 'album',
      artistIcon: 'face',
      trackIcon: 'music_note',
      userTitle: 'User',
      albumTitle: 'Album',
      artistTitle: 'Artist',
      trackTitle: 'Track',
      wrapperTypeArtist: 'artist',
      wrapperTypeCollection: 'collection',
      wrapperTypeTrack: 'track',
      wrapperTypeUser: 'user',
      artistsSearchResults: [],
      albumsSearchResults: [],
      tracksSearchResults: [],
      usersSearchResults: [],
      limitSearchArtistDropdownCount: 5,
      limitSearchAlbumDropdownCount: 5,
      limitSearchTrackDropdownCount: 5,
      limitAugmentationBuffer: 5,
      selectedResult: {},
      selectedWrapperType: '',
      connectedUser: {},
      searchAPIRequest: new SearchAPIRequest(),
      userAPIRequest: new UserAPIRequest()
    };
  },
  methods: {
    searchArtistSuccess(data) {
      this.artistsSearchResults = data.results;
    },
    searchAlbumSuccess(data) {
      this.albumsSearchResults = data.results;
    },
    searchTrackSuccess(data) {
      this.tracksSearchResults = data.results;
    },
    searchUserSuccess(data) {
      this.usersSearchResults = data;
    },
    searchArtistFailed() {
      this.artistsSearchResults = [];
      Materialize.toast('Artist search has failed', 2000, 'red');
    },
    searchAlbumFailed() {
      this.albumsSearchResults = [];
      Materialize.toast('Album search has failed', 2000, 'red');
    },
    searchTrackFailed() {
      this.tracksSearchResults = [];
      Materialize.toast('Track search has failed', 2000, 'red');
    },
    searchUserFailed() {
      this.usersSearchResults = [];
      Materialize.toast('User search has failed', 2000, 'red');
    },
    searchArtist(artist) {
      this.searchAPIRequest.getArtists(artist,
      this.limitSearchArtistDropdownCount, this.searchArtistSuccess,
      error => AuthentificationErrorHandler(this, this.searchArtistFailed, error));
    },
    searchAlbum(album) {
      this.searchAPIRequest.getCollections(album,
      this.limitSearchAlbumDropdownCount, this.searchAlbumSuccess,
      error => AuthentificationErrorHandler(this, this.searchAlbumFailed, error));
    },
    searchTrack(track) {
      this.searchAPIRequest.getTracks(track,
      this.limitSearchTrackDropdownCount, this.searchTrackSuccess,
      error => AuthentificationErrorHandler(this, this.searchTrackFailed, error));
    },
    searchUser(user) {
      this.searchAPIRequest.getUsers(user, this.searchUserSuccess,
      error => AuthentificationErrorHandler(this, this.searchUserFailed, error));
    },
    searchMoreArtists() {
      this.limitSearchArtistDropdownCount += this.limitAugmentationBuffer;
      if (this.resultsQuery.artist) {
        this.searchArtist(this.resultsQuery.artist.trim());
      } else if (this.resultsQuery.global) {
        this.searchArtist(this.resultsQuery.global.trim());
      }
    },
    searchMoreAlbums() {
      this.limitSearchAlbumDropdownCount += this.limitAugmentationBuffer;
      if (this.resultsQuery.album) {
        this.searchAlbum(this.resultsQuery.album.trim());
      } else if (this.resultsQuery.global) {
        this.searchAlbum(this.resultsQuery.global.trim());
      }
    },
    searchMoreTracks() {
      this.limitSearchTrackDropdownCount += this.limitAugmentationBuffer;
      if (this.resultsQuery.track) {
        this.searchTrack(this.resultsQuery.track.trim());
      } else if (this.resultsQuery.global) {
        this.searchTrack(this.resultsQuery.global.trim());
      }
    },
    selectResult(result, wrapperType) {
      this.selectedResult = result;
      this.selectedWrapperType = wrapperType;
    },
    setConnectedUser(data) {
      const connectedUserID = data.id;
      this.userAPIRequest.getUser(connectedUserID, this.connectUser,
      error => AuthentificationErrorHandler(this, this.errorHandlerConnectedUserFunc, error));
    },
    connectUser(user) {
      this.connectedUser = user;
    },
    errorHandlerConnectedUserFunc() {
      Materialize.toast("Couldn't Retrieve connected user Id", 2000, 'red');
    }
  },
  created() {
    this.resultsQuery = this.$route.query;
    if (this.resultsQuery.global) {
      this.searchArtist(this.resultsQuery.global.trim());
      this.searchAlbum(this.resultsQuery.global.trim());
      this.searchTrack(this.resultsQuery.global.trim());
      this.searchUser(this.resultsQuery.global.trim());
    } else {
      if (this.resultsQuery.artist) {
        this.searchArtist(this.resultsQuery.artist.trim());
      }

      if (this.resultsQuery.album) {
        this.searchAlbum(this.resultsQuery.album.trim());
      }

      if (this.resultsQuery.track) {
        this.searchTrack(this.resultsQuery.track.trim());
      }

      if (this.resultsQuery.user) {
        this.searchUser(this.resultsQuery.user.trim());
      }
    }

    this.userAPIRequest.getTokenInfo(this.setConnectedUser,
      error => AuthentificationErrorHandler(this, this.errorHandlerConnectedUserFunc, error));
  },
  components: {
    'results-group': ResultsGroup,
    'results-assignations': ResultsAssignations
  },
  metaInfo() {
    return {
      title: 'UBeat - Search results'
    };
  }
};
