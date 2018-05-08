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
    define(['ApiClient', 'model/Body84', 'model/Body85', 'model/CheckoutDataPaymentDetailsInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body84'), require('../model/Body85'), require('../model/CheckoutDataPaymentDetailsInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CheckoutShippingInformationManagementV1Api = factory(root.magento.ApiClient, root.magento.Body84, root.magento.Body85, root.magento.CheckoutDataPaymentDetailsInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body84, Body85, CheckoutDataPaymentDetailsInterface, ErrorResponse) {
  'use strict';

  /**
   * CheckoutShippingInformationManagementV1 service.
   * @module api/CheckoutShippingInformationManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CheckoutShippingInformationManagementV1Api. 
   * @alias module:api/CheckoutShippingInformationManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkoutShippingInformationManagementV1SaveAddressInformationPost operation.
     * @callback module:api/CheckoutShippingInformationManagementV1Api~checkoutShippingInformationManagementV1SaveAddressInformationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckoutDataPaymentDetailsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body84} opts.body 
     * @param {module:api/CheckoutShippingInformationManagementV1Api~checkoutShippingInformationManagementV1SaveAddressInformationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckoutDataPaymentDetailsInterface}
     */
    this.checkoutShippingInformationManagementV1SaveAddressInformationPost = function(opts, callback) {
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
      var returnType = CheckoutDataPaymentDetailsInterface;

      return this.apiClient.callApi(
        '/V1/carts/mine/shipping-information', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkoutShippingInformationManagementV1SaveAddressInformationPost_0 operation.
     * @callback module:api/CheckoutShippingInformationManagementV1Api~checkoutShippingInformationManagementV1SaveAddressInformationPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckoutDataPaymentDetailsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Number} cartId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body85} opts.body 
     * @param {module:api/CheckoutShippingInformationManagementV1Api~checkoutShippingInformationManagementV1SaveAddressInformationPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CheckoutDataPaymentDetailsInterface}
     */
    this.checkoutShippingInformationManagementV1SaveAddressInformationPost_0 = function(cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling checkoutShippingInformationManagementV1SaveAddressInformationPost_0");
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
      var returnType = CheckoutDataPaymentDetailsInterface;

      return this.apiClient.callApi(
        '/V1/carts/{cartId}/shipping-information', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
