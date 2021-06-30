class Security {

    constructor(){

        // Add code to create the input and button elements
        this.button1=createButton("check")
        this.input1=createInput("code1")
        
        this.button2=createButton("check")
        this.input2=createInput("code2")
        
        this.button3=createButton("check")
        this.input3=createInput("code3")
        

    }

    display(){
        this.button1.position(215,110)
        this.input1.position(100,80)

        this.button2.position(815,210)
        this.input2.position(700,180)

        this.button3.position(215,310)
        this.input3.position(100,280)

        // Add code to make the buttons function as expected

this.button1.mousePressed(()=>{
    if(system.authentication(accessCode1,this.input1.value())){
this.button1.hide()
this.input1.hide()
    answers++
}
})
this.button2.mousePressed(()=>{
    if(system.authentication(accessCode2,this.input2.value())){
this.button2.hide()
this.input2.hide()
    answers++
}
})
this.button3.mousePressed(()=>{
    if(system.authentication(accessCode3,this.input3.value())){
this.button3.hide()
this.input3.hide()
    answers++
}





})





















    }

    

}