import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-captcha',
  templateUrl: './generate-captcha.component.html',
  styleUrls: ['./generate-captcha.component.scss']
})
export class GenerateCaptchaComponent implements OnInit {

  constructor() { }

  char:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  captcha:string = ""
  captchalength:number = 6
  ngOnInit(): void {
    this.generateCaptcha()
  }

  generateCaptcha(){
    this.captcha = "";
    for(let i=0; i<this.captchalength;i++){
      let indexNum = Math.floor(Math.random() * this.char.length)
        this.captcha += this.char[indexNum]
    }
    return this.captcha
  }

  checkCaptcha(value:string){
    if(value === this.captcha){
      alert("Captcha matched succesfully")
      
    }else{
      alert("Captcha did not matched")

    }
    console.log(value);
    console.log(this.captcha);
    
    
  }


}
