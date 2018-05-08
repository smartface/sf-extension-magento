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
    define(['ApiClient', 'model/SalesDataInvoiceItemCreationExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataInvoiceItemCreationExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesDataInvoiceItemCreationInterface = factory(root.magento.ApiClient, root.magento.SalesDataInvoiceItemCreationExtensionInterface);
  }
}(this, function(ApiClient, SalesDataInvoiceItemCreationExtensionInterface) {
  'use strict';




  /**
   * The SalesDataInvoiceItemCreationInterface model module.
   * @module model/SalesDataInvoiceItemCreationInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataInvoiceItemCreationInterface</code>.
   * Input argument for invoice creation Interface InvoiceItemCreationInterface
   * @alias module:model/SalesDataInvoiceItemCreationInterface
   * @class
   * @param orderItemId {Number} Order item ID.
   * @param qty {Number} Quantity.
   */
  var exports = function(orderItemId, qty) {
    var _this = this;


    _this['orderItemId'] = orderItemId;
    _this['qty'] = qty;
  };

  /**
   * Constructs a <code>SalesDataInvoiceItemCreationInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataInvoiceItemCreationInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataInvoiceItemCreationInterface} The populated <code>SalesDataInvoiceItemCreationInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesDataInvoiceItemCreationExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
      if (data.hasOwnProperty('orderItemId')) {
        obj['orderItemId'] = ApiClient.convertToType(data['orderItemId'], 'Number');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SalesDataInvoiceItemCreationExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;
  /**
   * Order item ID.
   * @member {Number} orderItemId
   */
  exports.prototype['orderItemId'] = undefined;
  /**
   * Quantity.
   * @member {Number} qty
   */
  exports.prototype['qty'] = undefined;



  return exports;
}));

