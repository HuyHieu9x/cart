import { Component, ViewChild } from '@angular/core';
import { HeaderComponent} from './components/shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'shoppingCart';
  titleHeaderParent = 'HuyHieuNguyen02';

  @ViewChild(HeaderComponent)
  myChild!: HeaderComponent;

  onAddForChild(){
    this.myChild.value++;
  }
}
