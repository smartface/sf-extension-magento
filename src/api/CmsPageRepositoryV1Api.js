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
    define(['ApiClient', 'model/Body14', 'model/Body15', 'model/CmsDataPageInterface', 'model/CmsDataPageSearchResultsInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body14'), require('../model/Body15'), require('../model/CmsDataPageInterface'), require('../model/CmsDataPageSearchResultsInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CmsPageRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body14, root.magento.Body15, root.magento.CmsDataPageInterface, root.magento.CmsDataPageSearchResultsInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body14, Body15, CmsDataPageInterface, CmsDataPageSearchResultsInterface, ErrorResponse) {
  'use strict';

  /**
   * CmsPageRepositoryV1 service.
   * @module api/CmsPageRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CmsPageRepositoryV1Api. 
   * @alias module:api/CmsPageRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cmsPageRepositoryV1DeleteByIdDelete operation.
     * @callback module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1DeleteByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete page by ID.
     * @param {Number} pageId 
     * @param {module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1DeleteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.cmsPageRepositoryV1DeleteByIdDelete = function(pageId, callback) {
      var postBody = null;

      // verify the required parameter 'pageId' is set
      if (pageId === undefined || pageId === null) {
        throw new Error("Missing the required parameter 'pageId' when calling cmsPageRepositoryV1DeleteByIdDelete");
      }


      var pathParams = {
        'pageId': pageId
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
        '/V1/cmsPage/{pageId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cmsPageRepositoryV1GetByIdGet operation.
     * @callback module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1GetByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CmsDataPageInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve page.
     * @param {Number} pageId 
     * @param {module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1GetByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CmsDataPageInterface}
     */
    this.cmsPageRepositoryV1GetByIdGet = function(pageId, callback) {
      var postBody = null;

      // verify the required parameter 'pageId' is set
      if (pageId === undefined || pageId === null) {
        throw new Error("Missing the required parameter 'pageId' when calling cmsPageRepositoryV1GetByIdGet");
      }


      var pathParams = {
        'pageId': pageId
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
      var returnType = CmsDataPageInterface;

      return this.apiClient.callApi(
        '/V1/cmsPage/{pageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cmsPageRepositoryV1GetListGet operation.
     * @callback module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CmsDataPageSearchResultsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve pages matching the specified criteria.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchCriteriaFilterGroupsFiltersField Field
     * @param {String} opts.searchCriteriaFilterGroupsFiltersValue Value
     * @param {String} opts.searchCriteriaFilterGroupsFiltersConditionType Condition type
     * @param {String} opts.searchCriteriaSortOrdersField Sorting field.
     * @param {String} opts.searchCriteriaSortOrdersDirection Sorting direction.
     * @param {Number} opts.searchCriteriaPageSize Page size.
     * @param {Number} opts.searchCriteriaCurrentPage Current page.
     * @param {module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CmsDataPageSearchResultsInterface}
     */
    this.cmsPageRepositoryV1GetListGet = function(opts, callback) {
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
      var returnType = CmsDataPageSearchResultsInterface;

      return this.apiClient.callApi(
        '/V1/cmsPage/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cmsPageRepositoryV1SavePost operation.
     * @callback module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1SavePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CmsDataPageInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save page.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body14} opts.body 
     * @param {module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1SavePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CmsDataPageInterface}
     */
    this.cmsPageRepositoryV1SavePost = function(opts, callback) {
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
      var returnType = CmsDataPageInterface;

      return this.apiClient.callApi(
        '/V1/cmsPage', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cmsPageRepositoryV1SavePut operation.
     * @callback module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1SavePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CmsDataPageInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save page.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body15} opts.body 
     * @param {module:api/CmsPageRepositoryV1Api~cmsPageRepositoryV1SavePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CmsDataPageInterface}
     */
    this.cmsPageRepositoryV1SavePut = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cmsPageRepositoryV1SavePut");
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
      var returnType = CmsDataPageInterface;

      return this.apiClient.callApi(
        '/V1/cmsPage/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
