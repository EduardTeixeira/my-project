import { Injectable } from '@angular/core';

import * as cryptoJS from 'crypto-js';

import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EncryptionService {

    constructor() { }

    encrypt(value: string): string {
        return cryptoJS.AES.encrypt(value, environment.CRYPTO_KEY.trim()).toString();
    }

    decrypt(textToDecrypt: string) {
        return cryptoJS.AES.decrypt(textToDecrypt, environment.CRYPTO_KEY.trim()).toString(cryptoJS.enc.Utf8);
    }

    encryptEntity(data: any): string {
        return cryptoJS.AES.encrypt(JSON.stringify(data), environment.CRYPTO_KEY.trim()).toString();
    }

    decryptEntity(data: any) {
        const bytes = cryptoJS.AES.decrypt(data, environment.CRYPTO_KEY.trim());
        return JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
    }

}
