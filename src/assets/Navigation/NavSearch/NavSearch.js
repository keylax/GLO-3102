import NavSearchResultTrack from '@/components/Navigation/NavSearch/NavSearchResultTrack';
import NavSearchResultArtist from '@/components/Navigation/NavSearch/NavSearchResultArtist';
import NavSearchResultCollection from '@/components/Navigation/NavSearch/NavSearchResultCollection';
import NavSearchResult from '@/components/Navigation/NavSearch/NavSearchResult';
import SearchAPIRequest from '../../APIRequests/APISearchRequest';
import AuthentificationErrorHandler from '../../js/AuthentificationErrorHandler';

const searchAPIRequest = new SearchAPIRequest();
const trackSearchInput = 'track:';
const albumSearchInput = 'album:';
const artistSearchInput = 'artist:';
const userSearchInput = 'user:';
const nbOfUsersToShowSpecificSearch = 6;
const nbOfUsersToShowGlobalSearch = 1;

function isTrackSearch(input) {
  return input.substring(0, trackSearchInput.length) === trackSearchInput;
}

function isAlbumSearch(input) {
  return input.substring(0, albumSearchInput.length) === albumSearchInput;
}

function isArtistSearch(input) {
  return input.substring(0, artistSearchInput.length) === artistSearchInput;
}

function isUserSearch(input) {
  return input.substring(0, userSearchInput.length) === userSearchInput;
}

function getTrack(input) {
  return input.substring(trackSearchInput.length, input.length);
}

function getAlbum(input) {
  return input.substring(albumSearchInput.length, input.length);
}

function getArtist(input) {
  return input.substring(artistSearchInput.length, input.length);
}

function getUser(input) {
  return input.substring(userSearchInput.length, input.length);
}

export default {
  data() {
    return {
      searchInput: '',
      searchResults: [],
      searchUserResults: [],
      wrapperTypeArtist: 'artist',
      wrapperTypeCollection: 'collection',
      wrapperTypeTrack: 'track',
      wrapperTypeUser: 'user',
      limitSearchDropdownCount: 5,
      nbOfUsersToShows: 1
    };
  },
  props: {
    containerClass: String,
    inputClass: String,
    labelClass: String,
    idClearButton: String,
    idInput: String
  },
  methods: {
    search() {
      if (this.searchInput === '') {
        this.searchResults = [];
        this.searchUserResults = [];
      } else if (isTrackSearch(this.searchInput)) {
        searchAPIRequest.getTracks(getTrack(this.searchInput).trim(),
          this.limitSearchDropdownCount, this.searchSuccess,
          error => AuthentificationErrorHandler(this, this.searchFailed, error));
      } else if (isAlbumSearch(this.searchInput)) {
        searchAPIRequest.getCollections(getAlbum(this.searchInput).trim(),
          this.limitSearchDropdownCount, this.searchSuccess,
          error => AuthentificationErrorHandler(this, this.searchFailed, error));
      } else if (isArtistSearch(this.searchInput)) {
        searchAPIRequest.getArtists(getArtist(this.searchInput).trim(),
          this.limitSearchDropdownCount, this.searchSuccess,
          error => AuthentificationErrorHandler(this, this.searchFailed, error));
      } else if (isUserSearch(this.searchInput)) {
        this.searchResults = [];
        this.nbOfUsersToShows = nbOfUsersToShowSpecificSearch;
        searchAPIRequest.getUsers(getUser(this.searchInput).trim(),
          this.searchUserSuccess,
          error => AuthentificationErrorHandler(this, this.searchUserFailed, error));
      } else {
        searchAPIRequest.getResults(this.searchInput.trim(), this.limitSearchDropdownCount,
          this.searchSuccess,
          error => AuthentificationErrorHandler(this, this.searchFailed, error));

        this.nbOfUsersToShows = nbOfUsersToShowGlobalSearch;
        searchAPIRequest.getUsers(this.searchInput.trim(),
          this.searchUserSuccess,
          error => AuthentificationErrorHandler(this, this.searchUserFailed, error));
      }
    },
    onInputKeyUpHandler(event) {
      if (event.keyCode === 13) {
        this.redirectToResults();
        this.clearInputValue();
        const input = document.getElementById(this.idInput);
        input.blur();
      }
    },
    redirectToResults() {
      const trimedInput = this.searchInput.trim();
      let searchParam = `global=${encodeURIComponent(trimedInput)}`;
      if (isTrackSearch(trimedInput)) {
        const trackValue = getTrack(this.searchInput).trim();
        searchParam = `track=${encodeURIComponent(trackValue)}`;
      } else if (isAlbumSearch(trimedInput)) {
        const collectionValue = getAlbum(this.searchInput).trim();
        searchParam = `album=${encodeURIComponent(collectionValue)}`;
      } else if (isArtistSearch(trimedInput)) {
        const artistValue = getArtist(this.searchInput).trim();
        searchParam = `artist=${encodeURIComponent(artistValue)}`;
      } else if (isUserSearch(trimedInput)) {
        const userValue = getUser(this.searchInput).trim();
        searchParam = `user=${encodeURIComponent(userValue)}`;
      }
      this.$router.push(`/results?${searchParam}`);
    },
    searchSuccess(data) {
      this.searchResults = data.results;
    },
    searchFailed() {
      this.searchResults = [];
    },
    searchUserSuccess(data) {
      console.log(data);
      this.searchUserResults = data;
    },
    searchUserFailed() {
      this.searchUserResults = [];
    },
    clearInputValue: function clearInput() {
      this.searchInput = '';
      this.searchResults = [];
      this.searchUserResults = [];
    }
  },
  components: {
    'nav-search-result-track': NavSearchResultTrack,
    'nav-search-result-artist': NavSearchResultArtist,
    'nav-search-result-collection': NavSearchResultCollection,
    'nav-search-result': NavSearchResult
  }
};
