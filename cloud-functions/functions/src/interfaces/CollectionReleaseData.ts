import {CollectionImgData} from './CollectionImgData';

export interface CollectionReleaseData {
  artists: CollectionReleaseArtistData[];
  country: string;
  format: CollectionReleaseFormatData[];
  genres: string[];
  id: string;
  images: CollectionImgData[];
  labels: CollectionReleaseLabelData[];
  styles: string[];
  tracks: CollectionReleaseTrackData[];
  videos: CollectionReleaseVideoData[];
  year: number;
}

export interface CollectionReleaseArtistData {
  id: string;
}

export interface CollectionReleaseFormatData {
  descriptions: string[];
  name: string;
  qty: string;
  text: string;
}

export interface CollectionReleaseLabelData {
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  name: string;
  resource_url: string;
}

export interface CollectionReleaseTrackData {
  duration: string;
  extraartists: CollectionReleaseTrackExtraArtistData[];
  position: string;
  title: string;
  type_: string;
}

export interface CollectionReleaseTrackExtraArtistData {
  anv: string;
  id: number;
  join: string;
  name: string;
  resource_url: string;
  role: string;
  tracks: string;
}

export interface CollectionReleaseVideoData {
  description: string;
  duration: number;
  embed: boolean;
  title: string;
  uri: string;
}
