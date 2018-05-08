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
    root.magento.CustomerDataValidationRuleInterface = factory(root.magento.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerDataValidationRuleInterface model module.
   * @module model/CustomerDataValidationRuleInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>CustomerDataValidationRuleInterface</code>.
   * Validation rule interface.
   * @alias module:model/CustomerDataValidationRuleInterface
   * @class
   * @param name {String} Validation rule name
   * @param value {String} Validation rule value
   */
  var exports = function(name, value) {
    var _this = this;

    _this['name'] = name;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>CustomerDataValidationRuleInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerDataValidationRuleInterface} obj Optional instance to populate.
   * @return {module:model/CustomerDataValidationRuleInterface} The populated <code>CustomerDataValidationRuleInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validation rule name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Validation rule value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));

