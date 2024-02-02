import { ReactElement } from 'react';

export const liveAPI = process.env.NEXT_PUBLIC_FE_API_ENDPOINT;
export const baseUrl = process.env.NEXT_PUBLIC_FE_FE_ENDPOINT;

export type IParam = {
    data?: any;
    headers?: any;
};

export type IAlertType = {
    message: string | ReactElement;
    type: 'success' | 'info' | 'error';
};

