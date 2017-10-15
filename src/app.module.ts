import {Module} from '@nestjs/common';
import {companiesController} from './companies.controller';

@Module({
    modules:[],
    controllers:[companiesController]
})

export class ApplicationModule { }