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
    define(['ApiClient', 'model/SalesDataCreditmemoItemExtensionInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataCreditmemoItemExtensionInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.SalesDataCreditmemoItemInterface = factory(root.magento.ApiClient, root.magento.SalesDataCreditmemoItemExtensionInterface);
  }
}(this, function(ApiClient, SalesDataCreditmemoItemExtensionInterface) {
  'use strict';




  /**
   * The SalesDataCreditmemoItemInterface model module.
   * @module model/SalesDataCreditmemoItemInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>SalesDataCreditmemoItemInterface</code>.
   * Credit memo item interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo item is an invoiced item for which a merchant creates a credit memo.
   * @alias module:model/SalesDataCreditmemoItemInterface
   * @class
   * @param baseCost {Number} The base cost for a credit memo item.
   * @param basePrice {Number} The base price for a credit memo item.
   * @param entityId {Number} Credit memo item ID.
   * @param orderItemId {Number} Order item ID.
   * @param qty {Number} Quantity.
   */
  var exports = function(baseCost, basePrice, entityId, orderItemId, qty) {
    var _this = this;


    _this['baseCost'] = baseCost;


    _this['basePrice'] = basePrice;










    _this['entityId'] = entityId;


    _this['orderItemId'] = orderItemId;




    _this['qty'] = qty;










  };

  /**
   * Constructs a <code>SalesDataCreditmemoItemInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesDataCreditmemoItemInterface} obj Optional instance to populate.
   * @return {module:model/SalesDataCreditmemoItemInterface} The populated <code>SalesDataCreditmemoItemInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
      }
      if (data.hasOwnProperty('baseCost')) {
        obj['baseCost'] = ApiClient.convertToType(data['baseCost'], 'Number');
      }
      if (data.hasOwnProperty('baseDiscountAmount')) {
        obj['baseDiscountAmount'] = ApiClient.convertToType(data['baseDiscountAmount'], 'Number');
      }
      if (data.hasOwnProperty('baseDiscountTaxCompensationAmount')) {
        obj['baseDiscountTaxCompensationAmount'] = ApiClient.convertToType(data['baseDiscountTaxCompensationAmount'], 'Number');
      }
      if (data.hasOwnProperty('basePrice')) {
        obj['basePrice'] = ApiClient.convertToType(data['basePrice'], 'Number');
      }
      if (data.hasOwnProperty('basePriceInclTax')) {
        obj['basePriceInclTax'] = ApiClient.convertToType(data['basePriceInclTax'], 'Number');
      }
      if (data.hasOwnProperty('baseRowTotal')) {
        obj['baseRowTotal'] = ApiClient.convertToType(data['baseRowTotal'], 'Number');
      }
      if (data.hasOwnProperty('baseRowTotalInclTax')) {
        obj['baseRowTotalInclTax'] = ApiClient.convertToType(data['baseRowTotalInclTax'], 'Number');
      }
      if (data.hasOwnProperty('baseTaxAmount')) {
        obj['baseTaxAmount'] = ApiClient.convertToType(data['baseTaxAmount'], 'Number');
      }
      if (data.hasOwnProperty('baseWeeeTaxAppliedAmount')) {
        obj['baseWeeeTaxAppliedAmount'] = ApiClient.convertToType(data['baseWeeeTaxAppliedAmount'], 'Number');
      }
      if (data.hasOwnProperty('baseWeeeTaxAppliedRowAmnt')) {
        obj['baseWeeeTaxAppliedRowAmnt'] = ApiClient.convertToType(data['baseWeeeTaxAppliedRowAmnt'], 'Number');
      }
      if (data.hasOwnProperty('baseWeeeTaxDisposition')) {
        obj['baseWeeeTaxDisposition'] = ApiClient.convertToType(data['baseWeeeTaxDisposition'], 'Number');
      }
      if (data.hasOwnProperty('baseWeeeTaxRowDisposition')) {
        obj['baseWeeeTaxRowDisposition'] = ApiClient.convertToType(data['baseWeeeTaxRowDisposition'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'Number');
      }
      if (data.hasOwnProperty('entityId')) {
        obj['entityId'] = ApiClient.convertToType(data['entityId'], 'Number');
      }
      if (data.hasOwnProperty('discountTaxCompensationAmount')) {
        obj['discountTaxCompensationAmount'] = ApiClient.convertToType(data['discountTaxCompensationAmount'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('orderItemId')) {
        obj['orderItemId'] = ApiClient.convertToType(data['orderItemId'], 'Number');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('priceInclTax')) {
        obj['priceInclTax'] = ApiClient.convertToType(data['priceInclTax'], 'Number');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
      }
      if (data.hasOwnProperty('rowTotal')) {
        obj['rowTotal'] = ApiClient.convertToType(data['rowTotal'], 'Number');
      }
      if (data.hasOwnProperty('rowTotalInclTax')) {
        obj['rowTotalInclTax'] = ApiClient.convertToType(data['rowTotalInclTax'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'Number');
      }
      if (data.hasOwnProperty('weeeTaxApplied')) {
        obj['weeeTaxApplied'] = ApiClient.convertToType(data['weeeTaxApplied'], 'String');
      }
      if (data.hasOwnProperty('weeeTaxAppliedAmount')) {
        obj['weeeTaxAppliedAmount'] = ApiClient.convertToType(data['weeeTaxAppliedAmount'], 'Number');
      }
      if (data.hasOwnProperty('weeeTaxAppliedRowAmount')) {
        obj['weeeTaxAppliedRowAmount'] = ApiClient.convertToType(data['weeeTaxAppliedRowAmount'], 'Number');
      }
      if (data.hasOwnProperty('weeeTaxDisposition')) {
        obj['weeeTaxDisposition'] = ApiClient.convertToType(data['weeeTaxDisposition'], 'Number');
      }
      if (data.hasOwnProperty('weeeTaxRowDisposition')) {
        obj['weeeTaxRowDisposition'] = ApiClient.convertToType(data['weeeTaxRowDisposition'], 'Number');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = SalesDataCreditmemoItemExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
    }
    return obj;
  }

  /**
   * Additional data.
   * @member {String} additionalData
   */
  exports.prototype['additionalData'] = undefined;
  /**
   * The base cost for a credit memo item.
   * @member {Number} baseCost
   */
  exports.prototype['baseCost'] = undefined;
  /**
   * The base discount amount for a credit memo item.
   * @member {Number} baseDiscountAmount
   */
  exports.prototype['baseDiscountAmount'] = undefined;
  /**
   * The base discount tax compensation amount for a credit memo item.
   * @member {Number} baseDiscountTaxCompensationAmount
   */
  exports.prototype['baseDiscountTaxCompensationAmount'] = undefined;
  /**
   * The base price for a credit memo item.
   * @member {Number} basePrice
   */
  exports.prototype['basePrice'] = undefined;
  /**
   * Base price including tax.
   * @member {Number} basePriceInclTax
   */
  exports.prototype['basePriceInclTax'] = undefined;
  /**
   * Base row total.
   * @member {Number} baseRowTotal
   */
  exports.prototype['baseRowTotal'] = undefined;
  /**
   * Base row total including tax.
   * @member {Number} baseRowTotalInclTax
   */
  exports.prototype['baseRowTotalInclTax'] = undefined;
  /**
   * Base tax amount.
   * @member {Number} baseTaxAmount
   */
  exports.prototype['baseTaxAmount'] = undefined;
  /**
   * Base WEEE tax applied amount.
   * @member {Number} baseWeeeTaxAppliedAmount
   */
  exports.prototype['baseWeeeTaxAppliedAmount'] = undefined;
  /**
   * Base WEEE tax applied row amount.
   * @member {Number} baseWeeeTaxAppliedRowAmnt
   */
  exports.prototype['baseWeeeTaxAppliedRowAmnt'] = undefined;
  /**
   * Base WEEE tax disposition.
   * @member {Number} baseWeeeTaxDisposition
   */
  exports.prototype['baseWeeeTaxDisposition'] = undefined;
  /**
   * Base WEEE tax row disposition.
   * @member {Number} baseWeeeTaxRowDisposition
   */
  exports.prototype['baseWeeeTaxRowDisposition'] = undefined;
  /**
   * Description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Discount amount.
   * @member {Number} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Credit memo item ID.
   * @member {Number} entityId
   */
  exports.prototype['entityId'] = undefined;
  /**
   * Discount tax compensation amount.
   * @member {Number} discountTaxCompensationAmount
   */
  exports.prototype['discountTaxCompensationAmount'] = undefined;
  /**
   * Name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Order item ID.
   * @member {Number} orderItemId
   */
  exports.prototype['orderItemId'] = undefined;
  /**
   * Parent ID.
   * @member {Number} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * Price.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Price including tax.
   * @member {Number} priceInclTax
   */
  exports.prototype['priceInclTax'] = undefined;
  /**
   * Product ID.
   * @member {Number} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * Quantity.
   * @member {Number} qty
   */
  exports.prototype['qty'] = undefined;
  /**
   * Row total.
   * @member {Number} rowTotal
   */
  exports.prototype['rowTotal'] = undefined;
  /**
   * Row total including tax.
   * @member {Number} rowTotalInclTax
   */
  exports.prototype['rowTotalInclTax'] = undefined;
  /**
   * SKU.
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * Tax amount.
   * @member {Number} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;
  /**
   * WEEE tax applied.
   * @member {String} weeeTaxApplied
   */
  exports.prototype['weeeTaxApplied'] = undefined;
  /**
   * WEEE tax applied amount.
   * @member {Number} weeeTaxAppliedAmount
   */
  exports.prototype['weeeTaxAppliedAmount'] = undefined;
  /**
   * WEEE tax applied row amount.
   * @member {Number} weeeTaxAppliedRowAmount
   */
  exports.prototype['weeeTaxAppliedRowAmount'] = undefined;
  /**
   * WEEE tax disposition.
   * @member {Number} weeeTaxDisposition
   */
  exports.prototype['weeeTaxDisposition'] = undefined;
  /**
   * WEEE tax row disposition.
   * @member {Number} weeeTaxRowDisposition
   */
  exports.prototype['weeeTaxRowDisposition'] = undefined;
  /**
   * @member {module:model/SalesDataCreditmemoItemExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;



  return exports;
}));


