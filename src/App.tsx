import './App.css';

function App() {
  /*-------------------------------- */
  // let name:string = "obada";
  // let isStudent:boolean;
  // let hobbies: string[];
  // let role:[number, String];
  // let personname:unknown;// إذا ليست معروفة أحسن من any
  /*-------------------------------- */
  /*-------------------------------- */
  // type Person = {
  //   name:string,
  //   age:number;
  // }
  // let person: Person = {
  //   name:"obada",
  //   age:10
  // }
  // let lostOfPeople: Person[];
  /*-------------------------------- */
  /*-------------------------------- */

  // type Person = {
  //   name:string,
  //   age?:number
  // }
  // let person: Person = {
  //   name:"obada",// إذا بدي عرفو بدون ايج بدي حط ?
  // }
  /*-------------------------------- */

  // let age: string | number;//  | ==> union
  // age =  "obada";
  // age = 12;
  /*-------------------------------- */

  // let printName: (name:string) => void; // return undefinde
  // let printFName: (name:string) => never; // not return anything

  /*-------------------------------- */

  // type X = {
  //   a:string,
  //   b:number
  // }
  // type Y = X &{
  //   c:string,
  //   d:number
  // }
  // let y:Y = {
  //   a:"oo",
  //   b:11,
  //   c:"obada",
  //   d:42,
  // }

  /*-----------------------------? Optional Parameter----------------------------------------- */
//   function showData(name:string="un", age:number, country?:string){
//     return `${name} = ${age} = ${country}`
//   }
//  console.log('====================================');
//  console.log(showData("osama",40,undefined));
//  console.log('===================================='); 
   
  /*-------------------------------Function Rest Parameter--------------------------------------- */

  // function addAll(...nums: number[]):number{
  //   let result = 0;
  //   for(let i =0; i< nums.length; i++){
  //     result += nums[i]
  //   }
  //   return result
  // }

  // console.log('====================================');
  // console.log(addAll(10,12,11.2, +true));
  // console.log('====================================');

  

  /*----------------------Typw Alias ------------------------------------ */

  // type st = string;
  // let name:st;

  // type standnum = string | number;
  // let all:standnum;
  // all="obada";
  // all = 10;

  // type Buttons = {
  //   up: string,
  //   right: string,
  //   down: string,
  //   left: string
  // }

  // type Last = Buttons & {
  //   x: boolean
  // }
  // function getAction(btns: Last){
  //   console.log(btns.down);
  // }
  
  
  // getAction({up:"up",right:"d",down:"ss",left:"ds",x:true});

  

  /*---------------------------Literal Types------------------------------------------- */

  // type nums = 0 | 1 | -1;
  // function compare(num1: number, num2:number): nums{
  //   if(num1 === num2){
  //     return 1
  //   }
  //   else if(num1 > num2){
  //     return -1
  //   }
  //   else {
  //    return 0
  //   }
  // }
  // compare(20,2);
  // compare(20,20);
  // compare(20,42);
  // let myNumber:nums = 100;// error

  /*-------------------------Data Types -Tuple --------------------------------------------- */

  // let article: readonly [number, string, boolean] = [11, "one", true];
  // article = [12, "tow", false];
  // article.push(100)

  /*----------------------------Data Types - Void And Never---------------------- */
  //  function always(name:string):never{
  //   while(true){
  //     console.log(name);
      
  //   }
  //  }

  //  always("ds");
  // console.log("ds");
  
  /*--------------------------------Enums---------------------------------------- */
  /*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/
  // enum Level {
  //   Kids = 15,
  //   Easy = 11,
  //   Medium = 6,
  //   Hard = 3
  // }
  // console.log(Level.Easy);
  /********************************************** */
  /*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/
  // function getHard():number{
  //   return 2
  // }
  // enum Kid {
  //   seven = 5,
  //   six = 1,
  //   nine = 3,
  // }
  // enum Level {
  //   Kids = Kid.nine,
  //   Easy = 11,
  //   Medium = Easy - 5,
  //   Hard = getHard(),
  //   ff,
  // }
  /********************************************** /
  
  /*-----------------------------Type Asserton------------------------------------*/
  /*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/
// let myImg = document.getElementById("id") as HTMLImageElement;
// let myImg1 =<HTMLInputElement> document.getElementById("id");
// console.log(myImg.src);
// let data:any = 222;
// console.log((data as string).repeat(3));



  /*-------------------Data Types- Union And Intersection------------------------*/
  /*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/
  // type A = {
  //   one:string,
  //   tow:number,
  //   three:boolean
  // }
  // type C = {
  //   five:String
  // }
  // type mix = A & C;

  // function getAction(btns :mix){
  //   console.log(btns.five);
    
  // }
  // getAction({one:"dd",tow:1,three:true,five:"ds"})

  /*--------------------------------Type Annotations With Object------------------------------------------- */

// let myObject: {
//   readonly username: string,
//   id: number,
//   hire?: boolean,
//   skills: {
//     one: string,
//     two: string
//   }
// } = {
//   username: "Elzero",
//   id: 100,
//   hire: true,
//   skills: {
//     one: "HTML",
//     two: "CSS"
//   }
// };

// // myObject.username = "Osama";
// myObject.id = 101;
// myObject.hire = false;

// console.log(myObject.username);
// console.log(myObject.id);
// console.log(myObject.hire);
// console.log(myObject.skills.one);

  /*--------------------------Interface- Methods & Params-------------------------- */
  // interface User{
  //   id?: number,
  //   readonly username : string,
  //   country: string,
  //   sayHello():string,
  //   sayWelcom:()=> string;
  //   getDouble(num:number):number
  // }
  // let user: User = {
  // id:1,
  // username: 'obada',
  // country:'syria',
  // sayHello() {
  //   return `Hello ${this.username}`
  // },
  // sayWelcom: ()=>{
  //   return user.username
  // },
  // getDouble(n:number){
  //   return n*2
  // }
  // }
  // console.log('====================================');
  // console.log(user.getDouble(2));
  // console.log('====================================');
  /*----------------------interface Reopen And Use Cases------------------------- */

  // interface Settings {
  //   them: string,
  //   font: string
  // }
  // interface Settings {
  //   sidbar: boolean
  // }
  // let useSetting: Settings = {
  //   them: "ark",
  //   font:"Tahoma",
  //   sidbar: true,
  // }
   
  /*------------------------------Type Annotatios With Class---------------------- */
    /*
  Type Annotations With Class
*/

/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

// class User {
//   msg: () => string;
//   constructor(private _username: string, protected salary: number,public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this._username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this._username} Your Salary Is ${this.salary}`;
//   }
//   get  username():string{
//     return this._username
//   }
//   set username(value:string){
//     this._username = value;
//   }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

  /*---------------------------------Class Static-------------------------------- */
  /*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/
  // class User {
  //   private static ceated: number = 0;
  //  static getCount(): void {
  //     console.log(this.ceated);
  //   }
  //   constructor(public username:string){
  //     User.ceated++;
  //   }
  // }
  // let u1 = new User("obada");
  // let u2 = new User("obada");
  // let u3 = new User("obada");
  // User.getCount() 
  
  /*------------------------------------Implement Iterface----------------------- */
  //     interface Setting{
  //       them: string;
  //       font: string;
  //       save: ()=> void
  //     }
  //     class User implements Setting{
  //       constructor(public them:string, public font: string){}
  //       save(): void{
  //         console.log("obada");
  //       }
  //       update(): void{
  //         console.log("Update");
          
  //       }
  //     }
  //     let useOne = new User("obada","oo")
  //     useOne.save()

  /*-----------------------------Abstract---------------------------------------- */

  // abstract class Food{
  //   constructor(public title:string){}
  //   abstract getCookingTime() : void;
  // }
  // class Pizza extends Food {
  //   constructor(title:string,price:number){
  //   super(title)

  //   }
  //   getCookingTime(): void {
  //     console.log("obada");
      
  //   }
  // }
  // let one = new Pizza("omar",22);
  // console.log(one.title);
  



 /*--------------------------Polymorphism And Method Override------------------- */

 /*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/

    // class Player {
    //   constructor(public name: string){};
    //   attack(): void {
    //     console.log("attacking Now");
    //   }
    // }
    // class Amazon extends Player{
    //   constructor(name: string, public spears: number){
    //     super(name);
    //   }
    //   override attack(): void{
    //     console.log("attacking spears");
    //     this.spears--;
    //   }
    // }
    
    // class Barbarian extends Player{
    //   constructor(name: string, public axe: number){
    //     super(name);

    //   }
    //   override attack(): void{
    //     super.attack()
    //     console.log("attacking spears");
    //     this.axe--;
    //   }
    // }
    // let b1 = new Barbarian("obada", 22);
    // console.log(b1.name);
    // b1.attack();
    // console.log(b1.axe);
    
    

    /*------------------------Generics--------------------- */
    /*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/
    // function returnNumber(val : number):number{
    //   return val
    // }
    // function returnString(val : string):string{
    //   return val
    // }
    // function returnBoolean(val : boolean):boolean{
    //   return val
    // }
    // function returntype<Generics>(val: Generics): Generics{
    //   return val
    // }
    // console.log(returnNumber(199));
    // console.log(returnString("obada"));
    // console.log(returnBoolean(true));
    // console.log(returntype<number>(555));
    // console.log(returntype<string>("true"));
    // console.log(returntype<[]>([]));

    
    /*----------------------------------------------------- */
    /*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));

// const returnTypeArrowSyntax = <T extends {}>(val: T): T => val;

// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));

// function testType<T>(val: T): string {
//   return `The Value Is ${val} And Type Is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Elzero"));

// function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
//   return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
// }

// console.log(multipleTypes<string, number>("Osama", 100));
// console.log(multipleTypes<string, boolean>("Elzero", true));

/*-------------------------------Generics Classes--------------------------- */

  // class User<T = String>{
  //   constructor(public value: T){}
  //   show(msg: T ): void {
  //     console.log(`${msg} = ${this.value}`);
  //   }
  //   }
  
  //   let userOne = new User<string>("obada");
  //   console.log(userOne.value);
  //   userOne.show("Message")
  //   let userTow = new User<string |number>(4);
  //   console.log(userTow.value);
  //   userOne.show("Message")
    

  /*-----------------Generics Classes And Interfaces-------------------- */

  // interface Book{
  //   itemType: string;
  //   title: string;
  //   isbn: number
  // }

  // interface Game{
  //   itemType: string;
  //   title: string;
  //   style: string;
  //   pricw: string
  // }

  // class Collection<T>{
  //   public data: T[] = [];
  //   add(item: T) : void {
  //     this.data.push(item)
  //   }
  // }
  // let itemOne = new Collection<Book>();
  // itemOne.add({itemType:"ssd",title:"ds",isbn:11})
  // console.log(typeof itemOne.data);
  




  return (
    <div className="App">
     Hello World
    </div>
  );
}

export default App;
