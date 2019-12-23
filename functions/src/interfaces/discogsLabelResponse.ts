export interface DiscogsLabelSublabel {
  resource_url: string;
  id: number;
  name: string;
}

export interface DiscogsLabelImage {
  height: number;
  resource_url: string;
  type: string;
  uri: string;
  uri150: string;
  width: number;
}

export interface DiscogsLabelResponse {
  profile: string;
  releases_url: string;
  name: string;
  contact_info: string;
  uri: string;
  sublabels: DiscogsLabelSublabel[];
  urls: string[];
  images: DiscogsLabelImage[];
  resource_url: string;
  id: number;
  data_quality: string;
}
