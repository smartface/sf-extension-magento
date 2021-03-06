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
    define(['ApiClient', 'model/Body44', 'model/Body45', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body44'), require('../model/Body45'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.QuoteGuestCartManagementV1Api = factory(root.magento.ApiClient, root.magento.Body44, root.magento.Body45, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body44, Body45, ErrorResponse) {
  'use strict';

  /**
   * QuoteGuestCartManagementV1 service.
   * @module api/QuoteGuestCartManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new QuoteGuestCartManagementV1Api. 
   * @alias module:api/QuoteGuestCartManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the quoteGuestCartManagementV1AssignCustomerPut operation.
     * @callback module:api/QuoteGuestCartManagementV1Api~quoteGuestCartManagementV1AssignCustomerPutCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign a specified customer to a specified shopping cart.
     * @param {String} cartId The cart ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body44} opts.body 
     * @param {module:api/QuoteGuestCartManagementV1Api~quoteGuestCartManagementV1AssignCustomerPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.quoteGuestCartManagementV1AssignCustomerPut = function(cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling quoteGuestCartManagementV1AssignCustomerPut");
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/V1/guest-carts/{cartId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the quoteGuestCartManagementV1CreateEmptyCartPost operation.
     * @callback module:api/QuoteGuestCartManagementV1Api~quoteGuestCartManagementV1CreateEmptyCartPostCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable an customer or guest user to create an empty cart and quote for an anonymous customer.
     * @param {module:api/QuoteGuestCartManagementV1Api~quoteGuestCartManagementV1CreateEmptyCartPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.quoteGuestCartManagementV1CreateEmptyCartPost = function(callback) {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/V1/guest-carts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the quoteGuestCartManagementV1PlaceOrderPut operation.
     * @callback module:api/QuoteGuestCartManagementV1Api~quoteGuestCartManagementV1PlaceOrderPutCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Place an order for a specified cart.
     * @param {String} cartId The cart ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body45} opts.body 
     * @param {module:api/QuoteGuestCartManagementV1Api~quoteGuestCartManagementV1PlaceOrderPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.quoteGuestCartManagementV1PlaceOrderPut = function(cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling quoteGuestCartManagementV1PlaceOrderPut");
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
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/V1/guest-carts/{cartId}/order', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
