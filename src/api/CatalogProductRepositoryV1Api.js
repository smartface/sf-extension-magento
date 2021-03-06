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
    define(['ApiClient', 'model/Body18', 'model/Body19', 'model/CatalogDataProductInterface', 'model/CatalogDataProductSearchResultsInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body18'), require('../model/Body19'), require('../model/CatalogDataProductInterface'), require('../model/CatalogDataProductSearchResultsInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogProductRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body18, root.magento.Body19, root.magento.CatalogDataProductInterface, root.magento.CatalogDataProductSearchResultsInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body18, Body19, CatalogDataProductInterface, CatalogDataProductSearchResultsInterface, ErrorResponse) {
  'use strict';

  /**
   * CatalogProductRepositoryV1 service.
   * @module api/CatalogProductRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CatalogProductRepositoryV1Api. 
   * @alias module:api/CatalogProductRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the catalogProductRepositoryV1DeleteByIdDelete operation.
     * @callback module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1DeleteByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} sku 
     * @param {module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1DeleteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.catalogProductRepositoryV1DeleteByIdDelete = function(sku, callback) {
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductRepositoryV1DeleteByIdDelete");
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
        '/V1/products/{sku}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductRepositoryV1GetGet operation.
     * @callback module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogDataProductInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get info about product by product SKU
     * @param {String} sku 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.editMode 
     * @param {Number} opts.storeId 
     * @param {Boolean} opts.forceReload 
     * @param {module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogDataProductInterface}
     */
    this.catalogProductRepositoryV1GetGet = function(sku, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductRepositoryV1GetGet");
      }


      var pathParams = {
        'sku': sku
      };
      var queryParams = {
        'editMode': opts['editMode'],
        'storeId': opts['storeId'],
        'forceReload': opts['forceReload'],
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
      var returnType = CatalogDataProductInterface;

      return this.apiClient.callApi(
        '/V1/products/{sku}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductRepositoryV1GetListGet operation.
     * @callback module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogDataProductSearchResultsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get product list
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchCriteriaFilterGroupsFiltersField Field
     * @param {String} opts.searchCriteriaFilterGroupsFiltersValue Value
     * @param {String} opts.searchCriteriaFilterGroupsFiltersConditionType Condition type
     * @param {String} opts.searchCriteriaSortOrdersField Sorting field.
     * @param {String} opts.searchCriteriaSortOrdersDirection Sorting direction.
     * @param {Number} opts.searchCriteriaPageSize Page size.
     * @param {Number} opts.searchCriteriaCurrentPage Current page.
     * @param {module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogDataProductSearchResultsInterface}
     */
    this.catalogProductRepositoryV1GetListGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchCriteria[filterGroups][][filters][][field]': opts['searchCriteriaFilterGroupsFiltersField'],
        'searchCriteria[filterGroups][][filters][][value]': opts['searchCriteriaFilterGroupsFiltersValue'],
        'searchCriteria[filterGroups][][filters][][conditionType]': opts['searchCriteriaFilterGroupsFiltersConditionType'],
        'searchCriteria[sortOrders][][field]': opts['searchCriteriaSortOrdersField'],
        'searchCriteria[sortOrders][][direction]': opts['searchCriteriaSortOrdersDirection'],
        'searchCriteria[pageSize]': opts['searchCriteriaPageSize'],
        'searchCriteria[currentPage]': opts['searchCriteriaCurrentPage'],
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
      var returnType = CatalogDataProductSearchResultsInterface;

      return this.apiClient.callApi(
        '/V1/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductRepositoryV1SavePost operation.
     * @callback module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1SavePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogDataProductInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create product
     * @param {Object} opts Optional parameters
     * @param {module:model/Body18} opts.body 
     * @param {module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1SavePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogDataProductInterface}
     */
    this.catalogProductRepositoryV1SavePost = function(opts, callback) {
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
      var returnType = CatalogDataProductInterface;

      return this.apiClient.callApi(
        '/V1/products', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the catalogProductRepositoryV1SavePut operation.
     * @callback module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1SavePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogDataProductInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create product
     * @param {String} sku 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body19} opts.body 
     * @param {module:api/CatalogProductRepositoryV1Api~catalogProductRepositoryV1SavePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogDataProductInterface}
     */
    this.catalogProductRepositoryV1SavePut = function(sku, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling catalogProductRepositoryV1SavePut");
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
      var returnType = CatalogDataProductInterface;

      return this.apiClient.callApi(
        '/V1/products/{sku}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
