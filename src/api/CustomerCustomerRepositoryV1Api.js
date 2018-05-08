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
    define(['ApiClient', 'model/Body4', 'model/Body5', 'model/CustomerDataCustomerInterface', 'model/CustomerDataCustomerSearchResultsInterface', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body4'), require('../model/Body5'), require('../model/CustomerDataCustomerInterface'), require('../model/CustomerDataCustomerSearchResultsInterface'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CustomerCustomerRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body4, root.magento.Body5, root.magento.CustomerDataCustomerInterface, root.magento.CustomerDataCustomerSearchResultsInterface, root.magento.ErrorResponse);
  }
}(this, function(ApiClient, Body4, Body5, CustomerDataCustomerInterface, CustomerDataCustomerSearchResultsInterface, ErrorResponse) {
  'use strict';

  /**
   * CustomerCustomerRepositoryV1 service.
   * @module api/CustomerCustomerRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new CustomerCustomerRepositoryV1Api. 
   * @alias module:api/CustomerCustomerRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the customerCustomerRepositoryV1DeleteByIdDelete operation.
     * @callback module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1DeleteByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete customer by ID.
     * @param {Number} customerId 
     * @param {module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1DeleteByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.customerCustomerRepositoryV1DeleteByIdDelete = function(customerId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling customerCustomerRepositoryV1DeleteByIdDelete");
      }


      var pathParams = {
        'customerId': customerId
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
        '/V1/customers/{customerId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerCustomerRepositoryV1GetByIdGet operation.
     * @callback module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1GetByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataCustomerInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get customer by customer ID.
     * @param {Number} customerId 
     * @param {module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1GetByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataCustomerInterface}
     */
    this.customerCustomerRepositoryV1GetByIdGet = function(customerId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling customerCustomerRepositoryV1GetByIdGet");
      }


      var pathParams = {
        'customerId': customerId
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
      var returnType = CustomerDataCustomerInterface;

      return this.apiClient.callApi(
        '/V1/customers/{customerId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerCustomerRepositoryV1GetByIdGet_0 operation.
     * @callback module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1GetByIdGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataCustomerInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get customer by customer ID.
     * @param {module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1GetByIdGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataCustomerInterface}
     */
    this.customerCustomerRepositoryV1GetByIdGet_0 = function(callback) {
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
      var returnType = CustomerDataCustomerInterface;

      return this.apiClient.callApi(
        '/V1/customers/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerCustomerRepositoryV1GetListGet operation.
     * @callback module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1GetListGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataCustomerSearchResultsInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CustomerRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchCriteriaFilterGroupsFiltersField Field
     * @param {String} opts.searchCriteriaFilterGroupsFiltersValue Value
     * @param {String} opts.searchCriteriaFilterGroupsFiltersConditionType Condition type
     * @param {String} opts.searchCriteriaSortOrdersField Sorting field.
     * @param {String} opts.searchCriteriaSortOrdersDirection Sorting direction.
     * @param {Number} opts.searchCriteriaPageSize Page size.
     * @param {Number} opts.searchCriteriaCurrentPage Current page.
     * @param {module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1GetListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataCustomerSearchResultsInterface}
     */
    this.customerCustomerRepositoryV1GetListGet = function(opts, callback) {
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
      var returnType = CustomerDataCustomerSearchResultsInterface;

      return this.apiClient.callApi(
        '/V1/customers/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerCustomerRepositoryV1SavePut operation.
     * @callback module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1SavePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataCustomerInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a customer.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body4} opts.body 
     * @param {module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1SavePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataCustomerInterface}
     */
    this.customerCustomerRepositoryV1SavePut = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling customerCustomerRepositoryV1SavePut");
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
      var returnType = CustomerDataCustomerInterface;

      return this.apiClient.callApi(
        '/V1/customers/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerCustomerRepositoryV1SavePut_0 operation.
     * @callback module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1SavePut_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerDataCustomerInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a customer.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body5} opts.body 
     * @param {module:api/CustomerCustomerRepositoryV1Api~customerCustomerRepositoryV1SavePut_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerDataCustomerInterface}
     */
    this.customerCustomerRepositoryV1SavePut_0 = function(opts, callback) {
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
      var returnType = CustomerDataCustomerInterface;

      return this.apiClient.callApi(
        '/V1/customers/me', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
