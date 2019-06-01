import { RESTDataSource } from 'apollo-datasource-rest';
import { LastFMRecentTrack, LastFMRecentTracksRootObject } from 'interfaces/lastfm_recent_tracks';

export default class LastFMAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://ws.audioscrobbler.com';
  }

  // public async getUserInfo(user: string): Promise<ILastFMUser> {
  //   const data: ILastFMUserRootObject = await this.get('2.0/', {
  //     method: 'user.getinfo',
  //     user,
  //   });
  //   return data.user;
  // }

  // public async getUserLovedTracks(user: string): Promise<ILastFMUserLovedtrack[]> {
  //   const data: ILastFMUserLovedTracksRootObject = await this.get('2.0/', {
  //     method: 'user.getlovedtracks',
  //     user,
  //   });
  //   return data.lovedtracks.track;
  // }

  public async getRecentTracks(user: string, { limit, page }: { limit: number, page: number }):
    Promise<LastFMRecentTrack[]> {
    const data: LastFMRecentTracksRootObject = await this.get('2.0/', {
      limit,
      method: 'user.getrecenttracks',
      page,
      user,
    });

    return data.recenttracks.track;
  }

  // public async getArtistInfo(mbid: string): Promise<ILastFMArtist> {
  //   const data: ILastFMArtistRootObject = await this.get('2.0/', {
  //     mbid,
  //     method: 'artist.getinfo',
  //   });

  //   return data.artist;
  // }

  public willSendRequest(request: any) {
    request.params.set('api_key', this.context.lastFMApiKey);
    request.params.set('format', 'json');
  }

}
