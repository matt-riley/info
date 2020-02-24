import {CollectionImgData} from './CollectionImgData';
export interface CollectionArtistData {
  description: string;
  genres: string[];
  id: string;
  images: CollectionImgData[];
  members: CollectionArtistMemberData[];
  name: string;
  releases: string[];
  urls: string[];
}

export interface CollectionArtistMemberData {
  id: number;
}
