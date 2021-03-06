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
    define(['ApiClient', 'model/Body97', 'model/Body98', 'model/ErrorResponse', 'model/TaxDataTaxClassInterface', 'model/TaxDataTaxClassSearchResultsInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body97'), require('../model/Body98'), require('../model/ErrorResponse'), require('../model/TaxDataTaxClassInterface'), require('../model/TaxDataTaxClassSearchResultsInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.TaxTaxClassRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body97, root.magento.Body98, root.magento.ErrorResponse, root.magento.TaxDataTaxClassInterface, root.magento.TaxDataTaxClassSearchResultsInterface);
  }
}(this, function(ApiClient, Body97, Body98, ErrorResponse, TaxDataTaxClassInterface, TaxDataTaxClassSearchResultsInterface) {
  'use strict';

  /**
   * TaxTaxClassRepositoryV1 service.
   * @module api/TaxTaxClassRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new TaxTaxClassRepositoryV1Api. 
   * @alias module:api/TaxTaxClassRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the taxTaxClassRepositoryV1DeleteByIdDelete operation.
     * @callback module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1DeleteByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tax class with the given tax class id.
     * @param {Number} taxClassId 
     * @param {module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1DeleteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.taxTaxClassRepositoryV1DeleteByIdDelete = function(taxClassId, callback) {
      var postBody = null;

      // verify the required parameter 'taxClassId' is set
      if (taxClassId === undefined || taxClassId === null) {
        throw new Error("Missing the required parameter 'taxClassId' when calling taxTaxClassRepositoryV1DeleteByIdDelete");
      }


      var pathParams = {
        'taxClassId': taxClassId
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
        '/V1/taxClasses/{taxClassId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taxTaxClassRepositoryV1GetGet operation.
     * @callback module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaxDataTaxClassInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a tax class with the given tax class id.
     * @param {Number} taxClassId 
     * @param {module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaxDataTaxClassInterface}
     */
    this.taxTaxClassRepositoryV1GetGet = function(taxClassId, callback) {
      var postBody = null;

      // verify the required parameter 'taxClassId' is set
      if (taxClassId === undefined || taxClassId === null) {
        throw new Error("Missing the required parameter 'taxClassId' when calling taxTaxClassRepositoryV1GetGet");
      }


      var pathParams = {
        'taxClassId': taxClassId
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
      var returnType = TaxDataTaxClassInterface;

      return this.apiClient.callApi(
        '/V1/taxClasses/{taxClassId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taxTaxClassRepositoryV1GetListGet operation.
     * @callback module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaxDataTaxClassSearchResultsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchCriteriaFilterGroupsFiltersField Field
     * @param {String} opts.searchCriteriaFilterGroupsFiltersValue Value
     * @param {String} opts.searchCriteriaFilterGroupsFiltersConditionType Condition type
     * @param {String} opts.searchCriteriaSortOrdersField Sorting field.
     * @param {String} opts.searchCriteriaSortOrdersDirection Sorting direction.
     * @param {Number} opts.searchCriteriaPageSize Page size.
     * @param {Number} opts.searchCriteriaCurrentPage Current page.
     * @param {module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaxDataTaxClassSearchResultsInterface}
     */
    this.taxTaxClassRepositoryV1GetListGet = function(opts, callback) {
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
      var returnType = TaxDataTaxClassSearchResultsInterface;

      return this.apiClient.callApi(
        '/V1/taxClasses/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taxTaxClassRepositoryV1SavePost operation.
     * @callback module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1SavePostCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Tax Class
     * @param {Object} opts Optional parameters
     * @param {module:model/Body97} opts.body 
     * @param {module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1SavePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.taxTaxClassRepositoryV1SavePost = function(opts, callback) {
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/V1/taxClasses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the taxTaxClassRepositoryV1SavePut operation.
     * @callback module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1SavePutCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Tax Class
     * @param {String} classId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body98} opts.body 
     * @param {module:api/TaxTaxClassRepositoryV1Api~taxTaxClassRepositoryV1SavePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.taxTaxClassRepositoryV1SavePut = function(classId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'classId' is set
      if (classId === undefined || classId === null) {
        throw new Error("Missing the required parameter 'classId' when calling taxTaxClassRepositoryV1SavePut");
      }


      var pathParams = {
        'classId': classId
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
        '/V1/taxClasses/{classId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
