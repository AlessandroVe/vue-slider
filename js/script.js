const app =  new Vue({
    el:"#app",
    data:{
        name:"",
        showHello:true,
        intervalSlot:null,
        imgArray:[
        "https://www.mobileworld.it/wp-content/uploads/2018/09/Sfondi-Islanda-drone-017.jpg",
        "https://www.mobileworld.it/wp-content/uploads/2018/09/Sfondi-Islanda-drone-07.jpg",
        "https://www.mobileworld.it/wp-content/uploads/2018/09/Sfondi-Islanda-drone-014.jpg",
        "https://images2.alphacoders.com/182/182622.JPG"
    ],
        pictureIndex:0,
    },
    created(){

        this.timer()

    },
    methods:{
        timer:function(){
            this.intervalSlot = setInterval(() => {
                this.next();
            }, 3000);

        },
        saluto : function(){
            return this.name && this.showHello === true 
        },
        toUpper : function(name){
            return this.name[0].toUpperCase()+this.name.slice(1);
        },
        next : function(){
            if(this.pictureIndex===(this.imgArray.length-1)){
                this.pictureIndex=0 
            }else{
                this.pictureIndex++
            }
            clearInterval(this.intervalSlot);
            this.timer();
        },
        prev : function(){
            if(this.pictureIndex===0){
                this.pictureIndex=this.imgArray.length-1
           }else {
            this.pictureIndex--
           }
           clearInterval(this.intervalSlot);
           this.timer();
        },
        isCurrentDot:function(index){
            if(index === this.pictureIndex){
                return "current"
            }else{
                return ""
            }
        },
        selectImg:function(index){
            this.pictureIndex = index
            clearInterval(this.intervalSlot);
            this.timer();
        }
        
    }
}
);