##GMAT_SCORE_BAR!##

##About
 This project is about a page represents a high-level score overview of a test containing two sections
Quant and Verbal.
##Content

intial[
--> contains four input text box
       .Quant current
       .Quant target 
       .Verbal current
       .Verbal target 
--> (submit and refresh) button
]
Processed[
-->contains three horizontal bar 
-->graphs represent three different scores      (Total,Quant,Verbal).
-->bar show's the different between the current score and    targeted score. 
]
##Implementation
1.use CLI to go to master dir.
2.use ng serve to connect to localhost;
3.connect to the local host 4200;
4.project is displayed.
##Problem statements
1. implementation of UI as shown in psd file.
2. about page.
3. approch to problem:
  
            
	Base line : Grey (#f5f5f5)
	Current Score: Blue (#ffe28a)
	Target Score: Yellow (#0fa2eb)
solution 3:
	code:
	       <div class="progress-bar" style="background-	color: #0fa2eb" [style.width]="vcp()" >
                         
	       </div>
	       <div class="progress-bar" style="background-	color: #ffe28a; color:black" [style.width]="vtp()">
                         {{VD}}
       </div>.

3.1 INPUT VALIDATIONS:
                    Verbal score: Verbal score should be an                        integer between 1 and    
                    Quant score: Quant score should be an                     integer between 1 and 60.
solution 3.1:
          code: min="1" max="60" maxlength="2" pattern="[1-6]                [0-9]" required 
          explain:the above code allows only input range from                   1 to 60.
4. WORKFLOW OF THE UI:
		Once you enter the scores and click on the 		Submit and Refresh button, you should see the
		Graphs section on the same page below this 		button. Which shows your report in the graphs
		and appropriate feedback for the same. Hence, 		the complete UI after submission should
		look like as shown in the image below .
solution 4:the UI as been made as per the constraints below code hide the bar's before clicking Submit and Refresh button,and show the bar graph after clicking.
code:
        * hide:boolean =true;
 
	* <button class="btn btn-primary " (click)="onClick		  ()">Submit and Refresh</button>
        * this.hide = false;
        * <div class="container" [hidden]="hide">
	//code for bar graph ui
	</div>
5.  CASES YOU NEED TO CONSIDER:
5.1 CURRENT SCORE IS EQUAL TO TARGET SCORE.
5.2:CURRENT SCORE IS NEAR TO TARGET SCORE.
5.3:CURRENT SCORE IS HIGHER THAN TARGET SCORE
5.4:CURRENT SCORE IS LESS THAN TARGET SCORE
 solution 5.[1,2,3,4]:
code:
	if(this.TTP > 0){
      this.higher="which is"+" " + this.TD+ "points lower than 	your target GMAT score  out of "+ this.totalTS
    }else if(this.TTP===0){
      this.higher="which is equal to your target score"
    }
    else{
      this.higher="which is"+" " + Math.abs(this.TD)+"points 	higher than your target GMAT score out of 	"+this.totalTS
    }
explain: the above ts script condition statement binds the value to the component in UI pages for different cases in problem statement 5 except, statement 5.2.

##Recomendation satisifed:
-->used javascript frame work (angular js)
-->avoided third-party lib implementation and used HTML5,CSS3.
-->UI is responsive.
##Goods to have:
-->used Angular 4(which is 2.0+).
-->used animatin on bar graphs.
-->loading time is considered.

      
# Anguapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
