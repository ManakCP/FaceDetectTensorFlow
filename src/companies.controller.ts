import {Controller, Get, Post, Body} from '@nestjs/common';
import {Company} from './company';

@Controller('companies')
export class companiesController{
    private companies = [
        new Company("coke","Bevrage","address1"),
        new Company("Apple","Computers","address2"),
        new Company("Telsa","Cars","address3")
    ];

    @Get()
    getCompanies(){
        return this.companies;
    }

    @Post()
    createCompany(@Body() company: Company){
        this.companies.push(company);
    }
}