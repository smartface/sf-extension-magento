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
    define(['ApiClient', 'model/Body129', 'model/ErrorResponse', 'model/RmaDataTrackSearchResultInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body129'), require('../model/ErrorResponse'), require('../model/RmaDataTrackSearchResultInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.RmaTrackManagementV1Api = factory(root.magento.ApiClient, root.magento.Body129, root.magento.ErrorResponse, root.magento.RmaDataTrackSearchResultInterface);
  }
}(this, function(ApiClient, Body129, ErrorResponse, RmaDataTrackSearchResultInterface) {
  'use strict';

  /**
   * RmaTrackManagementV1 service.
   * @module api/RmaTrackManagementV1Api
   * @version 2.0
   */

  /**
   * Constructs a new RmaTrackManagementV1Api. 
   * @alias module:api/RmaTrackManagementV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the rmaTrackManagementV1AddTrackPost operation.
     * @callback module:api/RmaTrackManagementV1Api~rmaTrackManagementV1AddTrackPostCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add track
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body129} opts.body 
     * @param {module:api/RmaTrackManagementV1Api~rmaTrackManagementV1AddTrackPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.rmaTrackManagementV1AddTrackPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rmaTrackManagementV1AddTrackPost");
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
        '/V1/returns/{id}/tracking-numbers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rmaTrackManagementV1GetShippingLabelPdfGet operation.
     * @callback module:api/RmaTrackManagementV1Api~rmaTrackManagementV1GetShippingLabelPdfGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get shipping label int the PDF format
     * @param {Number} id 
     * @param {module:api/RmaTrackManagementV1Api~rmaTrackManagementV1GetShippingLabelPdfGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.rmaTrackManagementV1GetShippingLabelPdfGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rmaTrackManagementV1GetShippingLabelPdfGet");
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/V1/returns/{id}/labels', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rmaTrackManagementV1GetTracksGet operation.
     * @callback module:api/RmaTrackManagementV1Api~rmaTrackManagementV1GetTracksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RmaDataTrackSearchResultInterface} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get track list
     * @param {Number} id 
     * @param {module:api/RmaTrackManagementV1Api~rmaTrackManagementV1GetTracksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RmaDataTrackSearchResultInterface}
     */
    this.rmaTrackManagementV1GetTracksGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rmaTrackManagementV1GetTracksGet");
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
      var returnType = RmaDataTrackSearchResultInterface;

      return this.apiClient.callApi(
        '/V1/returns/{id}/tracking-numbers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the rmaTrackManagementV1RemoveTrackByIdDelete operation.
     * @callback module:api/RmaTrackManagementV1Api~rmaTrackManagementV1RemoveTrackByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove track by id
     * @param {Number} id 
     * @param {Number} trackId 
     * @param {module:api/RmaTrackManagementV1Api~rmaTrackManagementV1RemoveTrackByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.rmaTrackManagementV1RemoveTrackByIdDelete = function(id, trackId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rmaTrackManagementV1RemoveTrackByIdDelete");
      }

      // verify the required parameter 'trackId' is set
      if (trackId === undefined || trackId === null) {
        throw new Error("Missing the required parameter 'trackId' when calling rmaTrackManagementV1RemoveTrackByIdDelete");
      }


      var pathParams = {
        'id': id,
        'trackId': trackId
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
        '/V1/returns/{id}/tracking-numbers/{trackId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));