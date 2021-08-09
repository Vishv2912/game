class Form{
constructor(){


this.title=createElement("h1");
this.bodyguard=createButton("BodyGuard");
this.thief=createButton("Thief");
this.story=createElement("a6");





}
display(){

this.title.html("*DIAMOND CHASE*")
this.title.position(displayWidth/2-100,20)

this.story.html("There Was a millionaire. He loved diamonds,/n and all the diamonds were worth crores of rupees./n One day he wanted to go abroad for work, so he put his favorite diamond in a maze and put a bodyguard to protect it./n As soon as a gang of thieves heard this news, they sent 2 of the sharpest thieves in their gang to steal the diamond./n Let's see if the bodyguard catches the thieves or The thief was cleverly stealing diamonds ")
this.story.position(displayWidth/2-900,100)

this.bodyguard.position(900,displayHeight-displayHeight+500)
this.bodyguard.style("backgroundColor","yellow")
this.bodyguard.style("width","200px")
this.bodyguard.style("height","50px")
this.bodyguard.style("borderRadius","100px")

this.thief.position(400,displayHeight-displayHeight+500)
this.thief.style("backgroundColor","yellow")
this.thief.style("width","200px")
this.thief.style("height","50px")
this.thief.style("borderRadius","100px")


this.bodyguard.mousePressed(()=>{
    
    this.bodyguard.hide()

    })
    this.thief.mousePressed(()=>{
    
        this.thief.hide()
    
        })
    


}



}















