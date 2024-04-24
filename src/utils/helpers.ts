export const formatTime = (seconds: number | undefined) => {
  if (seconds !== undefined) {
    let mins = parseInt((seconds / 60).toString())
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }
};
