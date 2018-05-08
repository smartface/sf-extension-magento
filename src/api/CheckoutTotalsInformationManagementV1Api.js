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
    define(['ApiClient', 'model/Body86', 'model/Body87', 'model/ErrorResponse', 'model/QuoteDataTotalsInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body86'), require('../model/Body87'), require('../model/ErrorResponse'), require('../model/QuoteDataTotalsInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CheckoutTotalsInformationManagementV1Api = factory(root.magento.ApiClient, root.magento.Body86, root.magento.Body87, root.magento.ErrorResponse, root.magento.QuoteDataTotalsInterface);
  }
}(this, function(ApiClient, Body86, Body87, ErrorResponse, QuoteDataTotalsInterface) {
  'use strict';

  /**
   * CheckoutTotalsInformationManagementV1 service.
   * @module api/CheckoutTotalsInformationManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CheckoutTotalsInformationManagementV1Api. 
   * @alias module:api/CheckoutTotalsInformationManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkoutTotalsInformationManagementV1CalculatePost operation.
     * @callback module:api/CheckoutTotalsInformationManagementV1Api~checkoutTotalsInformationManagementV1CalculatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteDataTotalsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate quote totals based on address and shipping method.
     * @param {Number} cartId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body86} opts.body 
     * @param {module:api/CheckoutTotalsInformationManagementV1Api~checkoutTotalsInformationManagementV1CalculatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteDataTotalsInterface}
     */
    this.checkoutTotalsInformationManagementV1CalculatePost = function(cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling checkoutTotalsInformationManagementV1CalculatePost");
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
      var returnType = QuoteDataTotalsInterface;

      return this.apiClient.callApi(
        '/V1/carts/{cartId}/totals-information', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkoutTotalsInformationManagementV1CalculatePost_0 operation.
     * @callback module:api/CheckoutTotalsInformationManagementV1Api~checkoutTotalsInformationManagementV1CalculatePost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteDataTotalsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate quote totals based on address and shipping method.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body87} opts.body 
     * @param {module:api/CheckoutTotalsInformationManagementV1Api~checkoutTotalsInformationManagementV1CalculatePost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteDataTotalsInterface}
     */
    this.checkoutTotalsInformationManagementV1CalculatePost_0 = function(opts, callback) {
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
      var returnType = QuoteDataTotalsInterface;

      return this.apiClient.callApi(
        '/V1/carts/mine/totals-information', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
