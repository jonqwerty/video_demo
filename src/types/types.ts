export interface IData {
  sectionOrder: string[];
  movies: IMovieItem[];
}

export interface IEpisodeItem {
  id: number;
  title: string;
  videoURI: string;
}

export interface IMovieItem {
  id: number;
  trendingNow: boolean;
  top: boolean;
  coming: string | null;
  title: string;
  year: string;
  runtime: string;
  genres: string;
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
  episodes: IEpisodeItem[];
}

export interface IEpisodeTimeItem {
  episodeId: number;
  progress: number;
}

export interface IContinueWatchingWithTime {
  movieId: number;
  episodes: IEpisodeTimeItem[];
}
