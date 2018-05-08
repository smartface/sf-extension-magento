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
    define(['ApiClient', 'model/ErrorErrors', 'model/ErrorParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorErrors'), require('./ErrorParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.ErrorResponse = factory(root.magento.ApiClient, root.magento.ErrorErrors, root.magento.ErrorParameters);
  }
}(this, function(ApiClient, ErrorErrors, ErrorParameters) {
  'use strict';




  /**
   * The ErrorResponse model module.
   * @module model/ErrorResponse
   * @version 2.0
   */

  /**
   * Constructs a new <code>ErrorResponse</code>.
   * @alias module:model/ErrorResponse
   * @class
   * @param message {String} Error message
   */
  var exports = function(message) {
    var _this = this;

    _this['message'] = message;




  };

  /**
   * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponse} obj Optional instance to populate.
   * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ErrorErrors.constructFromObject(data['errors']);
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ErrorParameters.constructFromObject(data['parameters']);
      }
      if (data.hasOwnProperty('trace')) {
        obj['trace'] = ApiClient.convertToType(data['trace'], 'String');
      }
    }
    return obj;
  }

  /**
   * Error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/ErrorErrors} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * Error code
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {module:model/ErrorParameters} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * Stack trace
   * @member {String} trace
   */
  exports.prototype['trace'] = undefined;



  return exports;
}));

