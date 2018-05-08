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
    define(['ApiClient', 'model/QuoteDataCartItemInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./QuoteDataCartItemInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body54 = factory(root.magento.ApiClient, root.magento.QuoteDataCartItemInterface);
  }
}(this, function(ApiClient, QuoteDataCartItemInterface) {
  'use strict';




  /**
   * The Body54 model module.
   * @module model/Body54
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body54</code>.
   * @alias module:model/Body54
   * @class
   * @param cartItem {module:model/QuoteDataCartItemInterface} 
   */
  var exports = function(cartItem) {
    var _this = this;

    _this['cartItem'] = cartItem;
  };

  /**
   * Constructs a <code>Body54</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body54} obj Optional instance to populate.
   * @return {module:model/Body54} The populated <code>Body54</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cartItem')) {
        obj['cartItem'] = QuoteDataCartItemInterface.constructFromObject(data['cartItem']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/QuoteDataCartItemInterface} cartItem
   */
  exports.prototype['cartItem'] = undefined;



  return exports;
}));


