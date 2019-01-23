import * as APIRequestBuilder from './APIRequestBuilder';
import APIRequestBase from './APIRequestBase';

export default class UserAPIRequest extends APIRequestBase {
  getUsers(setDataFunc, errorHandlerFunc) {
    const usersRequest = APIRequestBuilder.getUsersRequest();

    this.executeGetRequest(setDataFunc, errorHandlerFunc, usersRequest);
  }

  getUser(id, setDataFunc, errorHandlerFunc) {
    const usersRequest = APIRequestBuilder.getUserRequest(id);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, usersRequest);
  }

  follow(userID, setDataFunc, errorHandlerFunc) {
    const followRequest = APIRequestBuilder.getFollowRequest();

    const options = {
      id: userID
    };

    this.executePostRequest(setDataFunc, errorHandlerFunc, options, followRequest);
  }

  unfollow(id, setDataFunc, errorHandlerFunc) {
    const unfollowRequest = APIRequestBuilder.getUnfollowRequest(id);

    this.executeDeleteRequest(setDataFunc, errorHandlerFunc, {}, unfollowRequest);
  }
}
