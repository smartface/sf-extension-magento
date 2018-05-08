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
    root.magento.SalesDataCreditmemoItemCreationExtensionInterface = factory(root.magento.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SalesDataCreditmemoItemCreationExtensionInterface model module.
   * @module model/SalesDataCreditmemoItemCreationExtensionInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataCreditmemoItemCreationExtensionInterface</code>.
   * ExtensionInterface class for @see \\Magento\\Sales\\Api\\Data\\CreditmemoItemCreationInterface
   * @alias module:model/SalesDataCreditmemoItemCreationExtensionInterface
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SalesDataCreditmemoItemCreationExtensionInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataCreditmemoItemCreationExtensionInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataCreditmemoItemCreationExtensionInterface} The populated <code>SalesDataCreditmemoItemCreationExtensionInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


