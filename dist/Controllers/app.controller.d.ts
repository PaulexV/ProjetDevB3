import { AppService } from '../Services/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    default(): string;
    getHello(): string;
    findAll(): string;
}
