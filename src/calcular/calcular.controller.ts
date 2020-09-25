import { CalcularService } from './calcular.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('calcular')
export class CalcularController {
    constructor (private calcularService: CalcularService){}

    @Get(':oper/:val1/:val2')
    ejecutar(@Param('oper') oper, @Param('val1') val1, @Param('val2') val2) : string{
        let numero1 = parseInt(val1);
        let numero2 = parseInt(val2);
        return this.calcularService.getResultado(oper, numero1, numero2);
    }
}
