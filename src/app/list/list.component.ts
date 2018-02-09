import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() addArticle = new EventEmitter();
  @Output() updateArticleList = new EventEmitter();  //把commont页面的方法引进来
  @Output() up = new EventEmitter();  //把commont页面的方法引进来
  article: Article = { title: '', url: '', votes: 0 };
  constructor(private articleService: ArticleService) { }
  ngOnInit() {
  
  }
  add() {  //在form里面校验数据
    console.log(this.article);
    // this.addArticle.emit(this.article);// 传入文章
    console.log('1');
    this.articleService.add(this.article).then(result=>{
      if(result === 1){
      //  this.article = { title: '', url: '',votes:this.article.votes };//重置
//         //触发list更新
        this.updateArticleList.emit();
        this.article = { title: '', url: '',votes:this.article.votes };//重置
      }     
    });
  }

}
