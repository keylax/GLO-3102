import $ from 'jquery';
import Materialize from 'materialize-css';
import NavSearchResult from '../../../components/Navigation/NavSearch/NavSearchResult';
import UserAPIRequest from '../../APIRequests/UserAPIRequest';

export default {
  data() {
    return {
      wrapperTypeArtist: 'artist',
      wrapperTypeCollection: 'collection',
      wrapperTypeTrack: 'track',
      wrapperTypeUser: 'user',
      enableLoadMore: true,
      enableAlbumCover: true,
      userAPIRequest: new UserAPIRequest()
    };
  },
  props: {
    groupIcon: String,
    groupTitle: String,
    wrapperType: String,
    results: Array,
    connectedUser: Object
  },
  components: {
    'nav-search-result': NavSearchResult
  },
  methods: {
    notifyLoadRequest() {
      this.$emit('loadMoreRequest');
    },
    setSelectedResult(result) {
      this.$emit('selectResult', result, this.wrapperType);
    },
    follow(user) {
      this.userAPIRequest.follow(user.id, this.successFollowHandlerFunc,
        this.errorFollowHandlerFunc);
    },
    isUserFollowed(user) {
      if (!this.connectedUser || !this.connectedUser.following) {
        return false;
      }
      const followedUsers = this.connectedUser.following;
      for (let i = 0; i < followedUsers.length; i += 1) {
        if (followedUsers[i].id === user.id) {
          return true;
        }
      }
      return false;
    },
    unfollow(user) {
      this.userAPIRequest.unfollow(user.id, this.successUnfollowHandlerFunc,
        this.errorUnfollowHandlerFunc);
    },
    successFollowHandlerFunc(user) {
      Materialize.toast('Succesfully followed user', 2000, 'green');
      this.$emit('update-user', user);
    },
    successUnfollowHandlerFunc(user) {
      Materialize.toast('Succesfully unfollowed user', 2000, 'green');
      this.$emit('update-user', user);
    },
    errorFollowHandlerFunc() {
      Materialize.toast("Couldn't follow  user", 2000, 'red');
    },
    errorUnfollowHandlerFunc() {
      Materialize.toast("Couldn't unfollow  user", 2000, 'red');
    }
  },
  watch: {
    results(oldResults, newResults) {
      this.enableLoadMore = (oldResults.length !== newResults.length);
    }
  },
  mounted() {
    $('.modal').modal();
  }
};
