import AuthService from '../injections/services/auth';
import Instance from '../the-instance';

export function authorized(target: any, property: any, descriptor: any) {
    const handler = target[property];

    descriptor.value = (...args: any[]) => {
        if (!AuthService.authenticated) {
            // Any custom authenticating logic
            console.log('Authorising request...');
            AuthService.authenticate();
        }

        const ctx = {
            service: Instance,
            fetch: 'Authenticated fetch instance', // Actual fetch instance supposed to be here
        };

        return handler.call(ctx, ...args);
    };
}
