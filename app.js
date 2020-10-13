//INPUTS
let rInput1 = document.getElementById('rInput1'); //Gets value from rectangle width input box
let rInput2 = document.getElementById('rInput2'); //Gets value from rectangle height input box
let sInput = document.getElementById('sInput'); //Gets value from square input box
let cInput = document.getElementById('cInput'); //Gets value from circle input box
let tInput = document.getElementById('tInput'); //Gets value from triangle input box
let container = document.getElementById('shapecontainer'); //Gets container
//INFO BAR vvvvv
let shapeInfo= document.getElementById('shapename'); //Gets info 
let widthInfo = document.getElementById('width');
let heightInfo= document.getElementById('height');
let radiusInfo = document.getElementById('radius');
let areaInfo = document.getElementById('area');
let perimeterInfo = document.getElementById('perimeter');

//Sets random point within container size
//BUTTONS
let recBtn = document.getElementById('recButton');
let sqBtn = document.getElementById('sqButton');
let cirBtn = document.getElementById('cirButton');
let triBtn = document.getElementById('triButton');
// console.log(cInput.value);

//Event listeners for buttons to add shapes
recBtn.addEventListener('click', () => {
    new Rectangle(rInput1.value,rInput2.value);
})

sqBtn.addEventListener('click', () => {
    new Square(sInput.value);
})

cirBtn.addEventListener('click', () => {
    new Circle(cInput.value);
})

triBtn.addEventListener('click', () => {
    new Triangle(tInput.value);
})

//Parent class
class Shape {
    constructor(name, width, height, area, radius, sideLength) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.area = area;
        this.radius = radius;
        this.sideLength = sideLength;
    }
    describe() {
        
    }
}
//Child classes below this comment
class Rectangle extends Shape{
    constructor(width, height) {
        super(width,height);
        this.div = document.createElement('div');
        this.cssTop = Math.floor(Math.random() * 550)+ 1; 
        this.cssLeft = Math.floor(Math.random() * 550)+ 1;
        this.cssRight = Math.floor(Math.random() * 550)+ 1;
        this.width = width;
        this.height = height;
        this.div.style.backgroundColor = "green";
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
        this.div.style.position = 'absolute';
        this.div.style.top = `${this.cssTop}px`
        this.div.style.left = `${this.cssLeft}px`
        this.div.style.right = `${this.cssRight}px`
        container.appendChild(this.div);
        //AEL for a one time click to run describe method
        this.div.addEventListener('click', ()=>{
         this.describe();
        }, {once:true})
        //AEL for remove shape and shape info on double click
        this.div.addEventListener('dblclick', ()=>{
            shapeInfo.innerText = 'Shape:';
            widthInfo.innerText = 'Width:';
            heightInfo.innerText = 'Height:';
            areaInfo.innerText = 'Area:';
            radiusInfo.innerText = 'Radius:';
            perimeterInfo.innerText = 'Perimeter:';
            this.div.remove();
        })

    }
    describe() {
        shapeInfo.innerText ='Shape: Rectangle';
        widthInfo.innerText =`Width:${this.width}px`;
        heightInfo.innerText =`Height:${this.height}px`;
        let area = `${this.width}`*`${this.height}`
        let perimeter = 2 * (`${this.width}`*`${this.height}`)
        areaInfo.innerText =`Area:${area}`
        perimeterInfo.innerText =`Perimeter:${perimeter}`
        radiusInfo.innerText ='Radius: N/A';
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.div = document.createElement('div');
        this.sideLength = sideLength
        this.cssTop = Math.floor(Math.random() * 550)+ 1; 
        this.cssLeft = Math.floor(Math.random() * 550)+ 1;
        this.cssRight = Math.floor(Math.random() * 550)+ 1;
        this.div.style.backgroundColor = "red";
        this.div.style.width = `${sideLength}px`;
        this.div.style.height = `${sideLength}px`;
        this.div.style.position = 'absolute';
        this.div.style.top = `${this.cssTop}px`
        this.div.style.left = `${this.cssLeft}px`
        this.div.style.right = `${this.cssRight}px`
        container.appendChild(this.div);
        //AEL for a one time click to run describe method
        this.div.addEventListener('click', ()=>{
            this.describe();
           }, {once:true})
           //AEL for remove shape and shape info on double click
           this.div.addEventListener('dblclick', ()=>{
            shapeInfo.innerText = 'Shape:';
            widthInfo.innerText = 'Width:';
            heightInfo.innerText = 'Height:';
            areaInfo.innerText = 'Area:';
            radiusInfo.innerText = 'Radius:';
            perimeterInfo.innerText = 'Perimeter:';
            this.div.remove();
        })
    }
    describe() {
        shapeInfo.innerText ='Shape: Square';
        widthInfo.innerText =`Width: ${this.sideLength}px`;
        heightInfo.innerText =`Height: ${this.sideLength}px`;
        let area = `${this.sideLength}`*`${this.sideLength}`
        let perimeter = 2 * (`${this.sideLength}`*`${this.sideLength}`)
        areaInfo.innerText =`Area: ${area}`
        perimeterInfo.innerText =`Perimeter: ${perimeter}`
        radiusInfo.innerText ='Radius: N/A';
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.div = document.createElement('div');
        this.radius = radius;
        this.cssTop = Math.floor(Math.random() * 550)+ 1; 
        this.cssLeft = Math.floor(Math.random() * 550)+ 1;
        this.cssRight = Math.floor(Math.random() * 550)+ 1;
        this.div.style.backgroundColor = "purple";
        this.div.style.width = `${this.radius}px`;
        this.div.style.height = `${this.radius}px`;
        this.div.style.borderRadius = `${this.radius}px`;
        this.div.style.position = 'absolute';
        this.div.style.top = `${this.cssTop}px`
        this.div.style.left = `${this.cssLeft}px`
        this.div.style.right = `${this.cssRight}px`
        container.appendChild(this.div);
        //AEL for a one time click to run describe method
        this.div.addEventListener('click', ()=>{
            this.describe();
           }, {once:true})
           //AEL for remove shape and shape info on double click
           this.div.addEventListener('dblclick', ()=>{
            shapeInfo.innerText = 'Shape:';
            widthInfo.innerText = 'Width:';
            heightInfo.innerText = 'Height:';
            areaInfo.innerText = 'Area:';
            radiusInfo.innerText = 'Radius:';
            perimeterInfo.innerText = 'Perimeter:';
            this.div.remove();
        })
    }
    describe(){
        shapeInfo.innerText ='Shape: Circle';
        widthInfo.innerText ='Width: N/A';
        heightInfo.innerText ='Height: N/A';
        let area = 'Area: N/A';
        let perimeter = 2 * (`${this.radius}`*`${this.radius}`)
        areaInfo.innerText =area
        perimeterInfo.innerText ="Perimeter:" + perimeter
        radiusInfo.innerText ='Radius:' + 2*Math.PI*this.radius;
    }
}

