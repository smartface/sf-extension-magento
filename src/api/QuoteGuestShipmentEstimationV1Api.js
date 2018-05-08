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
    define(['ApiClient', 'model/Body50', 'model/ErrorResponse', 'model/QuoteDataShippingMethodInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body50'), require('../model/ErrorResponse'), require('../model/QuoteDataShippingMethodInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.QuoteGuestShipmentEstimationV1Api = factory(root.magento.ApiClient, root.magento.Body50, root.magento.ErrorResponse, root.magento.QuoteDataShippingMethodInterface);
  }
}(this, function(ApiClient, Body50, ErrorResponse, QuoteDataShippingMethodInterface) {
  'use strict';

  /**
   * QuoteGuestShipmentEstimationV1 service.
   * @module api/QuoteGuestShipmentEstimationV1Api
   * @version 2.0
   */

  /**
   * Constructs a new QuoteGuestShipmentEstimationV1Api. 
   * @alias module:api/QuoteGuestShipmentEstimationV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost operation.
     * @callback module:api/QuoteGuestShipmentEstimationV1Api~quoteGuestShipmentEstimationV1EstimateByExtendedAddressPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuoteDataShippingMethodInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estimate shipping by address and return list of available shipping methods
     * @param {String} cartId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body50} opts.body 
     * @param {module:api/QuoteGuestShipmentEstimationV1Api~quoteGuestShipmentEstimationV1EstimateByExtendedAddressPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuoteDataShippingMethodInterface>}
     */
    this.quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost = function(cartId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost");
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
        '/V1/guest-carts/{cartId}/estimate-shipping-methods', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
