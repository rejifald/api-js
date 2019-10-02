import faker from 'faker';
import IServiceModel from '../../typings/interfaces/ServiceModel';
import {IUser} from '../../typings/interfaces/User';
import ID from '../../typings/types/ID';
import {ServiceModel} from '../classes/ServiceModel';
import {authorized} from '../decorators/authorized';

export class Users extends ServiceModel implements IServiceModel {

    @authorized
    public get() {
        console.log('fetch instance: ', this.fetch);
        return new Array(Math.round(Math.random() * 10)).fill(null).map((el, index) => ({
            id: index,
            name: faker.name.findName(),
        })) as IUser[];
    }

    @authorized
    public getById(id: ID) {
        return {
            id,
            name: faker.name.findName(),
        } as IUser;
    }
}

export default Users;
