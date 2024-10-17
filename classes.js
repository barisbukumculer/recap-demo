class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  saveUser(user) {
    // console.log("Kullanici Kaydedildi" + "  " + this.name + " " + this.surname);
    console.log(`Personel Kaydedildi: ${this.name} ${this.surname}`);
  }
}

const user = new User("Baris", "Bukumculer");

user.saveUser();

console.log(user.name, user.surname);
