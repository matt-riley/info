import {CollectionImgData} from './CollectionImgData';
export interface CollectionLabelData {
  contactInfo: string;
  description: string;
  id: number;
  images: CollectionImgData[];
  name: string;
  sublabels: CollectionSubLabelData[];
  urls: string[];
}

export interface CollectionSubLabelData {
  id: number;
}
