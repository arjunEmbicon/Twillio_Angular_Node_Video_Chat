import { connect, ConnectOptions, LocalTrack, Room } from "twilio-video";
import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ReplaySubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

interface AuthToken {
  token: string;
}

export interface NamedRoom {
  id: string;
  name: string;
  maxParticipants?: any;
  participantCount: number;
}

export type Rooms = NamedRoom[];
const APIENDPOINT = environment.APIENDPOINT;
@Injectable()
export class VideoChatService implements OnDestroy {
  $roomsUpdated: Observable<boolean>;

  private roomBroadcast = new ReplaySubject<boolean>();

  constructor(private readonly http: HttpClient) {
    this.$roomsUpdated = this.roomBroadcast.asObservable();
  }

  ngOnDestroy(): void {
    if (this.roomBroadcast) {
      this.roomBroadcast.unsubscribe();
    }
  }

  private async getAuthToken() {
    const auth = await this.http
      .get<AuthToken>(APIENDPOINT + "video-token")
      .toPromise();
    return auth.token;
  }

  getAllRooms() {
    return this.http.get<Rooms>(APIENDPOINT + "get-all-rooms").toPromise();
  }

  async joinOrCreateRoom(name: string, tracks: LocalTrack[]) {
    let room: Room = null;
     
    try {
      const token = await this.getAuthToken();
        
      room = await connect(token, {
        name,
        tracks,
        dominantSpeaker: true,
      } as ConnectOptions);
   
    } catch (error) {
     
      console.error(`Unable to connect to Room: ${error.message}`);
    } finally {
      if (room) {
        this.roomBroadcast.next(true);
      }
    }
    console.log(room,"room");
    return room;
  }

  nudge() {
    this.roomBroadcast.next(true);
  }
}
