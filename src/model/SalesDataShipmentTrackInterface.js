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
    define(['ApiClient', 'model/SalesDataShipmentTrackExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataShipmentTrackExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesDataShipmentTrackInterface = factory(root.magento.ApiClient, root.magento.SalesDataShipmentTrackExtensionInterface);
  }
}(this, function(ApiClient, SalesDataShipmentTrackExtensionInterface) {
  'use strict';




  /**
   * The SalesDataShipmentTrackInterface model module.
   * @module model/SalesDataShipmentTrackInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataShipmentTrackInterface</code>.
   * Shipment track interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. Merchants and customers can track shipments.
   * @alias module:model/SalesDataShipmentTrackInterface
   * @class
   * @param orderId {Number} The order_id for the shipment package.
   * @param parentId {Number} Parent ID.
   * @param weight {Number} Weight.
   * @param qty {Number} Quantity.
   * @param description {String} Description.
   * @param trackNumber {String} Track number.
   * @param title {String} Title.
   * @param carrierCode {String} Carrier code.
   */
  var exports = function(orderId, parentId, weight, qty, description, trackNumber, title, carrierCode) {
    var _this = this;

    _this['orderId'] = orderId;


    _this['parentId'] = parentId;

    _this['weight'] = weight;
    _this['qty'] = qty;
    _this['description'] = description;

    _this['trackNumber'] = trackNumber;
    _this['title'] = title;
    _this['carrierCode'] = carrierCode;
  };

  /**
   * Constructs a <code>SalesDataShipmentTrackInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataShipmentTrackInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataShipmentTrackInterface} The populated <code>SalesDataShipmentTrackInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Number');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('entityId')) {
        obj['entityId'] = ApiClient.convertToType(data['entityId'], 'Number');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesDataShipmentTrackExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
      if (data.hasOwnProperty('trackNumber')) {
        obj['trackNumber'] = ApiClient.convertToType(data['trackNumber'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('carrierCode')) {
        obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * The order_id for the shipment package.
   * @member {Number} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * Created-at timestamp.
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Shipment package ID.
   * @member {Number} entityId
   */
  exports.prototype['entityId'] = undefined;
  /**
   * Parent ID.
   * @member {Number} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * Updated-at timestamp.
   * @member {String} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * Weight.
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * Quantity.
   * @member {Number} qty
   */
  exports.prototype['qty'] = undefined;
  /**
   * Description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/SalesDataShipmentTrackExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;
  /**
   * Track number.
   * @member {String} trackNumber
   */
  exports.prototype['trackNumber'] = undefined;
  /**
   * Title.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Carrier code.
   * @member {String} carrierCode
   */
  exports.prototype['carrierCode'] = undefined;



  return exports;
}));


