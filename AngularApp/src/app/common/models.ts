export class BaseServiceResponse {
    title: string;
    status: boolean;
    errors: any[];
    constructor() {
        this.errors = new Array<any>();
    }
}
export class LoginResponse {
    validTo: Date;
    value: string;
}