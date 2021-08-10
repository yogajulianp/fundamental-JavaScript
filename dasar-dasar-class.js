class familys {
    constructor(penamaan, usia){
        console.log("Halo, ini nilai dari constructor ke instance baru");
      //this.name = "Yoga";
      //this.age= "28";
      this.name = penamaan;
      this.age= usia;
    }
    
    greet() {
      console.log("hallo, ini dari method greet");
      console.log(`Nama saya adalah ${this.name}`);
    }
    
    info() {
        console.log("ini dari info")
      console.log(`Nama saya adalah ${this.name} dari method info`);
      this.greet();
    }
    
      //greet() {
     // 	console.log("Halo!");	
      //}
        //info() {
     // 	this.greet();
      //	console.log("Nama Saya adalah ${this.name});
      //}
  }
  
  //const family = new familys();
  const family = new familys("Yoga", 28);
  console.log(family);
  console.log(family.name);
  console.log(family.age);
  
  const wife = new familys("Ula Camila", 22);
  console.log(wife);
  console.log(wife.name);
  
  console.log(wife.age);
  
  family.greet();
  family.info();
  
  console.log("")
  wife.greet();
  
  
  const family2 = new familys();