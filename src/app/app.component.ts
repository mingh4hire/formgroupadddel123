import { Component } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  fg : FormGroup;
  add(){
    alert('asdf');
    (this.fg.get('a') as FormArray ).push(this.fb.group({
      b: [11, Validators.max(3000)]
    }))
  }

  delete(i){
        (this.fg.get('a') as FormArray ).removeAt(i);
 
  }


  constructor(private fb : FormBuilder){
   this.fg= this.fb.group({
      a: this.fb.array(
        [
           this.fb.group  ({
          b:  [23, Validators.max(300)]
        }),
                   this.fb.group  ({
          b:  [23, Validators.max(300)]
        })
         
,
           this.fb.group  ({
          b:  [23, Validators.max(300)]
        })
         

         
        
        ]

      )
    }
    );
  }
}
