import {Observable} from "rxjs";
import {Topic} from "./topic";

export interface ITopicService {
  getTopics(): Observable<Topic[]>;

  createTopic(topic: any): Observable<any>;

  getTopic(id: string): Observable<Topic>;

  updateTopic(id: string, topic: Topic): Observable<any>;

  deleteTopic(id: string): Observable<any>;
}
