import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';


@Component({
    selector: 'app-item',
    template: `
    <div class="row item">
    <div class="col-3 bg-success votes">
      <h1>{{article.votes}}</h1>
    </div>
    <div class="col-9">
      <div class="row">
        <h5 class="col-12">{{article.title}}</h5>
        <p class="col-12 small text-primary">{{article.url}}</p>
      </div>
      <div class="row">
        <div class="col">
          <button type="button"  (click)="change(i)"  class="btn btn-outline-secondary">
            <label class="small">
              <i class="fas fa-thumbs-up"></i> 支持</label>
          </button>
        </div>
        <div class="col">
          <button type="button" (click)="down()"  class="btn btn-outline-secondary">
            <label class="small">
              <i class="far fa-thumbs-down"></i> 反对</label>
          </button>
        </div>
      </div>
    </div>
  </div>
    `,
    styles: [`
    .item {
        border: 1px solid #28a745;
        padding: 0;
        margin-bottom: 15px;
      }
    
      .votes {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
      .row:not(.item) {
        padding: 15px 0;
      }
    `]
})
export class ListItemComponent implements OnInit {

  @Input() article: Article;
  // articles: Article[] = [    ];
  // article: Article = { title: '', url: '', votes: 0 };
  @Output() updateArticleList = new EventEmitter();  //把commont页面的方法引进来
    constructor(private articleService: ArticleService) { }
 
    ngOnInit() { }
      //支持
  change(key){
    this.article.votes  ++  ;
    // this.articleService.change(this.article).then(this.article.votes=> this. article.votes = this.article.votes )
  
    //触发list更新
    this.updateArticleList.emit();
  }

  down(){
    // 方案1
    if(this.article.votes>0){
      this.article.votes --;
    }
    console.log(this.article.votes);
    //触发list更新
    // this.updateArticleList.emit();
    // 方案2
    //if(this.article.votes) this.article.votes --;
    // 方案3
    // this.article.votes = Math.max(--this.article.votes, 0);
  }
}