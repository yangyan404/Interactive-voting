import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
// 引入Bootstrap组件
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//引入路由
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { CommontComponent } from './commont/commont.component';
import { ListAirtcleComponent } from './list/list-airtcle.component';
import { ListItemComponent } from './list/list-item.component';
import { ForbiddenUrlDirective } from './list/forbiddenUrl.directive';
import { ArticleService } from './list/article.service';


// 定义路由映射关系
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'list', component: CommontComponent},
  { path: '**', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    CommontComponent,
    ListAirtcleComponent,
    ListItemComponent,
    ForbiddenUrlDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot() //一次性全部引入
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
