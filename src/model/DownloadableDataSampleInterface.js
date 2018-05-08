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
    define(['ApiClient', 'model/DownloadableDataFileContentInterface', 'model/DownloadableDataSampleExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DownloadableDataFileContentInterface'), require('./DownloadableDataSampleExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.DownloadableDataSampleInterface = factory(root.magento.ApiClient, root.magento.DownloadableDataFileContentInterface, root.magento.DownloadableDataSampleExtensionInterface);
  }
}(this, function(ApiClient, DownloadableDataFileContentInterface, DownloadableDataSampleExtensionInterface) {
  'use strict';




  /**
   * The DownloadableDataSampleInterface model module.
   * @module model/DownloadableDataSampleInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>DownloadableDataSampleInterface</code>.
   * 
   * @alias module:model/DownloadableDataSampleInterface
   * @class
   * @param title {String} Title
   * @param sortOrder {Number} Order index for sample
   * @param sampleType {String} 
   */
  var exports = function(title, sortOrder, sampleType) {
    var _this = this;


    _this['title'] = title;
    _this['sortOrder'] = sortOrder;
    _this['sampleType'] = sampleType;




  };

  /**
   * Constructs a <code>DownloadableDataSampleInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadableDataSampleInterface} obj Optional instance to populate.
   * @return {module:model/DownloadableDataSampleInterface} The populated <code>DownloadableDataSampleInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('sortOrder')) {
        obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
      }
      if (data.hasOwnProperty('sampleType')) {
        obj['sampleType'] = ApiClient.convertToType(data['sampleType'], 'String');
      }
      if (data.hasOwnProperty('sampleFile')) {
        obj['sampleFile'] = ApiClient.convertToType(data['sampleFile'], 'String');
      }
      if (data.hasOwnProperty('sampleFileContent')) {
        obj['sampleFileContent'] = DownloadableDataFileContentInterface.constructFromObject(data['sampleFileContent']);
      }
      if (data.hasOwnProperty('sampleUrl')) {
        obj['sampleUrl'] = ApiClient.convertToType(data['sampleUrl'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = DownloadableDataSampleExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Sample(or link) id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Order index for sample
   * @member {Number} sortOrder
   */
  exports.prototype['sortOrder'] = undefined;
  /**
   * @member {String} sampleType
   */
  exports.prototype['sampleType'] = undefined;
  /**
   * relative file path
   * @member {String} sampleFile
   */
  exports.prototype['sampleFile'] = undefined;
  /**
   * @member {module:model/DownloadableDataFileContentInterface} sampleFileContent
   */
  exports.prototype['sampleFileContent'] = undefined;
  /**
   * file URL
   * @member {String} sampleUrl
   */
  exports.prototype['sampleUrl'] = undefined;
  /**
   * @member {module:model/DownloadableDataSampleExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));

