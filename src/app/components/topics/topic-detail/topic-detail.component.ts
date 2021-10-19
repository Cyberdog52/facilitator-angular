import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Topic} from '../../../model/topic/topic';
import {Member} from 'src/app/model/member/member';
import {ITopicService} from "../../../model/topic/ITopicService";
import {IMemberService} from "../../../model/member/IMemberService";

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  topic?: Topic;
  assignee?: Member;
  members: Member[] = [];
  editing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('ITopicService') private topicService: ITopicService,
    @Inject('IMemberService') private memberService: IMemberService
  ) {
  }

  ngOnInit(): void {
    this.getTopic();
    this.getMembers();
  }

  getTopic() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.editing = this.route.snapshot.paramMap.get('editing') == "true";
    this.topicService.getTopic(id).subscribe(topic => this.getAssignee(topic));
  }

  getMembers() {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  getAssignee(topic: Topic) {
    this.topic = topic;
    this.memberService.getMember(topic.assigneeId).subscribe(member => this.assignee = member);
  }

  edit() {
    this.editing = true;
  }

  updateTopic() {
    this.editing = false;
    const updatedTopic = this.topic as Topic;
    this.topicService.updateTopic(updatedTopic.id, updatedTopic).subscribe(() => this.getTopic());
  }

  deleteTopic() {
    this.topicService.deleteTopic((this.topic as Topic).id).subscribe(() => this.router.navigateByUrl("/topics"));
  }
}
