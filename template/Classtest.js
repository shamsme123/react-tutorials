class Parent{
    constructor(a,b,c){
        this.a= a;
        this.b=b;
        this.c=c;
    }

    parentMethod(){
        console.log("The value of a,b,c =>",this.a,this.b,this.c);
    }
}

class Child extends Parent{
    constructor(e,f,g){
        super(10,20,30); //this.a,this.b,this.c
        this.e=e;
        this.f=f;
        this.g=g;    
    }

    test(a,b){
        return a+b;
    }

    childMethod(){
        console.log("This values ==>",this.a,this.b,this.c,this.e,
        this.f,this.g,this.parentMethod());

        this.test();
    }
}

const obj1 = new Child(100,200,300); //this=>obj1

const obj2 = new Child("ABC","EFG","IJK"); //this=>obj2

obj1.test();

