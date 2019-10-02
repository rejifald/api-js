import {Auth} from '../../services/auth';
import RESTService from '../../the-instance';

RESTService.registerService('auth', new Auth());

export default RESTService.services.auth;
