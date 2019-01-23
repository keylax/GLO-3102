import * as APIRequestBuilder from './APIRequestBuilder';
import APIRequestBase from './APIRequestBase';

let connectedUserID;
let connectedUserPlaylists = [];

function filterPlaylists(data) {
  const playlists = data;
  for (let i = 0; i < playlists.length; i += 1) {
    if (playlists[i].owner !== undefined) {
      if (playlists[i].owner.id === connectedUserID) {
        connectedUserPlaylists.push(playlists[i]);
      }
    }
  }
}

export default class PlaylistAPIRequest extends APIRequestBase {
  getPlaylists(userid, setDataFunc, errorHandlerFunc) {
    connectedUserID = '';
    connectedUserPlaylists = [];
    connectedUserID = userid;
    const playlistsRequest = APIRequestBuilder.getPlaylistsRequest();

    this.executeGetRequest(filterPlaylists, errorHandlerFunc, playlistsRequest);
    setDataFunc(connectedUserPlaylists);
  }

  getPlaylist(playlistId, setDataFunc, errorHandlerFunc) {
    const playlistRequest = APIRequestBuilder.getPlaylistRequest(playlistId);

    this.executeGetRequest(setDataFunc, errorHandlerFunc, playlistRequest);
  }

  addPlaylist(playlistName, setDataFunc, errorHandlerFunc) {
    const playlistRequest = APIRequestBuilder.getPlaylistsRequest();

    const options = {
      name: playlistName
    };

    this.executePostRequest(setDataFunc, errorHandlerFunc, options, playlistRequest);
  }

  addPlaylistWithOwner(playlistName, playlistOwner, setDataFunc, errorHandlerFunc) {
    const playlistRequest = APIRequestBuilder.getPlaylistsRequest();

    const options = {
      name: playlistName,
      owner: playlistOwner
    };

    this.executePostRequest(setDataFunc, errorHandlerFunc, options, playlistRequest);
  }

  modifyPlaylist(playlist, setDataFunc, errorHandlerFunc) {
    const playlistRequest = APIRequestBuilder.getPlaylistRequest(playlist.id);

    const options = {
      name: playlist.name,
      owner: playlist.owner,
      tracks: playlist.tracks
    };

    this.executePutRequest(setDataFunc, errorHandlerFunc, options, playlistRequest);
  }

  modifyPlaylistWithOwner(playlistId, playlistName, playlistOwner, setDataFunc, errorHandlerFunc) {
    const playlistRequest = APIRequestBuilder.getPlaylistRequest(playlistId);

    const options = {
      name: playlistName,
      owner: playlistOwner
    };

    this.executePutRequest(setDataFunc, errorHandlerFunc, options, playlistRequest);
  }

  deletePlaylist(playlistId, setDataFunc, errorHandlerFunc) {
    const playlistRequest = APIRequestBuilder.getPlaylistRequest(playlistId);

    this.executeDeleteRequest(setDataFunc, errorHandlerFunc, {}, playlistRequest);
  }

  addTrackToPlaylist(playlistId, track, setDataFunc, errorHandlerFunc) {
    const playlistRequest = APIRequestBuilder.getPlaylistTracksRequest(playlistId);

    const options = track;

    this.executePostRequest(setDataFunc, errorHandlerFunc, options, playlistRequest);
  }

  deleteTrackFromPlaylist(playlistId, trackId, setDataFunc, errorHandlerFunc) {
    const playlistRequest = APIRequestBuilder.getPlaylistTrackRequest(playlistId, trackId);

    this.executeDeleteRequest(setDataFunc, errorHandlerFunc, {}, playlistRequest);
  }
}
