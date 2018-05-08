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
    define(['ApiClient', 'model/SalesDataOrderItemInterface', 'model/SalesDataShippingAssignmentExtensionInterface', 'model/SalesDataShippingInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataOrderItemInterface'), require('./SalesDataShippingAssignmentExtensionInterface'), require('./SalesDataShippingInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesDataShippingAssignmentInterface = factory(root.magento.ApiClient, root.magento.SalesDataOrderItemInterface, root.magento.SalesDataShippingAssignmentExtensionInterface, root.magento.SalesDataShippingInterface);
  }
}(this, function(ApiClient, SalesDataOrderItemInterface, SalesDataShippingAssignmentExtensionInterface, SalesDataShippingInterface) {
  'use strict';




  /**
   * The SalesDataShippingAssignmentInterface model module.
   * @module model/SalesDataShippingAssignmentInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataShippingAssignmentInterface</code>.
   * Interface ShippingAssignmentInterface
   * @alias module:model/SalesDataShippingAssignmentInterface
   * @class
   * @param shipping {module:model/SalesDataShippingInterface} 
   * @param items {Array.<module:model/SalesDataOrderItemInterface>} Order items of shipping assignment
   */
  var exports = function(shipping, items) {
    var _this = this;

    _this['shipping'] = shipping;
    _this['items'] = items;


  };

  /**
   * Constructs a <code>SalesDataShippingAssignmentInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataShippingAssignmentInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataShippingAssignmentInterface} The populated <code>SalesDataShippingAssignmentInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('shipping')) {
        obj['shipping'] = SalesDataShippingInterface.constructFromObject(data['shipping']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [SalesDataOrderItemInterface]);
      }
      if (data.hasOwnProperty('stockId')) {
        obj['stockId'] = ApiClient.convertToType(data['stockId'], 'Number');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesDataShippingAssignmentExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SalesDataShippingInterface} shipping
   */
  exports.prototype['shipping'] = undefined;
  /**
   * Order items of shipping assignment
   * @member {Array.<module:model/SalesDataOrderItemInterface>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Stock id
   * @member {Number} stockId
   */
  exports.prototype['stockId'] = undefined;
  /**
   * @member {module:model/SalesDataShippingAssignmentExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


