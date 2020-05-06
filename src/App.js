import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component from 'react'
import DataComponent from './DataComponent'
import Data from './Data'
import Header from './Header'
const questions = [
  {
    id : 1,
    question1 : "What is my biggest fear? ",
    a1 : "  Snakes  ",
    b1 : " Old age ",
    c1: " Driving ",
    d1: " Heights"
  },
  {
    id : 2,
    question : "What is my favourite sport? ",
    a : " Cricket",
    b : " Football",
    c: " Hockey",
    d: " Basketball"
  },
  {
    id : 3,
    question : "What is my favourite color? ",
    a : "Blue ",
    b : " Black",
    c: " Red",
    d: " Green"
  },
{
   id:4,
   question : "When is my birthday? ",
    a : "April 29th 1995 ",
    b : " April 30th 1994",
    c: " February 24th 1995",
    d: " April 30th 1995"

},
{
  id: 5,
  question : "What is my favourite band? ",
   a : "Backstreet boys",
   b : " Green day",
   c: " Linkin park",
   d: "Fort Minor "
},
{id:6,
question : "What is my favourite genre ? ",
 a : " Romcom",
 b : " Action",
 c: "Horror ",
 d: " Thriller"},
{
  id:7,
  question : "What is my favourite dessert? ",
   a : " Ice cream",
   b : " Gulab Jamun ",
   c: " Cheesecake",
   d: " Kaju Barfi "
},
{
  id:8,
  question : " Which of the below am I Crazy about? " ,
   a : " Cars ",
   b : " Aeroplanes",
   c: " Gadgets",
   d: " Clothes "
},
{
  id:9,
  question : "Whats my favourite travel destination?  ",
   a : "Rome ",
   b : " Venice",
   c: " Paris",
   d: " London"
},
{id:10,
question : " What TV series am I watching currently? ",
 a : "F.R.I.E.N.D.S ",
 b : " The Big Bang Theory ",
 c: " Breaking Bad ",
 d: " Money Heist"}]

   

class App extends React.Component{
constructor(){
  super()
  this.state = {
    count: 0,
    result : 0
  }
  
  this.onAnswerClicked = this.onAnswerClicked.bind(this)
  this.onSiteChanged = this.onSiteChanged.bind(this)
  this.Submitted = this.Submitted.bind(this)
}
   onSiteChanged (){
     this.setState((prevState ) =>({
       count : prevState.count 
      
     }))
   }

   onAnswerClicked (){
    this.setState((prevState) =>({
      count : prevState.count + 1 
      
    }
    
    
    ))
  }

   Submitted() {

    let message = "your score is" + " " + `${this.state.result}`
      this.setState((prevState) => ({
        result : (prevState.count/10) * 100
       
      }
      ))
    alert(message)
    
  
     }
    
   
      
        
    

