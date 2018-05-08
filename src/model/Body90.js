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
    define(['ApiClient', 'model/QuoteDataAddressInterface', 'model/QuoteDataPaymentInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./QuoteDataAddressInterface'), require('./QuoteDataPaymentInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body90 = factory(root.magento.ApiClient, root.magento.QuoteDataAddressInterface, root.magento.QuoteDataPaymentInterface);
  }
}(this, function(ApiClient, QuoteDataAddressInterface, QuoteDataPaymentInterface) {
  'use strict';




  /**
   * The Body90 model module.
   * @module model/Body90
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body90</code>.
   * @alias module:model/Body90
   * @class
   * @param email {String} 
   * @param paymentMethod {module:model/QuoteDataPaymentInterface} 
   */
  var exports = function(email, paymentMethod) {
    var _this = this;

    _this['email'] = email;
    _this['paymentMethod'] = paymentMethod;

  };

  /**
   * Constructs a <code>Body90</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body90} obj Optional instance to populate.
   * @return {module:model/Body90} The populated <code>Body90</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = QuoteDataPaymentInterface.constructFromObject(data['paymentMethod']);
      }
      if (data.hasOwnProperty('billingAddress')) {
        obj['billingAddress'] = QuoteDataAddressInterface.constructFromObject(data['billingAddress']);
      }
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/QuoteDataPaymentInterface} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * @member {module:model/QuoteDataAddressInterface} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;



  return exports;
}));


