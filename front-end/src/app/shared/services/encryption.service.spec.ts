import { TestBed, inject } from '@angular/core/testing';

import { EncryptionService } from './encryption.service';

describe('Service: EncryptionService', () => {

    let encryptionService: EncryptionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EncryptionService]
        });
        encryptionService = new EncryptionService();
    });

    it('should create', () => {
        expect(encryptionService).toBeTruthy();
    });

    it('should ...', inject([EncryptionService], (service: EncryptionService) => {
        expect(service).toBeTruthy();
    }));



    // TESTAR CRIPTO E DESCRIPTO DE STRING SIMPLES

    it('#encryptValue : deve testar criptografia simples', () => {

        const value = '06.06.06.06.06.06.06.06';

        const senhaCriptografada = "T3mtkO21XWl4bYyVMINzGayFpIBp1kP5ciYafwQxUW4=";

        const encryptValue = encryptionService.encryptValue(value);

        expect(encryptValue).toBe(senhaCriptografada);

    });

    it('#decryptValue: deve testar descriptografia simples', () => {

        const senha = '06.06.06.06.06.06.06.06';

        const senhaCriptografada = "T3mtkO21XWl4bYyVMINzGayFpIBp1kP5ciYafwQxUW4=";

        const decryptValue = encryptionService.decryptValue(senhaCriptografada);

        expect(decryptValue).toBe(senha);

    });

    it('#decryptValue: deve testar descriptografia e retornar senhaDoUsuArio', () => {

        const originalValue = 'senhaDoUsuArio';

        const value = 'uPducFONVw1rjxps7qZeaA==';

        const decryptObject = encryptionService.decryptValue(value);

        expect(decryptObject).toBe(originalValue);

    });

    it('#decryptValue: deve testar descriptografia e retornar senhãDôUsuÁrio', () => {

        const originalValue = 'senhãDôUsuÁrio';

        const value = 'DwRFvT/TdUPtJlkYCIyTttfAq6cJ5e9HCVv6EelGBcE=';

        const decryptObject = encryptionService.decryptValue(value);

        expect(decryptObject).toBe(originalValue);

    });

    it('#encryptValue/decryptValue : deve testar string sem acentuação', () => {

        const value = 'senhaDoUsuario';

        const encryptValue = encryptionService.encryptValue(value);

        const decryptValue = encryptionService.decryptValue(encryptValue);

        expect(value).toBe(decryptValue);

    });

    it('#encryptValue/decryptValue : deve testar string com acentuação', () => {

        const value = 'SenhãDoUsuário';

        const encryptValue = encryptionService.encryptValue(value);

        const decryptValue = encryptionService.decryptValue(encryptValue);

        expect(value).toBe(decryptValue);

    });



    // TESTAR CRIPTO E DESCRIPTO DE OBJETOS

    it('#encryptEntity/decryptEntity : deve testar objetos com acentuação', () => {

        const value = {
            number: 1,
            string: 'SenhaDoUsuáríõá',
            objeto: {
                teste: 2,
                valor: 'meuVãlór'
            }
        };

        const encryptObject = encryptionService.encryptEntity(value);

        const decryptObject = encryptionService.decryptEntity(encryptObject);

        expect(JSON.stringify(value)).toBe(JSON.stringify(decryptObject));

    });

    it('#decryptEntity: deve testar descriptografia e retornar objeto', () => {

        const originalValue = '{"fi":7,"chn":"3","trn":424,"data":{"CONTA_CORRENTE":329,"COOPERATIVA":1,"VALOR":"senháDoÙsuáãário"}}';

        const value = '3tBBXHaPjEeNwM5/YyWvXm6TpXQ0d6lavC+fMFQLpDPRZapfUiA6N8/bJo+tSjHGSiEcBrppzDcCR3tsHL9w8LdgbvVeeZTY5LVswtaYr2/paCeuM/QqkUdgBV1JvKHZpwzgwjz9SrnqrnfDIXV0DQ==';

        const decryptObject = encryptionService.decryptEntity(value);

        expect(JSON.stringify(decryptObject)).toBe(originalValue);

    });

    it('#encryptEntity/decryptEntity: deve testar TRN 424', () => {

        const originalRequest = {
            fi: 7,
            chn: "3",
            trn: 424,
            data: {
                CONTA_CORRENTE: 329,
                COOPERATIVA: 1,
                VALOR: 'senháDoÙsuáãário',
            }
        };

        const encryptObject = encryptionService.encryptEntity(originalRequest);
        console.log('TRN 424 >>> ' + encryptObject)

        const decryptObject = encryptionService.decryptEntity(encryptObject);
        console.log('TRN 424 >>> ' + JSON.stringify(decryptObject))

        expect(JSON.stringify(decryptObject)).toBe(JSON.stringify(originalRequest));

    });

    it('#encryptEntity/decryptEntity: deve testar TRN 424 - data', () => {

        const originalRequest = {
            fi: 7,
            chn: "3",
            trn: 424,
            data: {
                CONTA_CORRENTE: 329,
                COOPERATIVA: 1,
                VALOR: 'senháDoÙsuáãário',
                ZERO: '0',
                TESTE: null,
                OBJETO: {
                    CONTA_CORRENTE: 329,
                    COOPERATIVA: 1,
                    VALOR: 'senháDoÙsuáãário',
                    TEST: undefined
                }
            }
        };

        const encryptObject = encryptionService.encryptEntity(originalRequest.data);
        console.log('TRN 424 - data >>> ' + encryptObject)

        const decryptObject = encryptionService.decryptEntity(encryptObject);
        console.log('TRN 424 - data >>> ' + JSON.stringify(decryptObject))

        expect(JSON.stringify(decryptObject)).toBe(JSON.stringify(originalRequest.data));

    });

});
