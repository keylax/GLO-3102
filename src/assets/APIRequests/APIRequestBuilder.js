function geturlAPI() {
  return 'https://ubeat.herokuapp.com';
}

export function getLoginRequest() {
  const urlAPI = geturlAPI();

  return `${urlAPI}/login`;
}

export function getTokenInfoRequest() {
  const urlAPI = geturlAPI();

  return `${urlAPI}/tokenInfo`;
}

export function getLogoutRequest() {
  const urlAPI = geturlAPI();

  return `${urlAPI}/logout`;
}

export function getAlbumRequest(id) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/albums/${id}`;
}

export function getAlbumTracksRequest(id) {
  const albumRequest = getAlbumRequest(id);

  return `${albumRequest}/tracks`;
}

export function getArtistRequest(id) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/artists/${id}`;
}

export function getArtistAlbumsRequest(id) {
  const artistRequest = getArtistRequest(id);

  return `${artistRequest}/albums`;
}

export function getPlaylistsRequest() {
  const urlAPI = geturlAPI();

  return `${urlAPI}/playlists`;
}

export function getPlaylistRequest(id) {
  const playlistRequest = getPlaylistsRequest();

  return `${playlistRequest}/${id}`;
}

export function getPlaylistTracksRequest(id) {
  const playlistRequest = getPlaylistRequest(id);

  return `${playlistRequest}/tracks`;
}

export function getPlaylistTrackRequest(playlistId, trackId) {
  const playlistTracksRequest = getPlaylistTracksRequest(playlistId);

  return `${playlistTracksRequest}/${trackId}`;
}

export function getSearchTrackRequest(name, limit) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/search/tracks?q=${name}&limit=${limit}`;
}

export function getSearchCollectionRequest(name, limit) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/search/albums?q=${name}&limit=${limit}`;
}

export function getSearchArtistRequest(name, limit) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/search/artists?q=${name}&limit=${limit}`;
}

export function getSearchUserRequest(name) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/search/users?q=${name}`;
}

export function getSearchRequest(input, limit) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/search?q=${input}&limit=${limit}`;
}

export function getSignupRequest() {
  const urlAPI = geturlAPI();

  return `${urlAPI}/signup`;
}

export function getUserRequest(id) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/users/${id}`;
}

export function getUsersRequest() {
  const urlAPI = geturlAPI();

  return `${urlAPI}/users/`;
}

export function getFollowRequest() {
  const urlAPI = geturlAPI();

  return `${urlAPI}/follow`;
}

export function getUnfollowRequest(id) {
  const urlAPI = geturlAPI();

  return `${urlAPI}/follow/${id}`;
}
