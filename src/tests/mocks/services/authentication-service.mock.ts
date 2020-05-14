import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class AuthenticationServiceMock  {
    constructor(private http: HttpClient) { }

    authenticateUser(username: string, password: string) {
        return this.http.get<any>(`../../assets/users.json`)
            .pipe(map(users => {  
                var userData = users.users ;
                return (userData.filter(x => x.userName == username && x.password == password)).length  > 0 ;
            }));
    }
}