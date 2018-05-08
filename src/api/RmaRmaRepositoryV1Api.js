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
    define(['ApiClient', 'model/Body131', 'model/ErrorResponse', 'model/RmaDataRmaInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body131'), require('../model/ErrorResponse'), require('../model/RmaDataRmaInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.RmaRmaRepositoryV1Api = factory(root.magento.ApiClient, root.magento.Body131, root.magento.ErrorResponse, root.magento.RmaDataRmaInterface);
  }
}(this, function(ApiClient, Body131, ErrorResponse, RmaDataRmaInterface) {
  'use strict';

  /**
   * RmaRmaRepositoryV1 service.
   * @module api/RmaRmaRepositoryV1Api
   * @version 2.0
   */

  /**
   * Constructs a new RmaRmaRepositoryV1Api. 
   * @alias module:api/RmaRmaRepositoryV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the rmaRmaRepositoryV1DeleteDelete operation.
     * @callback module:api/RmaRmaRepositoryV1Api~rmaRmaRepositoryV1DeleteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete RMA
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body131} opts.body 
     * @param {module:api/RmaRmaRepositoryV1Api~rmaRmaRepositoryV1DeleteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.rmaRmaRepositoryV1DeleteDelete = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rmaRmaRepositoryV1DeleteDelete");
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
        '/V1/returns/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rmaRmaRepositoryV1GetGet operation.
     * @callback module:api/RmaRmaRepositoryV1Api~rmaRmaRepositoryV1GetGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RmaDataRmaInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return data object for specified RMA id
     * @param {Number} id 
     * @param {module:api/RmaRmaRepositoryV1Api~rmaRmaRepositoryV1GetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RmaDataRmaInterface}
     */
    this.rmaRmaRepositoryV1GetGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rmaRmaRepositoryV1GetGet");
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
      var returnType = RmaDataRmaInterface;

      return this.apiClient.callApi(
        '/V1/returns/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));