import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

import { LoginService } from "./login.service";
import { inject, Injectable } from "@angular/core";


export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const loginService = inject(LoginService);
    const token = loginService.getToken();

    console.log("!! Inside Functional Interceptor !! Request:", req);

    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            },
        });
    }

    return next(req);
};