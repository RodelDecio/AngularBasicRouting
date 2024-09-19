import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import { FormsModule } from "@angular/forms";

const routes: Routes =[
  {path:'',component: DisplayhelloworldComponent},

]

@NgModule({
  imports: [

    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    DisplayhelloworldComponent,

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule {}
