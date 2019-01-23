import qs from 'qs';
import Vue from 'vue';
import * as APIRequestBuilder from './APIRequestBuilder';
import APIRequestBase from './APIRequestBase';

export default class SignAPIRequest extends APIRequestBase {
  callBackSuccess(setDataFunc, data) {
    const token = data.token;
    this.setToken(token);
    setDataFunc(data);
  }

  signInWithToken(setDataFunc, onError) {
    if (this.tokenUser) {
      const tokenInfoRequest = APIRequestBuilder.getTokenInfoRequest();

      this.executeGetRequest(setDataFunc, onError, tokenInfoRequest);
    }
  }

  signin(userName, userPassword, setDataFunc, onError) {
    const loginRequest = APIRequestBuilder.getLoginRequest();

    const data = {
      email: userName,
      password: userPassword
    };

    Vue.axios.post(loginRequest, qs.stringify(data))
    .then(responseDatas => this.callBackSuccess(setDataFunc, responseDatas.data))
    .catch(error => onError(error));
  }

  // eslint-disable-next-line class-methods-use-this
  logout(onError) {
    const logoutRequest = APIRequestBuilder.getLogoutRequest();

    Vue.axios.get(logoutRequest).then(() => { this.deleteToken(); })
    .catch(error => onError(error));
  }

  signup(username, useremail, userpassword, setDataFunc, errorHandlerFunc) {
    const signupRequest = APIRequestBuilder.getSignupRequest();
    const data = {
      name: username,
      email: useremail,
      password: userpassword
    };

    Vue.axios.post(signupRequest, qs.stringify(data))
    .then(responseDatas => this.callBackSuccess(setDataFunc, responseDatas.data))
    .catch(error => errorHandlerFunc(error));
  }

}
