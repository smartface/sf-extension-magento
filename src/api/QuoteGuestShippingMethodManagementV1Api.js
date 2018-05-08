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
    define(['ApiClient', 'model/ErrorResponse', 'model/QuoteDataShippingMethodInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/QuoteDataShippingMethodInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.QuoteGuestShippingMethodManagementV1Api = factory(root.magento.ApiClient, root.magento.ErrorResponse, root.magento.QuoteDataShippingMethodInterface);
  }
}(this, function(ApiClient, ErrorResponse, QuoteDataShippingMethodInterface) {
  'use strict';

  /**
   * QuoteGuestShippingMethodManagementV1 service.
   * @module api/QuoteGuestShippingMethodManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new QuoteGuestShippingMethodManagementV1Api. 
   * @alias module:api/QuoteGuestShippingMethodManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the quoteGuestShippingMethodManagementV1GetListGet operation.
     * @callback module:api/QuoteGuestShippingMethodManagementV1Api~quoteGuestShippingMethodManagementV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuoteDataShippingMethodInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List applicable shipping methods for a specified quote.
     * @param {String} cartId The shopping cart ID.
     * @param {module:api/QuoteGuestShippingMethodManagementV1Api~quoteGuestShippingMethodManagementV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuoteDataShippingMethodInterface>}
     */
    this.quoteGuestShippingMethodManagementV1GetListGet = function(cartId, callback) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling quoteGuestShippingMethodManagementV1GetListGet");
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
      var returnType = [QuoteDataShippingMethodInterface];

      return this.apiClient.callApi(
        '/V1/guest-carts/{cartId}/shipping-methods', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
