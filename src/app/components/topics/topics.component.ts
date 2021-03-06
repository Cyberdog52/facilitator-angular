import {Component, Inject, OnInit} from '@angular/core';
import {Topic} from 'src/app/model/topic/topic';
import {Router} from "@angular/router";
import {ITopicService} from "../../model/topic/ITopicService";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: Topic[] = [];

  constructor(
    private router: Router,
    @Inject('ITopicService') private topicService: ITopicService
  ) {
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics() {
    this.topicService.getTopics().subscribe(topics => this.topics = topics);
  }

  addTopic() {
    const newTopic = {title: 'New Topic', description: 'Add topic description here...', assigneeId: null};
    this.topicService.createTopic(newTopic).subscribe((uuid) => this.router.navigate(["/topic/" + uuid, {editing: "true"}]));
  }

  deleteTopic(topic: Topic) {
    this.topics.splice(this.topics.indexOf(topic), 1);
    this.topicService.deleteTopic(topic.id);
  }
}
