import { Component, OnInit, ViewChild } from '@angular/core';
import { ListAirtcleComponent } from '../list/list-airtcle.component';
import { Article } from '../list/article';

@Component({
  selector: 'app-commont',
  templateUrl: './commont.component.html',
  styleUrls: ['./commont.component.css']
})
export class CommontComponent implements OnInit {
  @ViewChild(ListAirtcleComponent)
  private articleList: ListAirtcleComponent;
  constructor() { }

  ngOnInit() {
  }
  //获取新添加的文章数据
  onaddArticle(article: Article) {
    console.log('comment组件接收到了数据!', article);
    //把数据添加到list组件中
    this.articleList.addnewArticle(article);
  }

  onupdateArticleList(){
    this.articleList.getList();//触发更新
  }

}
