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
    define(['ApiClient', 'model/QuoteDataPaymentInterface', 'model/QuoteDataTotalsAdditionalDataInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./QuoteDataPaymentInterface'), require('./QuoteDataTotalsAdditionalDataInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body63 = factory(root.magento.ApiClient, root.magento.QuoteDataPaymentInterface, root.magento.QuoteDataTotalsAdditionalDataInterface);
  }
}(this, function(ApiClient, QuoteDataPaymentInterface, QuoteDataTotalsAdditionalDataInterface) {
  'use strict';




  /**
   * The Body63 model module.
   * @module model/Body63
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body63</code>.
   * @alias module:model/Body63
   * @class
   * @param paymentMethod {module:model/QuoteDataPaymentInterface} 
   */
  var exports = function(paymentMethod) {
    var _this = this;

    _this['paymentMethod'] = paymentMethod;



  };

  /**
   * Constructs a <code>Body63</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body63} obj Optional instance to populate.
   * @return {module:model/Body63} The populated <code>Body63</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = QuoteDataPaymentInterface.constructFromObject(data['paymentMethod']);
      }
      if (data.hasOwnProperty('shippingCarrierCode')) {
        obj['shippingCarrierCode'] = ApiClient.convertToType(data['shippingCarrierCode'], 'String');
      }
      if (data.hasOwnProperty('shippingMethodCode')) {
        obj['shippingMethodCode'] = ApiClient.convertToType(data['shippingMethodCode'], 'String');
      }
      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = QuoteDataTotalsAdditionalDataInterface.constructFromObject(data['additionalData']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/QuoteDataPaymentInterface} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * The carrier code.
   * @member {String} shippingCarrierCode
   */
  exports.prototype['shippingCarrierCode'] = undefined;
  /**
   * The shipping method code.
   * @member {String} shippingMethodCode
   */
  exports.prototype['shippingMethodCode'] = undefined;
  /**
   * @member {module:model/QuoteDataTotalsAdditionalDataInterface} additionalData
   */
  exports.prototype['additionalData'] = undefined;



  return exports;
}));


