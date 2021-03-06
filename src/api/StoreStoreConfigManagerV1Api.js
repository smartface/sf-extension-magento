/**
 * Magento Enterprise Edition 2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/StoreDataStoreConfigInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/StoreDataStoreConfigInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.StoreStoreConfigManagerV1Api = factory(root.magento.ApiClient, root.magento.ErrorResponse, root.magento.StoreDataStoreConfigInterface);
  }
}(this, function(ApiClient, ErrorResponse, StoreDataStoreConfigInterface) {
  'use strict';

  /**
   * StoreStoreConfigManagerV1 service.
   * @module api/StoreStoreConfigManagerV1Api
   * @version 2.0
   */

  /**
   * Constructs a new StoreStoreConfigManagerV1Api. 
   * @alias module:api/StoreStoreConfigManagerV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the storeStoreConfigManagerV1GetStoreConfigsGet operation.
     * @callback module:api/StoreStoreConfigManagerV1Api~storeStoreConfigManagerV1GetStoreConfigsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/StoreDataStoreConfigInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.storeCodes 
     * @param {module:api/StoreStoreConfigManagerV1Api~storeStoreConfigManagerV1GetStoreConfigsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/StoreDataStoreConfigInterface>}
     */
    this.storeStoreConfigManagerV1GetStoreConfigsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'storeCodes': {
          value: opts['storeCodes'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [StoreDataStoreConfigInterface];

      return this.apiClient.callApi(
        '/V1/store/storeConfigs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
