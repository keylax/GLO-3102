import * as APIRequestBuilder from './APIRequestBuilder';
import APIRequestBase from './APIRequestBase';

export default class PlaylistAPIRequest extends APIRequestBase {
  getResults(input, limit, setDataFunc, errorHandlerFunc) {
    const searchRequest = APIRequestBuilder.getSearchRequest(input, limit);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, searchRequest);
  }

  getTracks(name, limit, setDataFunc, errorHandlerFunc) {
    const searchTrackRequest = APIRequestBuilder.getSearchTrackRequest(name, limit);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, searchTrackRequest);
  }

  getCollections(name, limit, setDataFunc, errorHandlerFunc) {
    const searchCollectionRequest = APIRequestBuilder.getSearchCollectionRequest(name, limit);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, searchCollectionRequest);
  }

  getArtists(name, limit, setDataFunc, errorHandlerFunc) {
    const searchArtistRequest = APIRequestBuilder.getSearchArtistRequest(name, limit);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, searchArtistRequest);
  }

  getUsers(name, setDataFunc, errorHandlerFunc) {
    const searchUserRequest = APIRequestBuilder.getSearchUserRequest(name);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, searchUserRequest);
  }
}
