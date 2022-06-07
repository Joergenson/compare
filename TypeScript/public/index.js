"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function lazy(array) {
    if (array === null || array.length === 0)
        return -1;
    const start = Date.now();
    array.sort((a, b) => a - b);
    const lazyExecutionTime = Date.now() - start;
    return lazyExecutionTime;
}
function precise(array) {
    if (array === null || array.length === 0)
        return -1;
    const start = performance.now();
    array.sort((a, b) => a - b);
    const preciseExecutionTime = performance.now() - start;
    return preciseExecutionTime;
}
function request(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        if (endpoint === null || endpoint.length === 0)
            return Promise.resolve(-1);
        const start = performance.now();
        return fetch(endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(() => {
            const requestExecutionTime = performance.now() - start;
            return requestExecutionTime;
        });
    });
}
