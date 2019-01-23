const state = { muted: true };

export default {
  methods: {
    muteUnmute() {
      state.muted = !state.muted;
      const myVideo = document.getElementById('UBeatVideo');
      myVideo.muted = state.muted;

      const button = document.getElementById('videoMuteUnmuteIcon');
      if (state.muted) {
        button.innerHTML = 'volume_off';
      } else {
        button.innerHTML = 'volume_up';
      }
    }
  }
};
