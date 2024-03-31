
class User{
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }

    getName(){
        return this.name;
    }

    getPhone(){
        return this.phone;
    }

}

class Users{
    constructor(){
        this.users = [];
    }
    
    addUser(user){
        this.users.push(user);
    }
    
    getUsers(){
        return this.users;
    }
    
}