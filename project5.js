class Play  {
    constructor(){
var toul = document.getElementById("player");
toul.style.height=screen.height + "px";
if(screen.width<650){
    toul.style.width=screen.width+"px";
}
var mohtawa=document.getElementById("mohtawa");
mohtawa.style.height=screen.height-205+"px";



    }
}
onload=new Play();
class Mouchaghel {
    constructor(){
        this.ghoneya = document.getElementById("ghoneya");
        this.nas = document.getElementById("nas");
        this.control_button = document.getElementById("btn_player");
        this.image=document.getElementById("image");
        this.isPlayed;
        this.control_button.addEventListener("click",()=>{
this.pp();
        })
        this.radioun =[]
        this.radioun[0]="RADIOUN1 Zitouna Fm"
        this.radioun[1]="RADIOUN2 Mozaik Fm"
        this.radioun[2]="RADIOUN3 oxigen Fm"
        this.tsawer=[]
        this.tsawer[0]="Z.jpg"
        this.tsawer[1]="M.jfif"
        this.tsawer[2]="O.jfif"
        this.ghneyet=[]
        this.ghneyet[0]="https://zitounafm.toutech.net/zitounalive"
        this.ghneyet[1]="https://radio.mosaiquefm.net/mosalive"
        this.ghneyet[2]="https://radiooxygenefm.ice.infomaniak.ch/radiooxygenefm-64.mp3"
        this.nidham=0;
        this.thdid();
        document.getElementById("btna").addEventListener("click",()=>{
            if(this.nidham<this.ghneyet.length-1){
                ++this.nidham;this.isPlayed=false;
            }
           this.thdid()
            
        })
        document.getElementById("btn").addEventListener("click",()=>{
            if(this.nidham>0){
                --this.nidham;this.isPlayed=false;
            }
            this.thdid();
        })
    };
    thdid(){ 
        this.ghoneya.src =this.ghneyet[this.nidham];
        this.nas.innerHTML=this.radioun[this.nidham];
        this.image.src=this.tsawer[this.nidham];
        this.pp();
    }

    
    
    pp(){
        if(this.isPlayed==false){
            this.control_button.src="EE.jpg";
            this.ghoneya.play();
            this.isPlayed=true;
        }
        else{
            this.control_button.src="DD.png";
            this.ghoneya.pause();
            this.isPlayed=false;
        }

    }
}
onload = new Mouchaghel();