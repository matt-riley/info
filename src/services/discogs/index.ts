import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { DiscogsRelease } from '../../interfaces/discogs_release';
import admin from '../../utils/firebase';

export default class DiscogsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.discogs.com';
  }

  public async addRelease(id: string) {
    const discogsData: DiscogsRelease = await this.get(`/releases/${id}`);
    const saveReleaseData = {
      artists: discogsData.artists.map((artist) => {
        return {
          id: artist.id.toString(),
        };
      }),
      country: discogsData.country,
      format: discogsData.formats,
      genres: discogsData.genres,
      id,
      images: discogsData.images,
      labels: discogsData.labels,
      styles: (discogsData.styles) ? discogsData.styles : [''],
      title: discogsData.title,
      tracks: discogsData.tracklist,
      videos: discogsData.videos,
      year: discogsData.year,
    };

    await admin.firestore().collection('releases').doc(discogsData.id.toString()).set(saveReleaseData);
    return {
      artists: discogsData.artists.map((artist) => {
        return {
          id: artist.id.toString(),
          name: artist.name,
        };
      }),
      id: discogsData.id.toString(),
      title: discogsData.title,
    };
  }

  public willSendRequest(request: RequestOptions) {
    request.headers.set('user-agent', 'MusicMattRiley/0.1');
    request.params.set('key', this.context.DiscogsKey);
    request.params.set('secret', this.context.DiscogsSecret);
  }
}
