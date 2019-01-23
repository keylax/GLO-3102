import Materialize from 'materialize-css';
import UserAPIRequest from '../../assets/APIRequests/UserAPIRequest';

export default {
  name: 'subscriber',
  props: ['name', 'email', 'id', 'connectedUserId', 'connectedUserFollowers'],
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
      this.$emit('followed', this.id);
    },
    successUnfollowHandlerFunc() {
      Materialize.toast(`Succesfully Unfollowed ${this.name}`, 2000, 'green');
      this.$emit('unfollowed', this.id);
    },
    errorFollowHandlerFunc() {
      Materialize.toast("Couldn't Follow Profile", 2000, 'red');
    },
    errorUnfollowHandlerFunc() {
      Materialize.toast("Couldn't Unfollow Profile", 2000, 'red');
    }
  }
};
