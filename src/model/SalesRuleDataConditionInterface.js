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
    define(['ApiClient', 'model/SalesRuleDataConditionExtensionInterface', 'model/SalesRuleDataConditionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesRuleDataConditionExtensionInterface'), require('./SalesRuleDataConditionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesRuleDataConditionInterface = factory(root.magento.ApiClient, root.magento.SalesRuleDataConditionExtensionInterface, root.magento.SalesRuleDataConditionInterface);
  }
}(this, function(ApiClient, SalesRuleDataConditionExtensionInterface, SalesRuleDataConditionInterface) {
  'use strict';




  /**
   * The SalesRuleDataConditionInterface model module.
   * @module model/SalesRuleDataConditionInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesRuleDataConditionInterface</code>.
   * Interface ConditionInterface
   * @alias module:model/SalesRuleDataConditionInterface
   * @class
   * @param conditionType {String} Condition type
   * @param operator {String} The operator of the condition
   * @param value {String} The value of the condition
   */
  var exports = function(conditionType, operator, value) {
    var _this = this;

    _this['conditionType'] = conditionType;


    _this['operator'] = operator;

    _this['value'] = value;

  };

  /**
   * Constructs a <code>SalesRuleDataConditionInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesRuleDataConditionInterface} obj Optional instance to populate.
   * @return {module:model/SalesRuleDataConditionInterface} The populated <code>SalesRuleDataConditionInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('conditionType')) {
        obj['conditionType'] = ApiClient.convertToType(data['conditionType'], 'String');
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], [SalesRuleDataConditionInterface]);
      }
      if (data.hasOwnProperty('aggregatorType')) {
        obj['aggregatorType'] = ApiClient.convertToType(data['aggregatorType'], 'String');
      }
      if (data.hasOwnProperty('operator')) {
        obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
      }
      if (data.hasOwnProperty('attributeName')) {
        obj['attributeName'] = ApiClient.convertToType(data['attributeName'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesRuleDataConditionExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Condition type
   * @member {String} conditionType
   */
  exports.prototype['conditionType'] = undefined;
  /**
   * List of conditions
   * @member {Array.<module:model/SalesRuleDataConditionInterface>} conditions
   */
  exports.prototype['conditions'] = undefined;
  /**
   * The aggregator type
   * @member {String} aggregatorType
   */
  exports.prototype['aggregatorType'] = undefined;
  /**
   * The operator of the condition
   * @member {String} operator
   */
  exports.prototype['operator'] = undefined;
  /**
   * The attribute name of the condition
   * @member {String} attributeName
   */
  exports.prototype['attributeName'] = undefined;
  /**
   * The value of the condition
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {module:model/SalesRuleDataConditionExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


