import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-navbar',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class NavbarComponent  {
 Qcurrent:number;
 Qtarget:number;
 Vcurrent:number;
 Vtarget:number;
 totalCS:number;
 totalTS:number;
TCP:number;
TTP:number;
QCP:number;
QTP:number;
VCP:number;
VTP:number;
QD:number;
VD:number;
TD:number;
hide:boolean =true;
higher:string;
qhigher:String;
vhigher:string;

  constructor(){
    

  }

  onClick(){
    this.totalCS = 200 + (this.Qcurrent + this.Vcurrent) *5;
    this.totalTS = 200 + (this.Qtarget + this.Vtarget) *5;
    this.TCP =(this.totalCS / 800 )*100;
    this.TTP =(this.totalTS / 800 )*100;
    this.TTP = this.TTP - this.TCP;
    this.QD = ( this.Qtarget - this.Qcurrent);
    this.VD = (this.Vtarget - this.Vcurrent);
    this.TD = (this.totalTS - this.totalCS);
    this.hide = false;
    this.QCP=(this.Qcurrent / 60) *100;
    this.QTP=(this.Qtarget / 60) *100;
    this.QTP = this.QTP - this.QCP;
    this.VCP=(this.Vcurrent / 60) *100;
    this.VTP=(this.Vtarget / 60) *100;
    this.VTP = this.VTP - this.VCP;
    console.log(this.Qcurrent);
    console.log(this.Qtarget);
    console.log(this.Vcurrent);
    console.log(this.Vtarget);
    console.log(this.totalCS);
    console.log(this.totalTS);
    console.log(this.TCP);
    console.log(this.TTP);
    console.log(this.QD);
    console.log(this.VD);
    console.log(this.QCP);
    console.log(this.QTP);
    console.log(this.VCP);
    console.log(this.VTP);
    if(this.TTP > 0){
      this.higher="which is"+" " + this.TD+ "points lower than your target GMAT score  out of "+ this.totalTS
    }else if(this.TTP===0){
      this.higher="which is equal to your target score"
    }
    else{
      this.higher="which is"+" " + Math.abs(this.TD)+"points higher than your target GMAT score out of "+this.totalTS
    }

    if(this.QTP > 0){
      this.qhigher="which is"+" " + this.QD+ "points lower than your target GMAT score  out of Q"+ this.Qtarget
    }else if(this.QTP===0){
      this.qhigher="which is equal to your target score"
    }
    else{
      this.qhigher="which is"+" " +Math.abs(this.QD)+ "points higher than your target GMAT score  out of Q"+ this.Qtarget
    }

    if(this.VTP > 0){
      this.vhigher="which is"+" " + this.VD+ "points lower than your target GMAT score  out of V"+ this.Vtarget
    }else if(this.VTP===0){
      this.vhigher="equal to your target score"
    }
    else{
      this.vhigher="which is"+" " + Math.abs(this.VD)+ "points higher than your target GMAT score  out of V"+ this.Vtarget
    }
    
      
  }
  tcp(){
      return this.TCP+"%";
  }
  ttp(){
    if(this.TD >0){
    return this.TTP+"%";
    }else{
      return 0+"%";
    }
}
qcp(){
  return this.QCP+"%";
}
qtp(){
  if(this.QD >0){
    return this.QTP+"%";
    }else{
      return 0+"%";
    }
}
vcp(){
  return this.VCP+"%";
}
vtp(){
  if(this.VD >0){
    return this.VTP+"%";
    }else{
      return 0+"%";
    }
}


 
 ngOnInit() {
    

}
  

}
