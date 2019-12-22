export interface DiscogsRelease {
  title: string;
  id: number;
  artists: DiscogsReleaseArtist[];
  data_quality: string;
  thumb: string;
  community: DiscogsReleaseCommunity;
  companies: DiscogsReleaseCompany[];
  country: string;
  date_added: string;
  date_changed: string;
  estimated_weight: number;
  extraartists: DiscogsReleaseArtist[];
  format_quantity: number;
  formats: DiscogsReleaseFormat[];
  genres: string[];
  identifiers: DiscogsReleaseIdentifier[];
  images: DiscogsReleaseImage[];
  labels: DiscogsReleaseLabel[];
  lowest_price: number;
  master_id: number;
  master_url: string;
  notes: string;
  num_for_sale: number;
  released: string;
  released_formatted: string;
  resource_url: string;
  series: string[];
  status: string;
  styles: string[];
  tracklist: DiscogsReleaseTrack[];
  uri: string;
  videos: DiscogsReleaseVideo[];
  year: number;
}

export interface DiscogsReleaseArtist {
  anv: string;
  id: number;
  join: string;
  name: string;
  resource_url: string;
  role: string;
  tracks: string;
}

export interface DiscogsReleaseCommunity {
  contributors: DiscogsReleaseContributor[];
  data_quality: string;
  have: number;
  rating: DiscogsReleaseRating;
  status: string;
  submitter: DiscogsReleaseContributor;
  want: number;
}

export interface DiscogsReleaseContributor {
  resource_url: string;
  username: string;
}

export interface DiscogsReleaseRating {
  average: number;
  count: number;
}

export interface DiscogsReleaseCompany {
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  name: string;
  resource_url: string;
}

export interface DiscogsReleaseFormat {
  descriptions: string[];
  name: string;
  qty: string;
}

export interface DiscogsReleaseIdentifier {
  type: string;
  value: string;
}

export interface DiscogsReleaseImage {
  height: number;
  resource_url: string;
  type: string;
  uri: string;
  uri150: string;
  width: number;
}

export interface DiscogsReleaseLabel {
  catno: string;
  entity_type: string;
  id: number;
  name: string;
  resource_url: string;
}

export interface DiscogsReleaseTrack {
  duration: string;
  position: string;
  title: string;
  type_: string;
}

export interface DiscogsReleaseVideo {
  description: string;
  duration: number;
  embed: boolean;
  title: string;
  url: string;
}
