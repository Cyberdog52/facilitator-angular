import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from '../topics/topic.service';
import { Topic } from '../../model/topic/topic';
import { MemberService } from '../members/member.service';
import { Member } from 'src/model/member/member';

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
    private topicService: TopicService,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.getTopic();
    this.getMembers();
  }

  getTopic(){
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.topicService.getTopic(id).subscribe(topic => this.getAssignee(topic));
  }

  getMembers(){
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  getAssignee(topic: Topic){
    this.topic = topic;
    this.memberService.getMember(topic.assigneeId).subscribe(member => this.assignee = member);
  }

  edit(){
    this.editing = true;
  }

  updateTopic(){
    this.editing = false;
    const updatedTopic = this.topic as Topic;
    this.topicService.updateTopic(updatedTopic.id, updatedTopic).subscribe(() => this.getTopic());
  }

  deleteTopic(){
    this.topicService.deleteTopic((this.topic as Topic).id).subscribe(() => this.router.navigateByUrl("/topics"));
  }
}
