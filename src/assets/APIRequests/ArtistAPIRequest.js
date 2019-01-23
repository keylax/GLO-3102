import * as APIRequestBuilder from './APIRequestBuilder';
import APIRequestBase from './APIRequestBase';

export default class ArtistAPIRequest extends APIRequestBase {
  getArtist(artistId, setDataFunc, errorHandlerFunc) {
    const artistRequest = APIRequestBuilder.getArtistRequest(artistId);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, artistRequest);
  }

  getArtistAlbums(artistId, setDataFunc, errorHandlerFunc) {
    const artistRequest = APIRequestBuilder.getArtistAlbumsRequest(artistId);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, artistRequest);
  }
}