class Triangle extends Shape{
    constructor(height){
        super();
        this.div = document.createElement('div');
        this.height = height;
        this.width = height;
        this.cssTop = Math.floor(Math.random() * 550)+ 1; 
        this.cssLeft = Math.floor(Math.random() * 550)+ 1;
        this.cssRight = Math.floor(Math.random() * 550)+ 1;
        this.area = (this.height * this.height) / 2;
        this.div.style.borderStyle = "solid";
        this.div.style.borderColor = `transparent transparent yellow transparent`;
        this.div.style.borderWidth = `0 ${this.width / 2}px ${this.height}px ${this.width / 2}px`;
        this.div.style.width = tInput.value;
        this.div.style.position = 'absolute';
        this.div.style.top = `${this.cssTop}px`
        this.div.style.left = `${this.cssLeft}px`
        this.div.style.right = `${this.cssTop}px`
        container.appendChild(this.div);
        //AEL for a one time click to run describe method
        this.div.addEventListener('click', ()=>{
            this.describe();
           }, {once:true})
           //AEL for remove shape and shape info on double click
           this.div.addEventListener('dblclick', ()=>{
            shapeInfo.innerText = 'Shape:';
            widthInfo.innerText = 'Width:';
            heightInfo.innerText = 'Height:';
            areaInfo.innerText = 'Area:';
            radiusInfo.innerText = 'Radius:';
            perimeterInfo.innerText = 'Perimeter:';
            this.div.remove();
           });

    }
    describe(){
        shapeInfo.innerText ='Shape: Triangle';
        widthInfo.innerText =`Width: ${tInput.value}`;
        heightInfo.innerText =`Height: ${tInput.value}`;
        let area = 0.5 * tInput.value * tInput.value;
        let perimeter = 2 * tInput.value + (Math.sqrt(2)) * tInput.value;
        areaInfo.innerText =`Area: ${area}`
        perimeterInfo.innerText ="Perimeter:" + perimeter
        radiusInfo.innerText ='Radius: N/A'
    }
}

