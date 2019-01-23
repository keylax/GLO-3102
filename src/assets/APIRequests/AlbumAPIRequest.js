import * as APIRequestBuilder from './APIRequestBuilder';
import APIRequestBase from './APIRequestBase';

export default class AlbumAPIRequest extends APIRequestBase {
  getAlbum(albumId, setDataFunc, errorHandlerFunc) {
    const albumRequest = APIRequestBuilder.getAlbumRequest(albumId);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, albumRequest);
  }

  getAlbumTracks(albumId, setDataFunc, errorHandlerFunc) {
    const albumRequest = APIRequestBuilder.getAlbumTracksRequest(albumId);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, albumRequest);
  }
}
