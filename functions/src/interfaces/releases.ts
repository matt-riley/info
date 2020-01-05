export interface Releases {
  artists: ReleaseArtist[];
  country: string;
  format: ReleaseFormat[];
  genres: string[];
  id: string;
  images: ReleaseImage[];
  labels: ReleaseLabel[];
  styles: string[];
  title: string;
  tracks: ReleaseTrack[];
  videos: ReleaseVideo[];
  year: number;
}

export interface ReleaseArtist {
  id: string;
}

export interface ReleaseFormat {
  descriptions: string[];
  name: string;
  qty: string;
  text: string;
}

export interface ReleaseImage {
  height: number;
  resource_url: string;
  type: string;
  uri: string;
  uri150: string;
  width: number;
}

export interface ReleaseLabel {
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  name: string;
  resource_url: string;
}

export interface ReleaseTrack {
  duration: string;
  position: string;
  title: string;
  type_: string;
}

export interface ReleaseVideo {
  description: string;
  duration: number;
  embed: boolean;
  title: string;
  uri: string;
}
