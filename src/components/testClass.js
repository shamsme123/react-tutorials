class Parent{

    constructor(a,b,c){
        this.a=a; //100
        this.b=b; //200
        this.c=c; //300
    }
 
    test(){
        console.log(`Hello, I am able to access my class properties => ${this.a}`);
    } 
     
 }
 
 
 class Child extends Parent{
 
     constructor(e,f,g){ //when you instantiate an object
         super("100","200","300"); //calling the parent constructor and setting required value
         //inherited a=100,b=200,c=300
         this.e=e; //own property
         this.f=f;
         this.g=g;
     }
 
     testChild(){
        const {e} = this;
        console.log("The value of e from this ==>",e);
        console.log("the value of this ==>",this.e);
         //console.log(`I have access to my class proprties ==>${this.e}`);
     }
 
     testChild1(){
         console.log(`Accessing Parent peroperties ==>${this.a}`);
         return "1";
     }
 }

 const newObj = new Child("1","2","3"); //newObj = this;
 const newObj1 = new Child("A","B","C");

 console.log("This is now newObj ==>",newObj.testChild());
 console.log("This is now newObj1 ==>",newObj1.testChild());


