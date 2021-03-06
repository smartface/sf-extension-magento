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
    define(['ApiClient', 'model/GiftWrappingDataWrappingInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GiftWrappingDataWrappingInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body122 = factory(root.magento.ApiClient, root.magento.GiftWrappingDataWrappingInterface);
  }
}(this, function(ApiClient, GiftWrappingDataWrappingInterface) {
  'use strict';




  /**
   * The Body122 model module.
   * @module model/Body122
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body122</code>.
   * @alias module:model/Body122
   * @class
   * @param data {module:model/GiftWrappingDataWrappingInterface} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;

  };

  /**
   * Constructs a <code>Body122</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body122} obj Optional instance to populate.
   * @return {module:model/Body122} The populated <code>Body122</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = GiftWrappingDataWrappingInterface.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('storeId')) {
        obj['storeId'] = ApiClient.convertToType(data['storeId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GiftWrappingDataWrappingInterface} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Number} storeId
   */
  exports.prototype['storeId'] = undefined;



  return exports;
}));


