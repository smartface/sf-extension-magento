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
    define(['ApiClient', 'model/CustomerDataGroupInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerDataGroupInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body3 = factory(root.magento.ApiClient, root.magento.CustomerDataGroupInterface);
  }
}(this, function(ApiClient, CustomerDataGroupInterface) {
  'use strict';




  /**
   * The Body3 model module.
   * @module model/Body3
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body3</code>.
   * @alias module:model/Body3
   * @class
   * @param group {module:model/CustomerDataGroupInterface} 
   */
  var exports = function(group) {
    var _this = this;

    _this['group'] = group;
  };

  /**
   * Constructs a <code>Body3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body3} obj Optional instance to populate.
   * @return {module:model/Body3} The populated <code>Body3</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('group')) {
        obj['group'] = CustomerDataGroupInterface.constructFromObject(data['group']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CustomerDataGroupInterface} group
   */
  exports.prototype['group'] = undefined;



  return exports;
}));


