import {Observable} from "rxjs";
import {Meeting} from "./meeting";

export interface IMeetingService {
  getMeetings(): Observable<Meeting[]>;

  createMeeting(meeting: any): Observable<any>;

  getMeeting(id: string): Observable<Meeting>;

  updateMeeting(meeting: Meeting): Observable<any>;

  deleteMeeting(id: string): Observable<any>;
}
