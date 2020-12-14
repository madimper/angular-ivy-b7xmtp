import { Component, OnInit } from "@angular/core";
import { Comments } from "../comments";
import { CommentsService } from "../servicesApi";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  providers: [CommentsService],
  styleUrls: ["./lista.component.css"]
})
export class ListComponent implements OnInit {
  //comm: Comments = null;
  comments: Comments[];

  constructor(private commservice: CommentsService) {}

  ngOnInit() {
    this.getcomments();
  }

  getcomments(): void {
    this.commservice
      .getComments()
      .subscribe(comments => (this.comments = comments));
  }
}
