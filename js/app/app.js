/*global define, console*/
/*jslint nomen: true, vars: true*/
define(['backbone', 'marionette', 'jquery', 'underscore'], function (Backbone, Marionette, $, _) {
    'use strict';

    var App = new Marionette.Application();

    App.addRegions({
        container: '#container'
    });

    var ContentView = Marionette.ItemView.extend({
        template: _.template('<p>Hi! <%= message %></p>')
    });

    var ContentModel = Backbone.Model.extend({
        defaults: {
            message: 'user'
        }
    });

    App.on("initialize:after", function (options) {
        var contentView = new ContentView({
            model: new ContentModel({
                message: 'username'
            })
        });
        App.container.show(contentView);
    });
    return App;
});