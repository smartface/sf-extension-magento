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
    define(['ApiClient', 'model/CustomerDataCustomerInterface', 'model/QuoteDataAddressInterface', 'model/QuoteDataCartExtensionInterface', 'model/QuoteDataCartItemInterface', 'model/QuoteDataCurrencyInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerDataCustomerInterface'), require('./QuoteDataAddressInterface'), require('./QuoteDataCartExtensionInterface'), require('./QuoteDataCartItemInterface'), require('./QuoteDataCurrencyInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.QuoteDataCartInterface = factory(root.magento.ApiClient, root.magento.CustomerDataCustomerInterface, root.magento.QuoteDataAddressInterface, root.magento.QuoteDataCartExtensionInterface, root.magento.QuoteDataCartItemInterface, root.magento.QuoteDataCurrencyInterface);
  }
}(this, function(ApiClient, CustomerDataCustomerInterface, QuoteDataAddressInterface, QuoteDataCartExtensionInterface, QuoteDataCartItemInterface, QuoteDataCurrencyInterface) {
  'use strict';




  /**
   * The QuoteDataCartInterface model module.
   * @module model/QuoteDataCartInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>QuoteDataCartInterface</code>.
   * Interface CartInterface
   * @alias module:model/QuoteDataCartInterface
   * @class
   * @param id {Number} Cart/quote ID.
   * @param customer {module:model/CustomerDataCustomerInterface} 
   * @param storeId {Number} Store identifier
   */
  var exports = function(id, customer, storeId) {
    var _this = this;

    _this['id'] = id;








    _this['customer'] = customer;








    _this['storeId'] = storeId;

  };

  /**
   * Constructs a <code>QuoteDataCartInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuoteDataCartInterface} obj Optional instance to populate.
   * @return {module:model/QuoteDataCartInterface} The populated <code>QuoteDataCartInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
      if (data.hasOwnProperty('convertedAt')) {
        obj['convertedAt'] = ApiClient.convertToType(data['convertedAt'], 'String');
      }
      if (data.hasOwnProperty('isActive')) {
        obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
      }
      if (data.hasOwnProperty('isVirtual')) {
        obj['isVirtual'] = ApiClient.convertToType(data['isVirtual'], 'Boolean');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [QuoteDataCartItemInterface]);
      }
      if (data.hasOwnProperty('itemsCount')) {
        obj['itemsCount'] = ApiClient.convertToType(data['itemsCount'], 'Number');
      }
      if (data.hasOwnProperty('itemsQty')) {
        obj['itemsQty'] = ApiClient.convertToType(data['itemsQty'], 'Number');
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = CustomerDataCustomerInterface.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('billingAddress')) {
        obj['billingAddress'] = QuoteDataAddressInterface.constructFromObject(data['billingAddress']);
      }
      if (data.hasOwnProperty('reservedOrderId')) {
        obj['reservedOrderId'] = ApiClient.convertToType(data['reservedOrderId'], 'Number');
      }
      if (data.hasOwnProperty('origOrderId')) {
        obj['origOrderId'] = ApiClient.convertToType(data['origOrderId'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = QuoteDataCurrencyInterface.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('customerIsGuest')) {
        obj['customerIsGuest'] = ApiClient.convertToType(data['customerIsGuest'], 'Boolean');
      }
      if (data.hasOwnProperty('customerNote')) {
        obj['customerNote'] = ApiClient.convertToType(data['customerNote'], 'String');
      }
      if (data.hasOwnProperty('customerNoteNotify')) {
        obj['customerNoteNotify'] = ApiClient.convertToType(data['customerNoteNotify'], 'Boolean');
      }
      if (data.hasOwnProperty('customerTaxClassId')) {
        obj['customerTaxClassId'] = ApiClient.convertToType(data['customerTaxClassId'], 'Number');
      }
      if (data.hasOwnProperty('storeId')) {
        obj['storeId'] = ApiClient.convertToType(data['storeId'], 'Number');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = QuoteDataCartExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Cart/quote ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Cart creation date and time. Otherwise, null.
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Cart last update date and time. Otherwise, null.
   * @member {String} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * Cart conversion date and time. Otherwise, null.
   * @member {String} convertedAt
   */
  exports.prototype['convertedAt'] = undefined;
  /**
   * Active status flag value. Otherwise, null.
   * @member {Boolean} isActive
   */
  exports.prototype['isActive'] = undefined;
  /**
   * Virtual flag value. Otherwise, null.
   * @member {Boolean} isVirtual
   */
  exports.prototype['isVirtual'] = undefined;
  /**
   * Array of items. Otherwise, null.
   * @member {Array.<module:model/QuoteDataCartItemInterface>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Number of different items or products in the cart. Otherwise, null.
   * @member {Number} itemsCount
   */
  exports.prototype['itemsCount'] = undefined;
  /**
   * Total quantity of all cart items. Otherwise, null.
   * @member {Number} itemsQty
   */
  exports.prototype['itemsQty'] = undefined;
  /**
   * @member {module:model/CustomerDataCustomerInterface} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {module:model/QuoteDataAddressInterface} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;
  /**
   * Reserved order ID. Otherwise, null.
   * @member {Number} reservedOrderId
   */
  exports.prototype['reservedOrderId'] = undefined;
  /**
   * Original order ID. Otherwise, null.
   * @member {Number} origOrderId
   */
  exports.prototype['origOrderId'] = undefined;
  /**
   * @member {module:model/QuoteDataCurrencyInterface} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * For guest customers, false for logged in customers
   * @member {Boolean} customerIsGuest
   */
  exports.prototype['customerIsGuest'] = undefined;
  /**
   * Notice text
   * @member {String} customerNote
   */
  exports.prototype['customerNote'] = undefined;
  /**
   * Customer notification flag
   * @member {Boolean} customerNoteNotify
   */
  exports.prototype['customerNoteNotify'] = undefined;
  /**
   * Customer tax class ID.
   * @member {Number} customerTaxClassId
   */
  exports.prototype['customerTaxClassId'] = undefined;
  /**
   * Store identifier
   * @member {Number} storeId
   */
  exports.prototype['storeId'] = undefined;
  /**
   * @member {module:model/QuoteDataCartExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


