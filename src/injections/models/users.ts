import {Users} from '../../models/users';
import RESTService from '../../the-instance';

RESTService.registerModel('users', new Users());

export default RESTService.models.users;
