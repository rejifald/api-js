import ID from '../types/ID';

export default interface IServiceModel<T = object> {
    get?(): T[];

    getById?(id: ID): T;

    create?(data: T): T;

    update?(id: ID, data: T): T;

    remove?(id: ID): T;
}
