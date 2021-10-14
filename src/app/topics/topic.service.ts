import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Topic } from '../../model/topic/topic';
import { TOPICS } from 'src/model/topic/mock-topics';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  private topicsURL = 'https://lambda-facilitator-backend.herokuapp.com/api/topics';
  
  getTopics(): Observable<Topic[]>{
    return this.http.get<Topic[]>(this.topicsURL);
  }

  createTopic(topic: any){
    this.http.post(this.topicsURL, topic);
  }

  getTopic(id: number): Observable<Topic> {
    return this.http.get<Topic>(this.topicsURL+'/'+id);
  }

  updateTopic(id: number, topic: Topic){
    this.http.put(this.topicsURL+'/'+id, topic);
  }

  deleteTopic(id: number){
    this.http.delete(this.topicsURL+'/'+id);
  }
}
