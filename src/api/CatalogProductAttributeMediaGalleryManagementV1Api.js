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
    define(['ApiClient', 'model/Body28', 'model/Body29', 'model/CatalogDataProductAttributeMediaGalleryEntryInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body28'), require('../model/Body29'), require('../model/CatalogDataProductAttributeMediaGalleryEntryInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogProductAttributeMediaGalleryManagementV1Api = factory(root.magento.ApiClient, root.magento.Body28, root.magento.Body29, root.magento.CatalogDataProductAttributeMediaGalleryEntryInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body28, Body29, CatalogDataProductAttributeMediaGalleryEntryInterface, ErrorResponse) {
  'use strict';

  /**
   * CatalogProductAttributeMediaGalleryManagementV1 service.
   * @module api/CatalogProductAttributeMediaGalleryManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CatalogProductAttributeMediaGalleryManagementV1Api. 
   * @alias module:api/CatalogProductAttributeMediaGalleryManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the catalogProductAttributeMediaGalleryManagementV1CreatePost operation.
     * @callback module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1CreatePostCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new gallery entry
     * @param {String} sku 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body29} opts.body 
     * @param {module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1CreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.catalogProductAttributeMediaGalleryManagementV1CreatePost = function(sku, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductAttributeMediaGalleryManagementV1CreatePost");
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
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/V1/products/{sku}/media', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductAttributeMediaGalleryManagementV1GetGet operation.
     * @callback module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogDataProductAttributeMediaGalleryEntryInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return information about gallery entry
     * @param {String} sku 
     * @param {Number} entryId 
     * @param {module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogDataProductAttributeMediaGalleryEntryInterface}
     */
    this.catalogProductAttributeMediaGalleryManagementV1GetGet = function(sku, entryId, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductAttributeMediaGalleryManagementV1GetGet");
      }

      // verify the required parameter 'entryId' is set
      if (entryId === undefined || entryId === null) {
        throw new Error("Missing the required parameter 'entryId' when calling catalogProductAttributeMediaGalleryManagementV1GetGet");
      }


      var pathParams = {
        'sku': sku,
        'entryId': entryId
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
      var returnType = CatalogDataProductAttributeMediaGalleryEntryInterface;

      return this.apiClient.callApi(
        '/V1/products/{sku}/media/{entryId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductAttributeMediaGalleryManagementV1GetListGet operation.
     * @callback module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CatalogDataProductAttributeMediaGalleryEntryInterface>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the list of gallery entries associated with given product
     * @param {String} sku 
     * @param {module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CatalogDataProductAttributeMediaGalleryEntryInterface>}
     */
    this.catalogProductAttributeMediaGalleryManagementV1GetListGet = function(sku, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductAttributeMediaGalleryManagementV1GetListGet");
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
      var returnType = [CatalogDataProductAttributeMediaGalleryEntryInterface];

      return this.apiClient.callApi(
        '/V1/products/{sku}/media', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductAttributeMediaGalleryManagementV1RemoveDelete operation.
     * @callback module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1RemoveDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove gallery entry
     * @param {String} sku 
     * @param {Number} entryId 
     * @param {module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1RemoveDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.catalogProductAttributeMediaGalleryManagementV1RemoveDelete = function(sku, entryId, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductAttributeMediaGalleryManagementV1RemoveDelete");
      }

      // verify the required parameter 'entryId' is set
      if (entryId === undefined || entryId === null) {
        throw new Error("Missing the required parameter 'entryId' when calling catalogProductAttributeMediaGalleryManagementV1RemoveDelete");
      }


      var pathParams = {
        'sku': sku,
        'entryId': entryId
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
        '/V1/products/{sku}/media/{entryId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductAttributeMediaGalleryManagementV1UpdatePut operation.
     * @callback module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1UpdatePutCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update gallery entry
     * @param {String} sku 
     * @param {String} entryId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body28} opts.body 
     * @param {module:api/CatalogProductAttributeMediaGalleryManagementV1Api~catalogProductAttributeMediaGalleryManagementV1UpdatePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.catalogProductAttributeMediaGalleryManagementV1UpdatePut = function(sku, entryId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductAttributeMediaGalleryManagementV1UpdatePut");
      }

      // verify the required parameter 'entryId' is set
      if (entryId === undefined || entryId === null) {
        throw new Error("Missing the required parameter 'entryId' when calling catalogProductAttributeMediaGalleryManagementV1UpdatePut");
      }


      var pathParams = {
        'sku': sku,
        'entryId': entryId
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
        '/V1/products/{sku}/media/{entryId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
