export interface LastFMAttr {
  page: string;
  perPage: string;
  user: string;
  total: string;
  totalPages: string;
}

export interface LastFMImage {
  size: string;
  '#text': string;
}

export interface LastFMRecentTrackArtist {
  mbid: string;
  '#text': string;
}

export interface LastFMTrackAttr {
  nowplaying: string;
}

export interface LastFMAlbum {
  mbid: string;
  '#text': string;
}

export interface LastFMRecentTrack {
  artist: LastFMRecentTrackArtist;
  '@attr': LastFMTrackAttr;
  mbid: string;
  album: LastFMAlbum;
  streamable: string;
  url: string;
  name: string;
  image: LastFMImage[];
}

export interface LastFMRecentTracks {
  '@attr': LastFMAttr;
  track: LastFMRecentTrack[];
}

export interface LastFMRecentTracksRootObject {
  recenttracks: LastFMRecentTracks;
}
