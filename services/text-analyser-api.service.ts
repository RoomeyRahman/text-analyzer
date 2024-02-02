import request from "./request";
import { IParam } from "./constant.mock";

export async function analyze(params?: IParam) {
    return request(
        "/text-analyze",
        {
            method: "GET",
            data: (params && params.data) || {},
        },
        params && params?.headers
    );
}

export async function analyzeFile(params?: IParam) {
    return request(
        "/text-analyze",
        {
            method: "POST",
            data: (params && params.data) || {},
        },
        params && params?.headers
    );
}
