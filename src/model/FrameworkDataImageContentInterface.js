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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.FrameworkDataImageContentInterface = factory(root.magento.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FrameworkDataImageContentInterface model module.
   * @module model/FrameworkDataImageContentInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>FrameworkDataImageContentInterface</code>.
   * Image Content data interface
   * @alias module:model/FrameworkDataImageContentInterface
   * @class
   * @param base64EncodedData {String} Media data (base64 encoded content)
   * @param type {String} MIME type
   * @param name {String} Image name
   */
  var exports = function(base64EncodedData, type, name) {
    var _this = this;

    _this['base64EncodedData'] = base64EncodedData;
    _this['type'] = type;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>FrameworkDataImageContentInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FrameworkDataImageContentInterface} obj Optional instance to populate.
   * @return {module:model/FrameworkDataImageContentInterface} The populated <code>FrameworkDataImageContentInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('base64EncodedData')) {
        obj['base64EncodedData'] = ApiClient.convertToType(data['base64EncodedData'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Media data (base64 encoded content)
   * @member {String} base64EncodedData
   */
  exports.prototype['base64EncodedData'] = undefined;
  /**
   * MIME type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Image name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

