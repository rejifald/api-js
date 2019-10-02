export class Auth {
    public authenticated: boolean = false;

    constructor() {
        console.log('Initializing Auth Service');
    }

    public authenticate(credentials: object) {
        console.log('Auth.authenticate...', credentials);
        this.authenticated = true;
        return credentials;
    }
}
