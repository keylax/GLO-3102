import Materialize from 'materialize-css';

export default {
  data() {
    return {
      audio: new Audio(''),
      trackPlayTimeDisplay: '',
      trackDurationDisplay: '',
      trackPlayTime: 0.0,
      trackDuration: 0.0,
      playPauseIcon: 'pause',
      isErrorFuncDefined: false
    };
  },
  props: {
    track: {
      artistName: String,
      coverImage: String,
      previewUrl: String,
      trackName: String
    },
    nbTracksInQueue: Number
  },
  watch: {
    track(newTrack) {
      this.playPauseIcon = 'pause';
      this.audio.src = newTrack.previewUrl;
      this.setFuncOnError();
      this.audio.play();
      this.audio.addEventListener('timeupdate', () => {
        this.trackPlayTime = this.audio.currentTime;
        this.trackDuration = this.audio.duration;
        this.trackPlayTimeDisplay = this.formatSecondes(this.trackPlayTime.toString());
        this.trackDurationDisplay = this.formatSecondes(this.trackDuration.toString());
        if (this.audio.currentTime === this.audio.duration) {
          this.endTrackPlay();
        }
      });
    }
  },
  methods: {
    formatSecondes(seconds) {
      const secondStringFormat = seconds.toString();
      const splitSeconds = secondStringFormat.split('.');

      if (splitSeconds.length < 1) {
        return secondStringFormat;
      }

      const completeSeconds = splitSeconds[0];

      if (completeSeconds.length === 1) {
        return `00:0${completeSeconds}`;
      }

      if (completeSeconds === 'NaN') {
        return '00:00';
      }

      return `00:${completeSeconds}`;
    },
    pausePlayHandler() {
      if (this.playPauseIcon === 'pause') {
        this.playPauseIcon = 'play_arrow';
        this.audio.pause();
      } else {
        this.playPauseIcon = 'pause';
        this.audio.play();
      }
    },
    isEmptyTrack(track) {
      return track.artistName === '' &&
             track.coverImage === '' &&
             track.previewUrl === '' &&
             track.trackName === '';
    },
    stopHandler() {
      this.$emit('stopPlaylist');
      this.skipHandler();
    },
    skipHandler() {
      this.audio.currentTime = this.audio.duration;
    },
    endTrackPlay() {
      this.$emit('musicEnded');
    },
    modifyProgressionValue(event) {
      const progressionBar = event.target;
      const selectedTime = (event.pageX - progressionBar.offsetLeft) * (progressionBar.max / progressionBar.offsetWidth);
      this.audio.currentTime = selectedTime;
    },
    setFuncOnError() {
      if (!this.isErrorFuncDefined) {
        this.audio.onerror = () => {
          this.endTrackPlay();
          Materialize.toast(`Couldn't play track ${this.track.trackName}`, 2000, 'red');
        };
        this.isErrorFuncDefined = true;
      }
    }
  }
};
