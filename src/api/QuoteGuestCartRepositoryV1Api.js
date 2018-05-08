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
    define(['ApiClient', 'model/ErrorResponse', 'model/QuoteDataCartInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/QuoteDataCartInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.QuoteGuestCartRepositoryV1Api = factory(root.magento.ApiClient, root.magento.ErrorResponse, root.magento.QuoteDataCartInterface);
  }
}(this, function(ApiClient, ErrorResponse, QuoteDataCartInterface) {
  'use strict';

  /**
   * QuoteGuestCartRepositoryV1 service.
   * @module api/QuoteGuestCartRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new QuoteGuestCartRepositoryV1Api. 
   * @alias module:api/QuoteGuestCartRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the quoteGuestCartRepositoryV1GetGet operation.
     * @callback module:api/QuoteGuestCartRepositoryV1Api~quoteGuestCartRepositoryV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteDataCartInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable a guest user to return information for a specified cart.
     * @param {String} cartId 
     * @param {module:api/QuoteGuestCartRepositoryV1Api~quoteGuestCartRepositoryV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteDataCartInterface}
     */
    this.quoteGuestCartRepositoryV1GetGet = function(cartId, callback) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling quoteGuestCartRepositoryV1GetGet");
      }


      var pathParams = {
        'cartId': cartId
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
      var returnType = QuoteDataCartInterface;

      return this.apiClient.callApi(
        '/V1/guest-carts/{cartId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));