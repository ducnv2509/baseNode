import { HttpStatus } from "../constant/status";

export interface ResultSuccess {
    status: HttpStatus;
    data: any;
}

export interface ResultError {
    status: HttpStatus;
    code?: string;
    description?: {
        vi: string;
        en: string;
    };
    errors?: ErrorDetail[];
    details?: any;
}

export interface ErrorDetail {
    location?: string;
    value?: any;
    param?: string;
    message?: string;
}

export type Result = ResultSuccess | ResultError;
