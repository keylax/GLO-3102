import $ from 'jquery';
import Materialize from 'materialize-css';
import UserAPIRequest from '../APIRequests/UserAPIRequest';
import Subscriber from '../../components/UserProfile/Subscriber';
import UserPlaylist from '../../components/UserProfile/UserPlaylist';
import AuthentificationErrorHandler from '../js/AuthentificationErrorHandler';
import PlaylistAPIRequest from '../APIRequests/PlaylistAPIRequest';

export default {
  name: 'user-profile',
  data() {
    return ({
      email: '',
      name: '',
      following: [],
      playlists: [],
      connectedUserId: '',
      connectedUserFollowers: []
    });
  },
  metaInfo() {
    return {
      title: `UBeat - ${this.name}`
    };
  },
  components: {
    Subscriber,
    UserPlaylist
  },
  mounted() {
    const api = new UserAPIRequest();

    api.getTokenInfo(this.setConnectedUser,
      error => AuthentificationErrorHandler(this, this.errorHandlerConnectedUserFunc, error));

    api.getUser(this.$route.params.valueOf().id, this.setDataFunc,
        error => AuthentificationErrorHandler(this, this.errorHandlerFunc, error));

    const apiPlayList = new PlaylistAPIRequest();

    apiPlayList.getPlaylists(this.$route.params.valueOf().id, this.setPlaylists,
        error => AuthentificationErrorHandler(this, this.errorHandlerPlayListFunc, error));
  },
  updated() {
    $(document).ready(() => {
      $('.tabs').tabs({ swipeable: false, responsiveThreshold: Infinity, onShow: this.updateTabSize });
    });
  },
  methods: {
    follow(id) {
      const api = new UserAPIRequest();
      api.follow(id, this.successFollowHandlerFunc,
        this.errorFollowHandlerFunc);
    },
    unfollow(id) {
      const api = new UserAPIRequest();
      api.unfollow(id, this.successUnfollowHandlerFunc,
        this.errorUnfollowHandlerFunc);
    },
    successFollowHandlerFunc() {
      Materialize.toast(`Succesfully Followed ${this.name}`, 2000, 'green');
      this.connectedUserFollowers.push(this.$route.params.valueOf().id);
    },
    successUnfollowHandlerFunc() {
      Materialize.toast(`Succesfully Unfollowed ${this.name}`, 2000, 'green');

      const index = this.connectedUserFollowers.indexOf(this.$route.params.valueOf().id);
      this.connectedUserFollowers.splice(index, 1);
    },
    errorFollowHandlerFunc() {
      Materialize.toast("Couldn't Follow Profile", 2000, 'red');
    },
    errorUnfollowHandlerFunc() {
      Materialize.toast("Couldn't Unfollow Profile", 2000, 'red');
    },
    updateTabSize() {
      setTimeout(() => {
        $('.carousel').css({ height: `${this.getCollectionSize()}px`, marginBottom: '5em' });
      }, 200);
      $('.collapsible').collapsible();
    },
    getCollectionSize() {
      let collectionItemSize = $(window).width();
      let headerSize = 50;

      if (collectionItemSize >= 1200) {
        collectionItemSize = 57;
        headerSize = 54;
      } else {
        collectionItemSize = 57;
      }

      if ($('.active.carousel-item').attr('id') === 'swipe-1') {
        return (this.following.length * collectionItemSize) + headerSize;
      }
      return (this.playlists * collectionItemSize) + headerSize;
    },
    setConnectedUser(data) {
      this.connectedUserId = data.id;

      const api = new UserAPIRequest();

      api.getUser(this.connectedUserId, this.setFollowers,
        error => AuthentificationErrorHandler(this, this.errorHandlerConnectedUserFollower, error));
    },
    setFollowers(data) {
      this.connectedUserFollowers = data.following.map(x => x.id);
    },
    errorHandlerConnectedUserFollower() {
      Materialize.toast("Couldn't Retrieve Connected User Followers", 2000, 'red');
    },
    errorHandlerConnectedUserFunc() {
      Materialize.toast("Couldn't Retrieve User Profile Id", 2000, 'red');
    },
    setPlaylists(data) {
      this.playlists = data;
    },
    errorHandlerPlayListFunc() {
      Materialize.toast("Couldn't Retrieve Playlist Of User", 2000, 'red');
    },
    setDataFunc(data) {
      this.email = data.email;
      this.name = data.name;
      this.following = data.following;
    },
    errorHandlerFunc() {
      Materialize.toast("Couldn't Retrieve User Profile", 2000, 'red');
    },
    followed(id) {
      this.connectedUserFollowers.push(id);
    },
    unfollowed(id) {
      const index = this.connectedUserFollowers.indexOf(id);
      this.connectedUserFollowers.splice(index, 1);
    },
    playtracks(tracks) {
      this.$emit('playMusic', tracks);
    }
  }
};
