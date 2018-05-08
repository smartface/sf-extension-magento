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
    define(['ApiClient', 'model/CatalogDataProductTierPriceInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CatalogDataProductTierPriceInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogProductTierPriceManagementV1Api = factory(root.magento.ApiClient, root.magento.CatalogDataProductTierPriceInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, CatalogDataProductTierPriceInterface, ErrorResponse) {
  'use strict';

  /**
   * CatalogProductTierPriceManagementV1 service.
   * @module api/CatalogProductTierPriceManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CatalogProductTierPriceManagementV1Api. 
   * @alias module:api/CatalogProductTierPriceManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the catalogProductTierPriceManagementV1AddPost operation.
     * @callback module:api/CatalogProductTierPriceManagementV1Api~catalogProductTierPriceManagementV1AddPostCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create tier price for product
     * @param {String} sku 
     * @param {String} customerGroupId &#39;all&#39; can be used to specify &#39;ALL GROUPS&#39;
     * @param {Number} price 
     * @param {Number} qty 
     * @param {module:api/CatalogProductTierPriceManagementV1Api~catalogProductTierPriceManagementV1AddPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.catalogProductTierPriceManagementV1AddPost = function(sku, customerGroupId, price, qty, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductTierPriceManagementV1AddPost");
      }

      // verify the required parameter 'customerGroupId' is set
      if (customerGroupId === undefined || customerGroupId === null) {
        throw new Error("Missing the required parameter 'customerGroupId' when calling catalogProductTierPriceManagementV1AddPost");
      }

      // verify the required parameter 'price' is set
      if (price === undefined || price === null) {
        throw new Error("Missing the required parameter 'price' when calling catalogProductTierPriceManagementV1AddPost");
      }

      // verify the required parameter 'qty' is set
      if (qty === undefined || qty === null) {
        throw new Error("Missing the required parameter 'qty' when calling catalogProductTierPriceManagementV1AddPost");
      }


      var pathParams = {
        'sku': sku,
        'customerGroupId': customerGroupId,
        'price': price,
        'qty': qty
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
        '/V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}/price/{price}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductTierPriceManagementV1GetListGet operation.
     * @callback module:api/CatalogProductTierPriceManagementV1Api~catalogProductTierPriceManagementV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CatalogDataProductTierPriceInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tier price of product
     * @param {String} sku 
     * @param {String} customerGroupId &#39;all&#39; can be used to specify &#39;ALL GROUPS&#39;
     * @param {module:api/CatalogProductTierPriceManagementV1Api~catalogProductTierPriceManagementV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CatalogDataProductTierPriceInterface>}
     */
    this.catalogProductTierPriceManagementV1GetListGet = function(sku, customerGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductTierPriceManagementV1GetListGet");
      }

      // verify the required parameter 'customerGroupId' is set
      if (customerGroupId === undefined || customerGroupId === null) {
        throw new Error("Missing the required parameter 'customerGroupId' when calling catalogProductTierPriceManagementV1GetListGet");
      }


      var pathParams = {
        'sku': sku,
        'customerGroupId': customerGroupId
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
      var returnType = [CatalogDataProductTierPriceInterface];

      return this.apiClient.callApi(
        '/V1/products/{sku}/group-prices/{customerGroupId}/tiers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductTierPriceManagementV1RemoveDelete operation.
     * @callback module:api/CatalogProductTierPriceManagementV1Api~catalogProductTierPriceManagementV1RemoveDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove tier price from product
     * @param {String} sku 
     * @param {String} customerGroupId &#39;all&#39; can be used to specify &#39;ALL GROUPS&#39;
     * @param {Number} qty 
     * @param {module:api/CatalogProductTierPriceManagementV1Api~catalogProductTierPriceManagementV1RemoveDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.catalogProductTierPriceManagementV1RemoveDelete = function(sku, customerGroupId, qty, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductTierPriceManagementV1RemoveDelete");
      }

      // verify the required parameter 'customerGroupId' is set
      if (customerGroupId === undefined || customerGroupId === null) {
        throw new Error("Missing the required parameter 'customerGroupId' when calling catalogProductTierPriceManagementV1RemoveDelete");
      }

      // verify the required parameter 'qty' is set
      if (qty === undefined || qty === null) {
        throw new Error("Missing the required parameter 'qty' when calling catalogProductTierPriceManagementV1RemoveDelete");
      }


      var pathParams = {
        'sku': sku,
        'customerGroupId': customerGroupId,
        'qty': qty
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
        '/V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));