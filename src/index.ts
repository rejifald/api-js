// Import each service separately
import UserService from './injections/models/users';
import AuthService from './injections/services/auth';
// Or using through instance
import APIService from './the-instance';

console.log(UserService.getById(123)); // { id: 123, name: 'Elmore Beier' }

// @ts-ignore: users supposed to be here
console.log(APIService.models.users.get()); // [ { id: 0, name: 'Kenya Rogahn' } ]
console.log(AuthService.authenticate({login: 'login', password: 'password'})); // Something like tokens, whatever
