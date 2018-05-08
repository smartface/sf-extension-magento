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
    define(['ApiClient', 'model/CustomerDataCustomerInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerDataCustomerInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body5 = factory(root.magento.ApiClient, root.magento.CustomerDataCustomerInterface);
  }
}(this, function(ApiClient, CustomerDataCustomerInterface) {
  'use strict';




  /**
   * The Body5 model module.
   * @module model/Body5
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body5</code>.
   * @alias module:model/Body5
   * @class
   * @param customer {module:model/CustomerDataCustomerInterface} 
   */
  var exports = function(customer) {
    var _this = this;

    _this['customer'] = customer;

  };

  /**
   * Constructs a <code>Body5</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body5} obj Optional instance to populate.
   * @return {module:model/Body5} The populated <code>Body5</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customer')) {
        obj['customer'] = CustomerDataCustomerInterface.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('passwordHash')) {
        obj['passwordHash'] = ApiClient.convertToType(data['passwordHash'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CustomerDataCustomerInterface} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {String} passwordHash
   */
  exports.prototype['passwordHash'] = undefined;



  return exports;
}));


