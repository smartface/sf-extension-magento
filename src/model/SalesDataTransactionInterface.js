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
    define(['ApiClient', 'model/SalesDataTransactionExtensionInterface', 'model/SalesDataTransactionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataTransactionExtensionInterface'), require('./SalesDataTransactionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesDataTransactionInterface = factory(root.magento.ApiClient, root.magento.SalesDataTransactionExtensionInterface, root.magento.SalesDataTransactionInterface);
  }
}(this, function(ApiClient, SalesDataTransactionExtensionInterface, SalesDataTransactionInterface) {
  'use strict';




  /**
   * The SalesDataTransactionInterface model module.
   * @module model/SalesDataTransactionInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataTransactionInterface</code>.
   * Transaction interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
   * @alias module:model/SalesDataTransactionInterface
   * @class
   * @param transactionId {Number} Transaction ID.
   * @param orderId {Number} Order ID.
   * @param paymentId {Number} Payment ID.
   * @param txnId {String} Transaction business ID.
   * @param parentTxnId {String} Parent transaction business ID.
   * @param txnType {String} Transaction type.
   * @param isClosed {Number} Is-closed flag value.
   * @param createdAt {String} Created-at timestamp.
   * @param childTransactions {Array.<module:model/SalesDataTransactionInterface>} Array of child transactions.
   */
  var exports = function(transactionId, orderId, paymentId, txnId, parentTxnId, txnType, isClosed, createdAt, childTransactions) {
    var _this = this;

    _this['transactionId'] = transactionId;

    _this['orderId'] = orderId;
    _this['paymentId'] = paymentId;
    _this['txnId'] = txnId;
    _this['parentTxnId'] = parentTxnId;
    _this['txnType'] = txnType;
    _this['isClosed'] = isClosed;

    _this['createdAt'] = createdAt;
    _this['childTransactions'] = childTransactions;

  };

  /**
   * Constructs a <code>SalesDataTransactionInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataTransactionInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataTransactionInterface} The populated <code>SalesDataTransactionInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'Number');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
      }
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'Number');
      }
      if (data.hasOwnProperty('paymentId')) {
        obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'Number');
      }
      if (data.hasOwnProperty('txnId')) {
        obj['txnId'] = ApiClient.convertToType(data['txnId'], 'String');
      }
      if (data.hasOwnProperty('parentTxnId')) {
        obj['parentTxnId'] = ApiClient.convertToType(data['parentTxnId'], 'String');
      }
      if (data.hasOwnProperty('txnType')) {
        obj['txnType'] = ApiClient.convertToType(data['txnType'], 'String');
      }
      if (data.hasOwnProperty('isClosed')) {
        obj['isClosed'] = ApiClient.convertToType(data['isClosed'], 'Number');
      }
      if (data.hasOwnProperty('additionalInformation')) {
        obj['additionalInformation'] = ApiClient.convertToType(data['additionalInformation'], ['String']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('childTransactions')) {
        obj['childTransactions'] = ApiClient.convertToType(data['childTransactions'], [SalesDataTransactionInterface]);
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesDataTransactionExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Transaction ID.
   * @member {Number} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * The parent ID for the transaction. Otherwise, null.
   * @member {Number} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * Order ID.
   * @member {Number} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * Payment ID.
   * @member {Number} paymentId
   */
  exports.prototype['paymentId'] = undefined;
  /**
   * Transaction business ID.
   * @member {String} txnId
   */
  exports.prototype['txnId'] = undefined;
  /**
   * Parent transaction business ID.
   * @member {String} parentTxnId
   */
  exports.prototype['parentTxnId'] = undefined;
  /**
   * Transaction type.
   * @member {String} txnType
   */
  exports.prototype['txnType'] = undefined;
  /**
   * Is-closed flag value.
   * @member {Number} isClosed
   */
  exports.prototype['isClosed'] = undefined;
  /**
   * Array of additional information. Otherwise, null.
   * @member {Array.<String>} additionalInformation
   */
  exports.prototype['additionalInformation'] = undefined;
  /**
   * Created-at timestamp.
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Array of child transactions.
   * @member {Array.<module:model/SalesDataTransactionInterface>} childTransactions
   */
  exports.prototype['childTransactions'] = undefined;
  /**
   * @member {module:model/SalesDataTransactionExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


