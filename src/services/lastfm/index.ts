import { RESTDataSource } from 'apollo-datasource-rest';
import { LastFMRecentTrack, LastFMRecentTracksRootObject } from '../../interfaces/lastfm_recent_tracks';

export default class LastFMAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://ws.audioscrobbler.com';
  }

  public async getRecentTracks({ limit, page }: { limit?: number, page?: number }):
    Promise<LastFMRecentTrack[]> {
    const data: LastFMRecentTracksRootObject = await this.get('2.0/', {
      limit,
      method: 'user.getrecenttracks',
      page,
      user: process.env.LASTFM_USER,
    });

    return data.recenttracks.track;
  }

  public willSendRequest(request: any) {
    request.params.set('api_key', this.context.LastFMKey);
    request.params.set('format', 'json');
  }

}
