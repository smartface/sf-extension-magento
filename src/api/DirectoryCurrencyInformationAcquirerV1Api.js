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
    define(['ApiClient', 'model/DirectoryDataCurrencyInformationInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DirectoryDataCurrencyInformationInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.DirectoryCurrencyInformationAcquirerV1Api = factory(root.magento.ApiClient, root.magento.DirectoryDataCurrencyInformationInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, DirectoryDataCurrencyInformationInterface, ErrorResponse) {
  'use strict';

  /**
   * DirectoryCurrencyInformationAcquirerV1 service.
   * @module api/DirectoryCurrencyInformationAcquirerV1Api
   * @version 2.0
   */

  /**
   * Constructs a new DirectoryCurrencyInformationAcquirerV1Api. 
   * @alias module:api/DirectoryCurrencyInformationAcquirerV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet operation.
     * @callback module:api/DirectoryCurrencyInformationAcquirerV1Api~directoryCurrencyInformationAcquirerV1GetCurrencyInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DirectoryDataCurrencyInformationInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get currency information for the store.
     * @param {module:api/DirectoryCurrencyInformationAcquirerV1Api~directoryCurrencyInformationAcquirerV1GetCurrencyInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DirectoryDataCurrencyInformationInterface}
     */
    this.directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = DirectoryDataCurrencyInformationInterface;

      return this.apiClient.callApi(
        '/V1/directory/currency', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
