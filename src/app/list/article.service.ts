import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Article } from './article';


@Injectable()
export class ArticleService {
  //注入http服务
  constructor(private http: HttpClient) { }
  // 1. 添加文章
  add(article: Article) {
    console.log('2');
    let url = 'http://localhost:8088/article/add';
    return new Promise(resolve => {
      this.http.post(url,article).subscribe(data => {
        //这里要用post  因为server.js中定义的add服务用的post方法
        resolve(1)  //成功返回1
      }, error => {
        console.error('出错了!', error);
        resolve(0)  //失败返回0
      });
    })
  }

  // 2. 查询文章
  // 3. 文章列表
  list(): Promise <Article[]> { //返回的是Promise对象
    /**普通的样子是 new Promise(resolve）{
     *                        resolve( 可以写数据)   }
     * this.http.get(url).subscribe(data => {
     *                           console.log(data)   }
     * 现在把上面两种结合起来变成一种，避免异步产生的页面在还没有请求到数据的情况下
     * 先跑完了  会返回undefined  也不能进行列表渲染  */
    let url = 'http://localhost:8088/article/list';
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => { //请求数据库 数据
        resolve(data as Article[]);//把返回的data 转换变成 Artice数组
      }, error => {
        console.error('出错了!', error);
      });
    });
  }
  // 4. 更新文章
  change(article: Article) {
    console.log('2');
    let url = 'http://localhost:8088/article/change';
    return new Promise(resolve => {
      this.http.post(url,article).subscribe(data => {       
        //这里要用post  因为server.js中定义的add服务用的post方法
        resolve(1)  //成功返回1
      }, error => {
        console.error('出错了!', error);
        resolve(0)  //失败返回0
      });
    })
  }
  // 5. 删除文章
}