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
    define(['ApiClient', 'model/EavDataAttributeOptionLabelInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EavDataAttributeOptionLabelInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.EavDataAttributeOptionInterface = factory(root.magento.ApiClient, root.magento.EavDataAttributeOptionLabelInterface);
  }
}(this, function(ApiClient, EavDataAttributeOptionLabelInterface) {
  'use strict';




  /**
   * The EavDataAttributeOptionInterface model module.
   * @module model/EavDataAttributeOptionInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>EavDataAttributeOptionInterface</code>.
   * Created from:
   * @alias module:model/EavDataAttributeOptionInterface
   * @class
   * @param label {String} Option label
   * @param value {String} Option value
   */
  var exports = function(label, value) {
    var _this = this;

    _this['label'] = label;
    _this['value'] = value;



  };

  /**
   * Constructs a <code>EavDataAttributeOptionInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EavDataAttributeOptionInterface} obj Optional instance to populate.
   * @return {module:model/EavDataAttributeOptionInterface} The populated <code>EavDataAttributeOptionInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('sortOrder')) {
        obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('storeLabels')) {
        obj['storeLabels'] = ApiClient.convertToType(data['storeLabels'], [EavDataAttributeOptionLabelInterface]);
      }
    }
    return obj;
  }

  /**
   * Option label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * Option value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Option order
   * @member {Number} sortOrder
   */
  exports.prototype['sortOrder'] = undefined;
  /**
   * Default
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * Option label for store scopes
   * @member {Array.<module:model/EavDataAttributeOptionLabelInterface>} storeLabels
   */
  exports.prototype['storeLabels'] = undefined;



  return exports;
}));


