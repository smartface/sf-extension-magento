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
    define(['ApiClient', 'model/SalesRuleDataCouponGenerationSpecExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesRuleDataCouponGenerationSpecExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesRuleDataCouponGenerationSpecInterface = factory(root.magento.ApiClient, root.magento.SalesRuleDataCouponGenerationSpecExtensionInterface);
  }
}(this, function(ApiClient, SalesRuleDataCouponGenerationSpecExtensionInterface) {
  'use strict';




  /**
   * The SalesRuleDataCouponGenerationSpecInterface model module.
   * @module model/SalesRuleDataCouponGenerationSpecInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesRuleDataCouponGenerationSpecInterface</code>.
   * CouponGenerationSpecInterface
   * @alias module:model/SalesRuleDataCouponGenerationSpecInterface
   * @class
   * @param ruleId {Number} The id of the rule associated with the coupon
   * @param format {String} Format of generated coupon code
   * @param quantity {Number} Of coupons to generate
   * @param length {Number} Length of coupon code
   */
  var exports = function(ruleId, format, quantity, length) {
    var _this = this;

    _this['ruleId'] = ruleId;
    _this['format'] = format;
    _this['quantity'] = quantity;
    _this['length'] = length;





  };

  /**
   * Constructs a <code>SalesRuleDataCouponGenerationSpecInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesRuleDataCouponGenerationSpecInterface} obj Optional instance to populate.
   * @return {module:model/SalesRuleDataCouponGenerationSpecInterface} The populated <code>SalesRuleDataCouponGenerationSpecInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ruleId')) {
        obj['ruleId'] = ApiClient.convertToType(data['ruleId'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('suffix')) {
        obj['suffix'] = ApiClient.convertToType(data['suffix'], 'String');
      }
      if (data.hasOwnProperty('delimiterAtEvery')) {
        obj['delimiterAtEvery'] = ApiClient.convertToType(data['delimiterAtEvery'], 'Number');
      }
      if (data.hasOwnProperty('delimiter')) {
        obj['delimiter'] = ApiClient.convertToType(data['delimiter'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesRuleDataCouponGenerationSpecExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * The id of the rule associated with the coupon
   * @member {Number} ruleId
   */
  exports.prototype['ruleId'] = undefined;
  /**
   * Format of generated coupon code
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * Of coupons to generate
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Length of coupon code
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;
  /**
   * The prefix
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * The suffix
   * @member {String} suffix
   */
  exports.prototype['suffix'] = undefined;
  /**
   * The spacing where the delimiter should exist
   * @member {Number} delimiterAtEvery
   */
  exports.prototype['delimiterAtEvery'] = undefined;
  /**
   * The delimiter
   * @member {String} delimiter
   */
  exports.prototype['delimiter'] = undefined;
  /**
   * @member {module:model/SalesRuleDataCouponGenerationSpecExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


