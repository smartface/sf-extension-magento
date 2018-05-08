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
    define(['ApiClient', 'model/SalesRuleDataCouponGenerationSpecInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesRuleDataCouponGenerationSpecInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body103 = factory(root.magento.ApiClient, root.magento.SalesRuleDataCouponGenerationSpecInterface);
  }
}(this, function(ApiClient, SalesRuleDataCouponGenerationSpecInterface) {
  'use strict';




  /**
   * The Body103 model module.
   * @module model/Body103
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body103</code>.
   * @alias module:model/Body103
   * @class
   * @param couponSpec {module:model/SalesRuleDataCouponGenerationSpecInterface} 
   */
  var exports = function(couponSpec) {
    var _this = this;

    _this['couponSpec'] = couponSpec;
  };

  /**
   * Constructs a <code>Body103</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body103} obj Optional instance to populate.
   * @return {module:model/Body103} The populated <code>Body103</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('couponSpec')) {
        obj['couponSpec'] = SalesRuleDataCouponGenerationSpecInterface.constructFromObject(data['couponSpec']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SalesRuleDataCouponGenerationSpecInterface} couponSpec
   */
  exports.prototype['couponSpec'] = undefined;



  return exports;
}));

