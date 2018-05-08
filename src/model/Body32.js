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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body32 = factory(root.magento.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body32 model module.
   * @module model/Body32
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body32</code>.
   * @alias module:model/Body32
   * @class
   * @param parentId {Number} 
   */
  var exports = function(parentId) {
    var _this = this;

    _this['parentId'] = parentId;

  };

  /**
   * Constructs a <code>Body32</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body32} obj Optional instance to populate.
   * @return {module:model/Body32} The populated <code>Body32</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
      }
      if (data.hasOwnProperty('afterId')) {
        obj['afterId'] = ApiClient.convertToType(data['afterId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * @member {Number} afterId
   */
  exports.prototype['afterId'] = undefined;



  return exports;
}));


