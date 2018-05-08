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
    define(['ApiClient', 'model/SalesDataCreditmemoCreationArgumentsExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataCreditmemoCreationArgumentsExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesDataCreditmemoCreationArgumentsInterface = factory(root.magento.ApiClient, root.magento.SalesDataCreditmemoCreationArgumentsExtensionInterface);
  }
}(this, function(ApiClient, SalesDataCreditmemoCreationArgumentsExtensionInterface) {
  'use strict';




  /**
   * The SalesDataCreditmemoCreationArgumentsInterface model module.
   * @module model/SalesDataCreditmemoCreationArgumentsInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataCreditmemoCreationArgumentsInterface</code>.
   * Interface CreditmemoCreationArgumentsInterface
   * @alias module:model/SalesDataCreditmemoCreationArgumentsInterface
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SalesDataCreditmemoCreationArgumentsInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataCreditmemoCreationArgumentsInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataCreditmemoCreationArgumentsInterface} The populated <code>SalesDataCreditmemoCreationArgumentsInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('shippingAmount')) {
        obj['shippingAmount'] = ApiClient.convertToType(data['shippingAmount'], 'Number');
      }
      if (data.hasOwnProperty('adjustmentPositive')) {
        obj['adjustmentPositive'] = ApiClient.convertToType(data['adjustmentPositive'], 'Number');
      }
      if (data.hasOwnProperty('adjustmentNegative')) {
        obj['adjustmentNegative'] = ApiClient.convertToType(data['adjustmentNegative'], 'Number');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesDataCreditmemoCreationArgumentsExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Credit memo shipping amount.
   * @member {Number} shippingAmount
   */
  exports.prototype['shippingAmount'] = undefined;
  /**
   * Credit memo positive adjustment.
   * @member {Number} adjustmentPositive
   */
  exports.prototype['adjustmentPositive'] = undefined;
  /**
   * Credit memo negative adjustment.
   * @member {Number} adjustmentNegative
   */
  exports.prototype['adjustmentNegative'] = undefined;
  /**
   * @member {module:model/SalesDataCreditmemoCreationArgumentsExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


