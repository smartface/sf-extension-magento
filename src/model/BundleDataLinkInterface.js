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
    define(['ApiClient', 'model/BundleDataLinkExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BundleDataLinkExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.BundleDataLinkInterface = factory(root.magento.ApiClient, root.magento.BundleDataLinkExtensionInterface);
  }
}(this, function(ApiClient, BundleDataLinkExtensionInterface) {
  'use strict';




  /**
   * The BundleDataLinkInterface model module.
   * @module model/BundleDataLinkInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>BundleDataLinkInterface</code>.
   * Interface LinkInterface
   * @alias module:model/BundleDataLinkInterface
   * @class
   * @param isDefault {Boolean} Is default
   * @param price {Number} Price
   * @param priceType {Number} Price type
   */
  var exports = function(isDefault, price, priceType) {
    var _this = this;






    _this['isDefault'] = isDefault;
    _this['price'] = price;
    _this['priceType'] = priceType;


  };

  /**
   * Constructs a <code>BundleDataLinkInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BundleDataLinkInterface} obj Optional instance to populate.
   * @return {module:model/BundleDataLinkInterface} The populated <code>BundleDataLinkInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('optionId')) {
        obj['optionId'] = ApiClient.convertToType(data['optionId'], 'Number');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('priceType')) {
        obj['priceType'] = ApiClient.convertToType(data['priceType'], 'Number');
      }
      if (data.hasOwnProperty('canChangeQuantity')) {
        obj['canChangeQuantity'] = ApiClient.convertToType(data['canChangeQuantity'], 'Number');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = BundleDataLinkExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * The identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Linked product sku
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * Option id
   * @member {Number} optionId
   */
  exports.prototype['optionId'] = undefined;
  /**
   * Qty
   * @member {Number} qty
   */
  exports.prototype['qty'] = undefined;
  /**
   * Position
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * Is default
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * Price
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Price type
   * @member {Number} priceType
   */
  exports.prototype['priceType'] = undefined;
  /**
   * Whether quantity could be changed
   * @member {Number} canChangeQuantity
   */
  exports.prototype['canChangeQuantity'] = undefined;
  /**
   * @member {module:model/BundleDataLinkExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


