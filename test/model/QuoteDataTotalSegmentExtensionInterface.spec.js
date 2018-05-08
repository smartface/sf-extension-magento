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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.magento);
  }
}(this, function(expect, magento) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new magento.QuoteDataTotalSegmentExtensionInterface();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('QuoteDataTotalSegmentExtensionInterface', function() {
    it('should create an instance of QuoteDataTotalSegmentExtensionInterface', function() {
      // uncomment below and update the code to test QuoteDataTotalSegmentExtensionInterface
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be.a(magento.QuoteDataTotalSegmentExtensionInterface);
    });

    it('should have the property taxGrandtotalDetails (base name: "taxGrandtotalDetails")', function() {
      // uncomment below and update the code to test the property taxGrandtotalDetails
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property giftCards (base name: "giftCards")', function() {
      // uncomment below and update the code to test the property giftCards
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwOrderId (base name: "gwOrderId")', function() {
      // uncomment below and update the code to test the property gwOrderId
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwItemIds (base name: "gwItemIds")', function() {
      // uncomment below and update the code to test the property gwItemIds
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwAllowGiftReceipt (base name: "gwAllowGiftReceipt")', function() {
      // uncomment below and update the code to test the property gwAllowGiftReceipt
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwAddCard (base name: "gwAddCard")', function() {
      // uncomment below and update the code to test the property gwAddCard
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwPrice (base name: "gwPrice")', function() {
      // uncomment below and update the code to test the property gwPrice
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwBasePrice (base name: "gwBasePrice")', function() {
      // uncomment below and update the code to test the property gwBasePrice
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwItemsPrice (base name: "gwItemsPrice")', function() {
      // uncomment below and update the code to test the property gwItemsPrice
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwItemsBasePrice (base name: "gwItemsBasePrice")', function() {
      // uncomment below and update the code to test the property gwItemsBasePrice
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwCardPrice (base name: "gwCardPrice")', function() {
      // uncomment below and update the code to test the property gwCardPrice
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwCardBasePrice (base name: "gwCardBasePrice")', function() {
      // uncomment below and update the code to test the property gwCardBasePrice
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwBaseTaxAmount (base name: "gwBaseTaxAmount")', function() {
      // uncomment below and update the code to test the property gwBaseTaxAmount
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwTaxAmount (base name: "gwTaxAmount")', function() {
      // uncomment below and update the code to test the property gwTaxAmount
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwItemsBaseTaxAmount (base name: "gwItemsBaseTaxAmount")', function() {
      // uncomment below and update the code to test the property gwItemsBaseTaxAmount
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwItemsTaxAmount (base name: "gwItemsTaxAmount")', function() {
      // uncomment below and update the code to test the property gwItemsTaxAmount
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwCardBaseTaxAmount (base name: "gwCardBaseTaxAmount")', function() {
      // uncomment below and update the code to test the property gwCardBaseTaxAmount
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwCardTaxAmount (base name: "gwCardTaxAmount")', function() {
      // uncomment below and update the code to test the property gwCardTaxAmount
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwPriceInclTax (base name: "gwPriceInclTax")', function() {
      // uncomment below and update the code to test the property gwPriceInclTax
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwBasePriceInclTax (base name: "gwBasePriceInclTax")', function() {
      // uncomment below and update the code to test the property gwBasePriceInclTax
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwCardPriceInclTax (base name: "gwCardPriceInclTax")', function() {
      // uncomment below and update the code to test the property gwCardPriceInclTax
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwCardBasePriceInclTax (base name: "gwCardBasePriceInclTax")', function() {
      // uncomment below and update the code to test the property gwCardBasePriceInclTax
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwItemsPriceInclTax (base name: "gwItemsPriceInclTax")', function() {
      // uncomment below and update the code to test the property gwItemsPriceInclTax
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

    it('should have the property gwItemsBasePriceInclTax (base name: "gwItemsBasePriceInclTax")', function() {
      // uncomment below and update the code to test the property gwItemsBasePriceInclTax
      //var instane = new magento.QuoteDataTotalSegmentExtensionInterface();
      //expect(instance).to.be();
    });

  });

}));
