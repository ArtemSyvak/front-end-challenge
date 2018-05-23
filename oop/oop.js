class User {
  constructor(email, name, status) {
    this.email = email;
    this.name = name;
    this.status = status;
    this.score = 0;
  }
  login(){
    console.log(this.email, 'logged in');
    return this;
  }
  logout(){
    console.log(this.email, 'logged out');
    return this;
  }
  incrementScore(){
    this.score++;
    console.log(this.email, 'score was changed -> ', this.score);
    return this;
  }
}

let Artem = new User('artsyvak@gmail.com', 'Artem', true);
let Nikita = new User('nikiforov@gmail.com', 'Nikita', true);
let BrunoMars = new User('bruno@gmail.com', 'BrunoMars', true);
let users = [Artem, Nikita, BrunoMars]

Artem.login().incrementScore().incrementScore().logout();

class Admin extends User {
  deleteUser(user){
    users = users.filter(u =>{
      return u.email != user.email;
    });
  }
}

let admin = new Admin('admin@gmail.com','artAdmin',true);

console.log('Before delete -> ', users);
admin.deleteUser(BrunoMars);
console.log('After delete -> ', users);
