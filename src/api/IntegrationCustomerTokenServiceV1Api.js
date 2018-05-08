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
    define(['ApiClient', 'model/Body124', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body124'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.IntegrationCustomerTokenServiceV1Api = factory(root.magento.ApiClient, root.magento.Body124, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body124, ErrorResponse) {
  'use strict';

  /**
   * IntegrationCustomerTokenServiceV1 service.
   * @module api/IntegrationCustomerTokenServiceV1Api
   * @version 2.0
   */

  /**
   * Constructs a new IntegrationCustomerTokenServiceV1Api. 
   * @alias module:api/IntegrationCustomerTokenServiceV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost operation.
     * @callback module:api/IntegrationCustomerTokenServiceV1Api~integrationCustomerTokenServiceV1CreateCustomerAccessTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create access token for admin given the customer credentials.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body124} opts.body 
     * @param {module:api/IntegrationCustomerTokenServiceV1Api~integrationCustomerTokenServiceV1CreateCustomerAccessTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/V1/integration/customer/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
