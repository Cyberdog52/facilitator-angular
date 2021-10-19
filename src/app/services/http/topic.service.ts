import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Topic} from '../../model/topic/topic';
import {ITopicService} from "../../model/topic/ITopicService";

@Injectable({
  providedIn: 'root'
})
export class TopicService implements ITopicService {

  constructor(private http: HttpClient) {
  }

  private topicsURL = 'https://lambda-facilitator-backend.herokuapp.com/api/topics';

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.topicsURL);
  }

  createTopic(topic: any): Observable<any> {
    return this.http.post(this.topicsURL, topic, {responseType: 'text'});
  }

  getTopic(id: string): Observable<Topic> {
    return this.http.get<Topic>(this.topicsURL + '/' + id);
  }

  updateTopic(topic: Topic): Observable<any> {
    return this.http.put(this.topicsURL, topic);
  }

  deleteTopic(id: string): Observable<any> {
    return this.http.delete(this.topicsURL + '/' + id);
  }
}
