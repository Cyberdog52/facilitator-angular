import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/model/topic/topic';
import { TopicService } from '../../services/http/topic.service';

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
    const newTopic = { title: 'New Topic', description: 'Add topic description here...', assigneeId: '1' };
    this.topicService.createTopic(newTopic).subscribe(() => this.getTopics());
  }
}
