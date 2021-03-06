'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    modelName: '',

    primaryKey: '',

    baseURL: 'api',

    trailingSlash: false,

    extension: '',

    caseSensitive: false,

    routeDelimeter: '-',

    globalParameters: {},

    suffixes: {
        create: 'create',
        update: 'update',
        destroy: 'destroy'
    },

    methods: {
        create: 'post',
        update: 'post',
        destroy: 'post'
    },

    routes: {
        model: '',
        collection: '',
        any: ''
    },

    customRoutes: {},

    defaultRoute: 'model',

    debug: false,

    apiConfig: {},

    allowedRequestTypes: ['get', 'post', 'put', 'patch', 'head', 'delete'],

    // eslint-disable-next-line no-unused-vars
    beforeRequest: function beforeRequest(type, url) {},


    // eslint-disable-next-line no-unused-vars
    afterRequest: function afterRequest(response) {},


    // eslint-disable-next-line no-unused-vars
    onError: function onError(response) {}
};