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
    define(['ApiClient', 'model/Body109', 'model/CatalogDataProductInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body109'), require('../model/CatalogDataProductInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.ConfigurableProductLinkManagementV1Api = factory(root.magento.ApiClient, root.magento.Body109, root.magento.CatalogDataProductInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body109, CatalogDataProductInterface, ErrorResponse) {
  'use strict';

  /**
   * ConfigurableProductLinkManagementV1 service.
   * @module api/ConfigurableProductLinkManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new ConfigurableProductLinkManagementV1Api. 
   * @alias module:api/ConfigurableProductLinkManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the configurableProductLinkManagementV1AddChildPost operation.
     * @callback module:api/ConfigurableProductLinkManagementV1Api~configurableProductLinkManagementV1AddChildPostCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} sku 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body109} opts.body 
     * @param {module:api/ConfigurableProductLinkManagementV1Api~configurableProductLinkManagementV1AddChildPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.configurableProductLinkManagementV1AddChildPost = function(sku, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling configurableProductLinkManagementV1AddChildPost");
      }


      var pathParams = {
        'sku': sku
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
        '/V1/configurable-products/{sku}/child', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configurableProductLinkManagementV1GetChildrenGet operation.
     * @callback module:api/ConfigurableProductLinkManagementV1Api~configurableProductLinkManagementV1GetChildrenGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CatalogDataProductInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all children for Bundle product
     * @param {String} sku 
     * @param {module:api/ConfigurableProductLinkManagementV1Api~configurableProductLinkManagementV1GetChildrenGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CatalogDataProductInterface>}
     */
    this.configurableProductLinkManagementV1GetChildrenGet = function(sku, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling configurableProductLinkManagementV1GetChildrenGet");
      }


      var pathParams = {
        'sku': sku
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
      var returnType = [CatalogDataProductInterface];

      return this.apiClient.callApi(
        '/V1/configurable-products/{sku}/children', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configurableProductLinkManagementV1RemoveChildDelete operation.
     * @callback module:api/ConfigurableProductLinkManagementV1Api~configurableProductLinkManagementV1RemoveChildDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove configurable product option
     * @param {String} sku 
     * @param {String} childSku 
     * @param {module:api/ConfigurableProductLinkManagementV1Api~configurableProductLinkManagementV1RemoveChildDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.configurableProductLinkManagementV1RemoveChildDelete = function(sku, childSku, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling configurableProductLinkManagementV1RemoveChildDelete");
      }

      // verify the required parameter 'childSku' is set
      if (childSku === undefined || childSku === null) {
        throw new Error("Missing the required parameter 'childSku' when calling configurableProductLinkManagementV1RemoveChildDelete");
      }


      var pathParams = {
        'sku': sku,
        'childSku': childSku
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
        '/V1/configurable-products/{sku}/children/{childSku}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
