import { Component, OnInit, DoCheck ,Input} from '@angular/core';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
    selector: 'app-airtcle-item',
    template: `
    <app-item  *ngFor="let article of articles;let i=index"  [article]="article"></app-item>
    `,
    styles: [``]
})
export class ListAirtcleComponent implements OnInit,DoCheck {
    constructor(private articleService: ArticleService) { }
    articles: Article[] = [    ];
    // 实时监听数据数据 变化
    ngDoCheck(): void {
      if(this.articles && this.articles.length>2){
        this.articles.sort((a,b)=>b.votes-a.votes);
      }
    }
    getList(){
      this.articleService.list().then(articles=>this.articles = articles)
    }
    ngOnInit() { 
     this.getList()
    }
    addnewArticle(article: Article){
      this.articles.push(article);//添加文章
    }
    
}