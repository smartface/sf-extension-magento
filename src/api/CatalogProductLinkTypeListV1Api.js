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
    define(['ApiClient', 'model/CatalogDataProductLinkAttributeInterface', 'model/CatalogDataProductLinkTypeInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CatalogDataProductLinkAttributeInterface'), require('../model/CatalogDataProductLinkTypeInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogProductLinkTypeListV1Api = factory(root.magento.ApiClient, root.magento.CatalogDataProductLinkAttributeInterface, root.magento.CatalogDataProductLinkTypeInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, CatalogDataProductLinkAttributeInterface, CatalogDataProductLinkTypeInterface, ErrorResponse) {
  'use strict';

  /**
   * CatalogProductLinkTypeListV1 service.
   * @module api/CatalogProductLinkTypeListV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CatalogProductLinkTypeListV1Api. 
   * @alias module:api/CatalogProductLinkTypeListV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the catalogProductLinkTypeListV1GetItemAttributesGet operation.
     * @callback module:api/CatalogProductLinkTypeListV1Api~catalogProductLinkTypeListV1GetItemAttributesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CatalogDataProductLinkAttributeInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provide a list of the product link type attributes
     * @param {String} type 
     * @param {module:api/CatalogProductLinkTypeListV1Api~catalogProductLinkTypeListV1GetItemAttributesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CatalogDataProductLinkAttributeInterface>}
     */
    this.catalogProductLinkTypeListV1GetItemAttributesGet = function(type, callback) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling catalogProductLinkTypeListV1GetItemAttributesGet");
      }


      var pathParams = {
        'type': type
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
      var returnType = [CatalogDataProductLinkAttributeInterface];

      return this.apiClient.callApi(
        '/V1/products/links/{type}/attributes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductLinkTypeListV1GetItemsGet operation.
     * @callback module:api/CatalogProductLinkTypeListV1Api~catalogProductLinkTypeListV1GetItemsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CatalogDataProductLinkTypeInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve information about available product link types
     * @param {module:api/CatalogProductLinkTypeListV1Api~catalogProductLinkTypeListV1GetItemsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CatalogDataProductLinkTypeInterface>}
     */
    this.catalogProductLinkTypeListV1GetItemsGet = function(callback) {
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
      var returnType = [CatalogDataProductLinkTypeInterface];

      return this.apiClient.callApi(
        '/V1/products/links/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
