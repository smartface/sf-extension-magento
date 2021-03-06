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
    define(['ApiClient', 'model/Body46', 'model/Body47', 'model/ErrorResponse', 'model/QuoteDataShippingMethodInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body46'), require('../model/Body47'), require('../model/ErrorResponse'), require('../model/QuoteDataShippingMethodInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.QuoteShippingMethodManagementV1Api = factory(root.magento.ApiClient, root.magento.Body46, root.magento.Body47, root.magento.ErrorResponse, root.magento.QuoteDataShippingMethodInterface);
  }
}(this, function(ApiClient, Body46, Body47, ErrorResponse, QuoteDataShippingMethodInterface) {
  'use strict';

  /**
   * QuoteShippingMethodManagementV1 service.
   * @module api/QuoteShippingMethodManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new QuoteShippingMethodManagementV1Api. 
   * @alias module:api/QuoteShippingMethodManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the quoteShippingMethodManagementV1EstimateByAddressIdPost operation.
     * @callback module:api/QuoteShippingMethodManagementV1Api~quoteShippingMethodManagementV1EstimateByAddressIdPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuoteDataShippingMethodInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate shipping
     * @param {Number} cartId The shopping cart ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body46} opts.body 
     * @param {module:api/QuoteShippingMethodManagementV1Api~quoteShippingMethodManagementV1EstimateByAddressIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuoteDataShippingMethodInterface>}
     */
    this.quoteShippingMethodManagementV1EstimateByAddressIdPost = function(cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling quoteShippingMethodManagementV1EstimateByAddressIdPost");
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
        '/V1/carts/{cartId}/estimate-shipping-methods-by-address-id', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the quoteShippingMethodManagementV1EstimateByAddressIdPost_0 operation.
     * @callback module:api/QuoteShippingMethodManagementV1Api~quoteShippingMethodManagementV1EstimateByAddressIdPost_0Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuoteDataShippingMethodInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate shipping
     * @param {Object} opts Optional parameters
     * @param {module:model/Body47} opts.body 
     * @param {module:api/QuoteShippingMethodManagementV1Api~quoteShippingMethodManagementV1EstimateByAddressIdPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuoteDataShippingMethodInterface>}
     */
    this.quoteShippingMethodManagementV1EstimateByAddressIdPost_0 = function(opts, callback) {
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
      var returnType = [QuoteDataShippingMethodInterface];

      return this.apiClient.callApi(
        '/V1/carts/mine/estimate-shipping-methods-by-address-id', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the quoteShippingMethodManagementV1GetListGet operation.
     * @callback module:api/QuoteShippingMethodManagementV1Api~quoteShippingMethodManagementV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuoteDataShippingMethodInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists applicable shipping methods for a specified quote.
     * @param {Number} cartId The shopping cart ID.
     * @param {module:api/QuoteShippingMethodManagementV1Api~quoteShippingMethodManagementV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuoteDataShippingMethodInterface>}
     */
    this.quoteShippingMethodManagementV1GetListGet = function(cartId, callback) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling quoteShippingMethodManagementV1GetListGet");
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
        '/V1/carts/{cartId}/shipping-methods', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the quoteShippingMethodManagementV1GetListGet_0 operation.
     * @callback module:api/QuoteShippingMethodManagementV1Api~quoteShippingMethodManagementV1GetListGet_0Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuoteDataShippingMethodInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists applicable shipping methods for a specified quote.
     * @param {module:api/QuoteShippingMethodManagementV1Api~quoteShippingMethodManagementV1GetListGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuoteDataShippingMethodInterface>}
     */
    this.quoteShippingMethodManagementV1GetListGet_0 = function(callback) {
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
      var returnType = [QuoteDataShippingMethodInterface];

      return this.apiClient.callApi(
        '/V1/carts/mine/shipping-methods', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
