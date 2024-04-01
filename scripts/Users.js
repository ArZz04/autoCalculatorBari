
class User{
    constructor(id, name, username, password, phone, antiguedad, rol){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.antiguedad = antiguedad;
        this.rol = rol;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getUsername(){
        return this.username;
    }

    getPhone(){
        return this.phone;
    }

    getAntiguedad(){
        return this.antiguedad;
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

    getUser(id){
        return this.users.find(user => user.id == id);
    }
    
}