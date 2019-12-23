export interface DiscogsArtistResponse {
  profile: string;
  releases_url: string;
  name: string;
  uri: string;
  members: DiscogsArtistMember[];
  urls: string[];
  images: DiscogsArtistImage[];
}

export interface DiscogsArtistMember {
  active: boolean;
  resource_url: string;
  id: number;
  name: string;
}

export interface DiscogsArtistImage {
  uri: string;
  height: number;
  width: number;
  resource_url: string;
  type: "primary" | "secondary";
  uri150: string;
}
