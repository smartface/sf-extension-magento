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
    define(['ApiClient', 'model/TaxDataOrderTaxDetailsAppliedTaxInterface', 'model/TaxDataOrderTaxDetailsItemExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaxDataOrderTaxDetailsAppliedTaxInterface'), require('./TaxDataOrderTaxDetailsItemExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.TaxDataOrderTaxDetailsItemInterface = factory(root.magento.ApiClient, root.magento.TaxDataOrderTaxDetailsAppliedTaxInterface, root.magento.TaxDataOrderTaxDetailsItemExtensionInterface);
  }
}(this, function(ApiClient, TaxDataOrderTaxDetailsAppliedTaxInterface, TaxDataOrderTaxDetailsItemExtensionInterface) {
  'use strict';




  /**
   * The TaxDataOrderTaxDetailsItemInterface model module.
   * @module model/TaxDataOrderTaxDetailsItemInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>TaxDataOrderTaxDetailsItemInterface</code>.
   * 
   * @alias module:model/TaxDataOrderTaxDetailsItemInterface
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TaxDataOrderTaxDetailsItemInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxDataOrderTaxDetailsItemInterface} obj Optional instance to populate.
   * @return {module:model/TaxDataOrderTaxDetailsItemInterface} The populated <code>TaxDataOrderTaxDetailsItemInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('itemId')) {
        obj['itemId'] = ApiClient.convertToType(data['itemId'], 'Number');
      }
      if (data.hasOwnProperty('associatedItemId')) {
        obj['associatedItemId'] = ApiClient.convertToType(data['associatedItemId'], 'Number');
      }
      if (data.hasOwnProperty('appliedTaxes')) {
        obj['appliedTaxes'] = ApiClient.convertToType(data['appliedTaxes'], [TaxDataOrderTaxDetailsAppliedTaxInterface]);
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = TaxDataOrderTaxDetailsItemExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Type (shipping, product, weee, gift wrapping, etc)
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Item id if this item is a product
   * @member {Number} itemId
   */
  exports.prototype['itemId'] = undefined;
  /**
   * Associated item id if this item is associated with another item, null otherwise
   * @member {Number} associatedItemId
   */
  exports.prototype['associatedItemId'] = undefined;
  /**
   * Applied taxes
   * @member {Array.<module:model/TaxDataOrderTaxDetailsAppliedTaxInterface>} appliedTaxes
   */
  exports.prototype['appliedTaxes'] = undefined;
  /**
   * @member {module:model/TaxDataOrderTaxDetailsItemExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


