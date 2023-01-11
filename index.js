function Scooter(year, color, model){
        this.year = year,
        this.color = color,
        this.model = model
    }
 const trotinette = new Scooter("2022", "red", "Tesla")

 function Driver(name, age, experience){
    this.name = name,
    this.age = age,
    this.experience = experience
 }
 const chauffeur = new Driver ("Lolo", "42", "not really")

 function PickupLocation(adress, city){
    this.address = adress,
    this.city = city
 }
 const pickUp = new PickupLocation ("21 Jump street", "Somewhere")