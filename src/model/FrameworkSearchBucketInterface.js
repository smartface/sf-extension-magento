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
    define(['ApiClient', 'model/FrameworkSearchAggregationValueInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FrameworkSearchAggregationValueInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.FrameworkSearchBucketInterface = factory(root.magento.ApiClient, root.magento.FrameworkSearchAggregationValueInterface);
  }
}(this, function(ApiClient, FrameworkSearchAggregationValueInterface) {
  'use strict';




  /**
   * The FrameworkSearchBucketInterface model module.
   * @module model/FrameworkSearchBucketInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>FrameworkSearchBucketInterface</code>.
   * Facet Bucket
   * @alias module:model/FrameworkSearchBucketInterface
   * @class
   * @param name {String} Field name
   * @param values {Array.<module:model/FrameworkSearchAggregationValueInterface>} Field values
   */
  var exports = function(name, values) {
    var _this = this;

    _this['name'] = name;
    _this['values'] = values;
  };

  /**
   * Constructs a <code>FrameworkSearchBucketInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FrameworkSearchBucketInterface} obj Optional instance to populate.
   * @return {module:model/FrameworkSearchBucketInterface} The populated <code>FrameworkSearchBucketInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [FrameworkSearchAggregationValueInterface]);
      }
    }
    return obj;
  }

  /**
   * Field name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Field values
   * @member {Array.<module:model/FrameworkSearchAggregationValueInterface>} values
   */
  exports.prototype['values'] = undefined;



  return exports;
}));


