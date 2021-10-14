import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/model/topic/topic';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: Topic[] = [];

  constructor(
    private topicService: TopicService,
  ) { }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(){
    this.topicService.getTopics().subscribe(topics => this.topics = topics);
  }

  addTopic(){
    const newTopic = { name: 'New Topic', role: 'unassigned' };
    this.topicService.createTopic(newTopic);
  }
}
