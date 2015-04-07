/*
 * Описание главного модуля приложения
 */
"use strict";

angular.module('app', [

    // зависимости модуля:
    // 1. роутер - https://github.com/angular-ui/ui-router
    'ui.router'

    ])

    // url по-умолчанию
    .config(function($urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');

    });

