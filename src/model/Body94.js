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
    define(['ApiClient', 'model/TaxDataTaxRateInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxDataTaxRateInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body94 = factory(root.magento.ApiClient, root.magento.TaxDataTaxRateInterface);
  }
}(this, function(ApiClient, TaxDataTaxRateInterface) {
  'use strict';




  /**
   * The Body94 model module.
   * @module model/Body94
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body94</code>.
   * @alias module:model/Body94
   * @class
   * @param taxRate {module:model/TaxDataTaxRateInterface} 
   */
  var exports = function(taxRate) {
    var _this = this;

    _this['taxRate'] = taxRate;
  };

  /**
   * Constructs a <code>Body94</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body94} obj Optional instance to populate.
   * @return {module:model/Body94} The populated <code>Body94</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('taxRate')) {
        obj['taxRate'] = TaxDataTaxRateInterface.constructFromObject(data['taxRate']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TaxDataTaxRateInterface} taxRate
   */
  exports.prototype['taxRate'] = undefined;



  return exports;
}));


