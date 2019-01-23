import Vue from 'vue';
import * as CookiesManager from '../CookiesManager/CookiesManager';
import * as APIRequestBuilder from './APIRequestBuilder';

export default class APIRequestBase {
  constructor() {
    this.tokenUser = CookiesManager.getTokenValue();
  }

  getTokenInfo(setDataFunc, onError) {
    const tokenInfoRequest = APIRequestBuilder.getTokenInfoRequest();
    this.executeGetRequest(setDataFunc, onError, tokenInfoRequest);
  }

  setToken(token) {
    if (token) {
      CookiesManager.setTokenValue(token);
      this.tokenUser = token;
    }
  }

  deleteToken() {
    CookiesManager.deleteToken();
    this.tokenUser = undefined;
  }

  getTokenHeader() {
    if (!this.tokenUser) {
      this.tokenUser = CookiesManager.getTokenValue();
      if (!this.tokenUser) {
        return {};
      }
    }
    return {
      headers: {
        Authorization: `${this.tokenUser}`
      }
    };
  }

  executeGetRequest(setDataFunc, errorHandlerFunc, getRequest) {
    const options = this.getTokenHeader();
    Vue.axios.get(getRequest, options)
      .then(responseDatas => setDataFunc(responseDatas.data))
      .catch(error => errorHandlerFunc(error));
  }

  executePostRequest(setDataFunc, errorHandlerFunc, datas, postRequest) {
    const options = this.getTokenHeader();
    Vue.axios.post(postRequest, datas, options)
      .then(responseDatas => setDataFunc(responseDatas.data))
      .catch(error => errorHandlerFunc(error));
  }

  executePutRequest(setDataFunc, errorHandlerFunc, datas, putRequest) {
    const options = this.getTokenHeader();
    Vue.axios.put(putRequest, datas, options)
      .then(responseDatas => setDataFunc(responseDatas.data))
      .catch(error => errorHandlerFunc(error));
  }

  executeDeleteRequest(setDataFunc, errorHandlerFunc, datas, deleteRequest) {
    const options = this.getTokenHeader();
    Vue.axios.delete(deleteRequest, options, datas)
      .then(responseDatas => setDataFunc(responseDatas.data))
      .catch(error => errorHandlerFunc(error));
  }
}
