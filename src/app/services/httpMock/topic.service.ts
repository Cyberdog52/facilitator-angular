import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Topic} from '../../model/topic/topic';
import {TOPICS} from "../../model/topic/mock-topics";
import {ITopicService} from "../../model/topic/ITopicService";

// @ts-ignore
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TopicService implements ITopicService {

  constructor() {
  }

  getTopics(): Observable<Topic[]> {
    return of(TOPICS);
  }

  createTopic(topic: any): Observable<any> {
    topic.id = uuidv4();
    TOPICS.push(topic);
    return of(topic.id);
  }

  getTopic(id: string): Observable<Topic> {
    return of(TOPICS.find(x => x.id == id) as Topic);
  }

  updateTopic(topic: Topic): Observable<any> {
    const index = TOPICS.findIndex(x => x.id == topic.id);
    TOPICS[index] = topic;
    return of({});
  }

  deleteTopic(id: string): Observable<any> {
    const index = TOPICS.findIndex(x => x.id == id);
    TOPICS.splice(index, 1);
    return of(0);
  }
}