  render(){
    return(
     <div >
       <Header />
       <div>
      <DataComponent   question = {questions[0].question1}/></div>
      <div className = ' option'><tbody>
                    <tr>
                        <td><input name = "Q1" type="radio" value={questions[0].a1} onChange={this.onSiteChanged} />{questions[0].a1}</td>
                        <td><input name = "Q1" type="radio" value={questions[0].b1} onChange={this.onAnswerClicked} />{questions[0].b1}</td>
                        <td><input name = "Q1" type="radio" value={questions[0].c1} onChange={this.onSiteChanged} />{questions[0].c1}</td>
                        <td><input name = "Q1" type="radio" value={questions[0].d1} onChange={this.onSiteChanged} />{questions[0].d1}</td>          
                    </tr>
               </tbody></div>
        
       <DataComponent question = {questions[1].question}/>
     <div className = 'option'> <tbody>
                    <tr>
                        <td><input  type="radio" name = "Q2"  value={questions[1].a} onChange={this.onAnswerClicked} />{questions[1].a}</td>
                        <td><input type="radio"name = "Q2" value={questions[1].b} onChange={this.onSiteChanged} />{questions[1].b}</td>
                        <td><input type="radio"name = "Q2" value={questions[1].c} onChange={this.onSiteChanged} />{questions[1].c}</td>
                        <td><input type="radio"name = "Q2" value={questions[1].d} onChange={this.onSiteChanged} />{questions[1].d}</td>          
                    </tr>
               </tbody></div>
               <DataComponent question = {questions[2].question}/>
     <div className = 'option'> <tbody>
                    <tr>
                        <td><input  type="radio" name = "Q3" value={questions[2].a} onChange={this.onSiteChanged} />{questions[2].a}</td>
                        <td><input type="radio"name = "Q3" value={questions[2].b} onChange={this.onAnswerClicked} />{questions[2].b}</td>
                        <td><input type="radio"name = "Q3" value={questions[2].c} onChange={this.onSiteChanged} />{questions[2].c}</td>
                        <td><input type="radio"name = "Q3" value={questions[2].d} onChange={this.onSiteChanged} />{questions[2].d}</td>          
                    </tr>
               </tbody> </div>
               <DataComponent question = {questions[3].question}/>
      <div className = 'option' ><tbody>
                    <tr>
                        <td><input  type="radio" name = "Q4" value={questions[3].a} onChange={this.onSiteChanged} />{questions[3].a}</td>
                        <td><input type="radio"name = "Q4" value={questions[3].b} onChange={this.onSiteChanged} />{questions[3].b}</td>
                        <td><input type="radio"name = "Q4" value={questions[3].c} onChange={this.onSiteChanged} />{questions[3].c}</td>
                        <td><input type="radio"name = "Q4" value={questions[3].d} onChange={this.onAnswerClicked} />{questions[3].d}</td>          
                    </tr>
               </tbody></div>
               <DataComponent question = {questions[4].question}/>
               <div className = 'option' > <tbody>
                    <tr>
                        <td><input  type="radio" name = "Q5" value={questions[4].a} onChange={this.onSiteChanged} />{questions[4].a}</td>
                        <td><input type="radio"name = "Q5" value={questions[4].b} onChange={this.onSiteChanged} />{questions[4].b}</td>
                        <td><input type="radio"name = "Q5" value={questions[4].c} onChange={this.onAnswerClicked} />{questions[4].c}</td>
                        <td><input type="radio"name = "Q5" value={questions[4].d} onChange={this.onSiteChanged} />{questions[4].d}</td>          
                    </tr>
               </tbody></div>
               <DataComponent question = {questions[5].question}/>
               <div className = 'option' > <tbody>
                    <tr>
                        <td><input  type="radio" name = "Q6" value={questions[5].a} onChange={this.onSiteChanged} />{questions[5].a}</td>
                        <td><input type="radio"name = "Q6" value={questions[5].b} onChange={this.onSiteChanged} />{questions[5].b}</td>
                        <td><input type="radio"name = "Q6" value={questions[5].c} onChange={this.onSiteChanged} />{questions[5].c}</td>
                        <td><input type="radio"name = "Q6" value={questions[5].d} onChange={this.onAnswerClicked} />{questions[5].d}</td>          
                    </tr>
               </tbody></div>
               <DataComponent question = {questions[6].question}/>
               <div className = 'option' > <tbody>
                    <tr>
                        <td><input  type="radio" name = "Q7" value={questions[6].a} onChange={this.onSiteChanged} />{questions[6].a}</td>
                        <td><input type="radio"name = "Q7" value={questions[6].b} onChange={this.onSiteChanged} />{questions[6].b}</td>
                        <td><input type="radio"name = "Q7" value={questions[6].c} onChange={this.onAnswerClicked} />{questions[6].c}</td>
                        <td><input type="radio"name = "Q7" value={questions[6].d} onChange={this.onSiteChanged} />{questions[6].d}</td>          
                    </tr>
               </tbody> </div>
               <DataComponent question = {questions[7].question}/>
               <div className = 'option' > <tbody>
                    <tr>
                        <td><input  type="radio" name = "Q8" value={questions[7].a} onChange={this.onSiteChanged} />{questions[7].a}</td>
                        <td><input type="radio"name = "Q8" value={questions[7].b} onChange={this.onAnswerClicked} />{questions[7].b}</td>
                        <td><input type="radio"name = "Q8" value={questions[7].c} onChange={this.onSiteChanged} />{questions[7].c}</td>
                        <td><input type="radio"name = "Q8" value={questions[7].d} onChange={this.onSiteChanged} />{questions[7].d}</td>          
                    </tr>
               </tbody> </div>
               <DataComponent question = {questions[8].question}/>
               <div className = 'option' ><tbody>
                    <tr>
                        <td><input  type="radio" name = "Q9" value={questions[8].a} onChange={this.onSiteChanged} />{questions[8].a}</td>
                        <td><input type="radio"name = "Q9" value={questions[8].b} onChange={this.onAnswerClicked} />{questions[8].b}</td>
                        <td><input type="radio"name = "Q9" value={questions[8].c} onChange={this.onSiteChanged} />{questions[8].c}</td>
                        <td><input type="radio"name = "Q9" value={questions[8].d} onChange={this.onSiteChanged} />{questions[8].d}</td>          
                    </tr>
               </tbody> </div>
               <DataComponent question = {questions[9].question}/>
               <div className = 'option' > <tbody>
                    <tr>
                        <td><input  type="radio" name = "Q10" value={questions[9].a} onChange={this.onSiteChanged} />{questions[9].a}</td>
                        <td><input type="radio"name = "Q10" value={questions[9].b} onChange={this.onAnswerClicked} />{questions[9].b}</td>
                        <td><input type="radio"name = "Q10" value={questions[9].c} onChange={this.onSiteChanged} />{questions[9].c}</td>
                        <td><input type="radio"name = "Q10" value={questions[9].d} onChange={this.onSiteChanged} />{questions[9].d}</td>          
                    </tr>
               </tbody> </div>
              <button className= ' button' type = "submit" onClick = {this.Submitted} >Submit</button>
              <p> Note : Click on submit again after closing the alert to see the score </p>
    
     
      </div>
    )
        
      }
    
    }
   export default App;
