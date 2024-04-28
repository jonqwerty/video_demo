export const formatTime = (seconds: number | undefined | null) => {
  if (seconds !== undefined && seconds !== null) {
    let mins = parseInt((seconds / 60).toString())
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }
};
