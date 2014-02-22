/*global require, console*/
/* global require */
require.config({
    paths: {
        bootstrap   : "lib/bootstrap",
        jquery      : "lib/jquery",
        underscore  : 'lib/underscore',
        backbone    : 'lib/backbone',
        marionette  : 'lib/backbone.marionette'
    },
    shim : {
        jquery : {
            exports : 'jQuery'
        },
        bootstrap : {
            deps : ["jquery"]
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        }
    }
});

require(["infrastructure"], function () {
    'use strict';
    require(["app/app"], function (App) {
        App.start();
    });
});

