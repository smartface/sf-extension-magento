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
    define(['ApiClient', 'model/ConfigurableProductDataOptionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConfigurableProductDataOptionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body111 = factory(root.magento.ApiClient, root.magento.ConfigurableProductDataOptionInterface);
  }
}(this, function(ApiClient, ConfigurableProductDataOptionInterface) {
  'use strict';




  /**
   * The Body111 model module.
   * @module model/Body111
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body111</code>.
   * @alias module:model/Body111
   * @class
   * @param option {module:model/ConfigurableProductDataOptionInterface} 
   */
  var exports = function(option) {
    var _this = this;

    _this['option'] = option;
  };

  /**
   * Constructs a <code>Body111</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body111} obj Optional instance to populate.
   * @return {module:model/Body111} The populated <code>Body111</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('option')) {
        obj['option'] = ConfigurableProductDataOptionInterface.constructFromObject(data['option']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ConfigurableProductDataOptionInterface} option
   */
  exports.prototype['option'] = undefined;



  return exports;
}));


