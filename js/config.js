"use strict";

/**
 * Config module which defines Firebase URL.
 * @module myApp/config
 */
var app = angular.module("myApp.config", ["ngRoute"]);

//Firebase URL 
app.constant("FBURL", "https://glaring-heat-3554.firebaseio.com/");
