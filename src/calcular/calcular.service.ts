import { Injectable } from '@nestjs/common';

@Injectable()
export class CalcularService {
    public getResultado(operador: string, num1: number, num2: number): string {
        let resultado = null;
        switch (operador) {
            case 'sumar':
                resultado = { "resultado": `${num1 + num2}` };
                break;
            case 'restar':
                resultado = { "resultado": `${num1 - num2}` };
                break;
            case 'multiplicar':
                resultado = { "resultado": `${num1 * num2}` };
                break;
            case 'dividir':
                resultado = { "resultado": `${num1 / num2}` };
                break;
        }
        return resultado
    }


}
