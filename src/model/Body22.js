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
    define(['ApiClient', 'model/EavDataAttributeSetInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EavDataAttributeSetInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body22 = factory(root.magento.ApiClient, root.magento.EavDataAttributeSetInterface);
  }
}(this, function(ApiClient, EavDataAttributeSetInterface) {
  'use strict';




  /**
   * The Body22 model module.
   * @module model/Body22
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body22</code>.
   * @alias module:model/Body22
   * @class
   * @param attributeSet {module:model/EavDataAttributeSetInterface} 
   */
  var exports = function(attributeSet) {
    var _this = this;

    _this['attributeSet'] = attributeSet;
  };

  /**
   * Constructs a <code>Body22</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body22} obj Optional instance to populate.
   * @return {module:model/Body22} The populated <code>Body22</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attributeSet')) {
        obj['attributeSet'] = EavDataAttributeSetInterface.constructFromObject(data['attributeSet']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EavDataAttributeSetInterface} attributeSet
   */
  exports.prototype['attributeSet'] = undefined;



  return exports;
}));


