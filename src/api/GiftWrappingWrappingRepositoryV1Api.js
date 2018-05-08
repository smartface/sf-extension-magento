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
    define(['ApiClient', 'model/Body121', 'model/Body122', 'model/ErrorResponse', 'model/GiftWrappingDataWrappingInterface', 'model/GiftWrappingDataWrappingSearchResultsInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body121'), require('../model/Body122'), require('../model/ErrorResponse'), require('../model/GiftWrappingDataWrappingInterface'), require('../model/GiftWrappingDataWrappingSearchResultsInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.GiftWrappingWrappingRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body121, root.magento.Body122, root.magento.ErrorResponse, root.magento.GiftWrappingDataWrappingInterface, root.magento.GiftWrappingDataWrappingSearchResultsInterface);
  }
}(this, function(ApiClient, Body121, Body122, ErrorResponse, GiftWrappingDataWrappingInterface, GiftWrappingDataWrappingSearchResultsInterface) {
  'use strict';

  /**
   * GiftWrappingWrappingRepositoryV1 service.
   * @module api/GiftWrappingWrappingRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new GiftWrappingWrappingRepositoryV1Api. 
   * @alias module:api/GiftWrappingWrappingRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the giftWrappingWrappingRepositoryV1DeleteByIdDelete operation.
     * @callback module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1DeleteByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete gift wrapping
     * @param {Number} id 
     * @param {module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1DeleteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.giftWrappingWrappingRepositoryV1DeleteByIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling giftWrappingWrappingRepositoryV1DeleteByIdDelete");
      }


      var pathParams = {
        'id': id
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
        '/V1/gift-wrappings/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the giftWrappingWrappingRepositoryV1GetGet operation.
     * @callback module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GiftWrappingDataWrappingInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return data object for specified wrapping ID and store.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.storeId 
     * @param {module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GiftWrappingDataWrappingInterface}
     */
    this.giftWrappingWrappingRepositoryV1GetGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling giftWrappingWrappingRepositoryV1GetGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'storeId': opts['storeId'],
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
      var returnType = GiftWrappingDataWrappingInterface;

      return this.apiClient.callApi(
        '/V1/gift-wrappings/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the giftWrappingWrappingRepositoryV1GetListGet operation.
     * @callback module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GiftWrappingDataWrappingSearchResultsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return list of gift wrapping data objects based on search criteria This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#WrappingRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchCriteriaFilterGroupsFiltersField Field
     * @param {String} opts.searchCriteriaFilterGroupsFiltersValue Value
     * @param {String} opts.searchCriteriaFilterGroupsFiltersConditionType Condition type
     * @param {String} opts.searchCriteriaSortOrdersField Sorting field.
     * @param {String} opts.searchCriteriaSortOrdersDirection Sorting direction.
     * @param {Number} opts.searchCriteriaPageSize Page size.
     * @param {Number} opts.searchCriteriaCurrentPage Current page.
     * @param {module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GiftWrappingDataWrappingSearchResultsInterface}
     */
    this.giftWrappingWrappingRepositoryV1GetListGet = function(opts, callback) {
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
      var returnType = GiftWrappingDataWrappingSearchResultsInterface;

      return this.apiClient.callApi(
        '/V1/gift-wrappings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the giftWrappingWrappingRepositoryV1SavePost operation.
     * @callback module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1SavePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GiftWrappingDataWrappingInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create/Update new gift wrapping with data object values
     * @param {Object} opts Optional parameters
     * @param {module:model/Body121} opts.body 
     * @param {module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1SavePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GiftWrappingDataWrappingInterface}
     */
    this.giftWrappingWrappingRepositoryV1SavePost = function(opts, callback) {
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
      var returnType = GiftWrappingDataWrappingInterface;

      return this.apiClient.callApi(
        '/V1/gift-wrappings', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the giftWrappingWrappingRepositoryV1SavePut operation.
     * @callback module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1SavePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GiftWrappingDataWrappingInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create/Update new gift wrapping with data object values
     * @param {String} wrappingId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body122} opts.body 
     * @param {module:api/GiftWrappingWrappingRepositoryV1Api~giftWrappingWrappingRepositoryV1SavePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GiftWrappingDataWrappingInterface}
     */
    this.giftWrappingWrappingRepositoryV1SavePut = function(wrappingId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'wrappingId' is set
      if (wrappingId === undefined || wrappingId === null) {
        throw new Error("Missing the required parameter 'wrappingId' when calling giftWrappingWrappingRepositoryV1SavePut");
      }


      var pathParams = {
        'wrappingId': wrappingId
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
      var returnType = GiftWrappingDataWrappingInterface;

      return this.apiClient.callApi(
        '/V1/gift-wrappings/{wrappingId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
