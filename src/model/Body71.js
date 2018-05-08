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
    define(['ApiClient', 'model/SalesDataCreditmemoInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataCreditmemoInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body71 = factory(root.magento.ApiClient, root.magento.SalesDataCreditmemoInterface);
  }
}(this, function(ApiClient, SalesDataCreditmemoInterface) {
  'use strict';




  /**
   * The Body71 model module.
   * @module model/Body71
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body71</code>.
   * @alias module:model/Body71
   * @class
   * @param entity {module:model/SalesDataCreditmemoInterface} 
   */
  var exports = function(entity) {
    var _this = this;

    _this['entity'] = entity;
  };

  /**
   * Constructs a <code>Body71</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body71} obj Optional instance to populate.
   * @return {module:model/Body71} The populated <code>Body71</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entity')) {
        obj['entity'] = SalesDataCreditmemoInterface.constructFromObject(data['entity']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SalesDataCreditmemoInterface} entity
   */
  exports.prototype['entity'] = undefined;



  return exports;
}));


