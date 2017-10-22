import {Module,NestModule,MiddlewaresConsumer,RequestMethod} from '@nestjs/common';
import {companiesController} from './companies.controller';
import {AuthenticationMiddleware} from './authentication.middleware';

@Module({
    modules:[],
    controllers:[companiesController]
})

export class ApplicationModule { 
    /* 
    //JWT Implementation in progress.
    //Need to create 0Auth account to generate Authorisation Key.
    configure = (consumer: MiddlewaresConsumer): void => {
        consumer.apply(AuthenticationMiddleware).forRoutes(
            {path:'/**', method: RequestMethod.ALL}
        );
    }*/
}