import { Injectable } from '@nestjs/common';
import { User } from './User';
import * as fs from 'fs';

@Injectable()
export class LoginService {
    public login(userInfo: any): boolean {
        let userLogged = new User(userInfo.name, userInfo.password);
        let users = this.getUsers();
        for (const user of users) {
            if(user.getName() == userLogged.getName()
                && user.getPassword() == userLogged.getPassword()){
                    return true;
            }
        }
        return false;
    }

    private getUsers(): User[]{
        let archivo = fs.readFileSync('resources/users.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        let listaUsers : User[] = [];
        for (let i = 0; i < elementos.length; i++) {
            let user = new User(elementos[i][0],elementos[i][1]);
            listaUsers.push(user);
        }
        return listaUsers;
    }

}
