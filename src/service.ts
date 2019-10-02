import Config from '../typings/interfaces/Config';
import IServiceModel from '../typings/interfaces/ServiceModel';

export class RESTService {

    public models: { [key: string]: IServiceModel } = {};
    public services: { [key: string]: any } = {};

    protected config: Config;

    constructor(config: Config = {baseURL: '/'}) {
        this.config = config;
    }

    // The difference between model and service is logical.
    // Model should implement IServiceModel interface, while service shouldn't
    public registerModel(name: string, model: any) {
        this.models[name] = model;
    }

    // Basically services do operations unrelated to CRUD.
    // But they also may represent operations which are more complex than basic CRUD.
    public registerService(name: string, service: any) {
        this.services[name] = service;
    }
}

export default RESTService;
