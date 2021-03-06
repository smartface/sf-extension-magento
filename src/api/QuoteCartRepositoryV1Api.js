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
    define(['ApiClient', 'model/ErrorResponse', 'model/QuoteDataCartInterface', 'model/QuoteDataCartSearchResultsInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/QuoteDataCartInterface'), require('../model/QuoteDataCartSearchResultsInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.QuoteCartRepositoryV1Api = factory(root.magento.ApiClient, root.magento.ErrorResponse, root.magento.QuoteDataCartInterface, root.magento.QuoteDataCartSearchResultsInterface);
  }
}(this, function(ApiClient, ErrorResponse, QuoteDataCartInterface, QuoteDataCartSearchResultsInterface) {
  'use strict';

  /**
   * QuoteCartRepositoryV1 service.
   * @module api/QuoteCartRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new QuoteCartRepositoryV1Api. 
   * @alias module:api/QuoteCartRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the quoteCartRepositoryV1GetGet operation.
     * @callback module:api/QuoteCartRepositoryV1Api~quoteCartRepositoryV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteDataCartInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enables an administrative user to return information for a specified cart.
     * @param {Number} cartId 
     * @param {module:api/QuoteCartRepositoryV1Api~quoteCartRepositoryV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteDataCartInterface}
     */
    this.quoteCartRepositoryV1GetGet = function(cartId, callback) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling quoteCartRepositoryV1GetGet");
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
      var returnType = QuoteDataCartInterface;

      return this.apiClient.callApi(
        '/V1/carts/{cartId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the quoteCartRepositoryV1GetListGet operation.
     * @callback module:api/QuoteCartRepositoryV1Api~quoteCartRepositoryV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteDataCartSearchResultsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enables administrative users to list carts that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#CartRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchCriteriaFilterGroupsFiltersField Field
     * @param {String} opts.searchCriteriaFilterGroupsFiltersValue Value
     * @param {String} opts.searchCriteriaFilterGroupsFiltersConditionType Condition type
     * @param {String} opts.searchCriteriaSortOrdersField Sorting field.
     * @param {String} opts.searchCriteriaSortOrdersDirection Sorting direction.
     * @param {Number} opts.searchCriteriaPageSize Page size.
     * @param {Number} opts.searchCriteriaCurrentPage Current page.
     * @param {module:api/QuoteCartRepositoryV1Api~quoteCartRepositoryV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteDataCartSearchResultsInterface}
     */
    this.quoteCartRepositoryV1GetListGet = function(opts, callback) {
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
      var returnType = QuoteDataCartSearchResultsInterface;

      return this.apiClient.callApi(
        '/V1/carts/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
