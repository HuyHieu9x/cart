import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit { 
  name:string = '';
  color = 'skyblue';
  isHightlight = false;
  classByHieu = { circle : !this.isHightlight, square : this.isHightlight};
  styleByHieu = { color : 'red' , fontSize : '30px' };
  isShow = false;
  vi = '';
  en = '';
  filter = 'ALL';

  formSign!: FormGroup;

  value = 0;

  email = '';
  // password = '';

  today: number = Date.now();

  @Input() titleHeader = '';

  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
 
  toggleCircle(){
    this.isShow = !this.isShow;
  }

  add(){
    this.arrWords.unshift({
      id : this.arrWords.length + 1,
      en : this.en,
      vn : this.vi,
      memorized : false
    });
    this.vi = '';
    this.en = '';
  }

  del(id:number){
    const index = this.arrWords.findIndex(e => e.id === id);
    this.arrWords.splice(index,1);
  }

  onSubmit(){
    console.log(this.formSign);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSign = this.fb.group({
      email: ['',
          [ Validators.required ,
            Validators.minLength(4),
            Validators.email,
            gmailValidator
          ]         
      ],

      password: '',

      subject : this.fb.group({
        reactJS : false, 
        angular : true,
        nodeJS : false
      })
    }); 
  }
}

function gmailValidator(formControl:FormControl) {
  if(formControl.value.includes('@gmail.com')){
       return null; 
  }

  return { gmail : true };
}
