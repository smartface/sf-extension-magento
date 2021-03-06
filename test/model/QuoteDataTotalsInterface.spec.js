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
    instance = new magento.QuoteDataTotalsInterface();
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

  describe('QuoteDataTotalsInterface', function() {
    it('should create an instance of QuoteDataTotalsInterface', function() {
      // uncomment below and update the code to test QuoteDataTotalsInterface
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be.a(magento.QuoteDataTotalsInterface);
    });

    it('should have the property grandTotal (base name: "grandTotal")', function() {
      // uncomment below and update the code to test the property grandTotal
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseGrandTotal (base name: "baseGrandTotal")', function() {
      // uncomment below and update the code to test the property baseGrandTotal
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property subtotal (base name: "subtotal")', function() {
      // uncomment below and update the code to test the property subtotal
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseSubtotal (base name: "baseSubtotal")', function() {
      // uncomment below and update the code to test the property baseSubtotal
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discountAmount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseDiscountAmount (base name: "baseDiscountAmount")', function() {
      // uncomment below and update the code to test the property baseDiscountAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property subtotalWithDiscount (base name: "subtotalWithDiscount")', function() {
      // uncomment below and update the code to test the property subtotalWithDiscount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseSubtotalWithDiscount (base name: "baseSubtotalWithDiscount")', function() {
      // uncomment below and update the code to test the property baseSubtotalWithDiscount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingAmount (base name: "shippingAmount")', function() {
      // uncomment below and update the code to test the property shippingAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseShippingAmount (base name: "baseShippingAmount")', function() {
      // uncomment below and update the code to test the property baseShippingAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingDiscountAmount (base name: "shippingDiscountAmount")', function() {
      // uncomment below and update the code to test the property shippingDiscountAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseShippingDiscountAmount (base name: "baseShippingDiscountAmount")', function() {
      // uncomment below and update the code to test the property baseShippingDiscountAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "taxAmount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseTaxAmount (base name: "baseTaxAmount")', function() {
      // uncomment below and update the code to test the property baseTaxAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property weeeTaxAppliedAmount (base name: "weeeTaxAppliedAmount")', function() {
      // uncomment below and update the code to test the property weeeTaxAppliedAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingTaxAmount (base name: "shippingTaxAmount")', function() {
      // uncomment below and update the code to test the property shippingTaxAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseShippingTaxAmount (base name: "baseShippingTaxAmount")', function() {
      // uncomment below and update the code to test the property baseShippingTaxAmount
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property subtotalInclTax (base name: "subtotalInclTax")', function() {
      // uncomment below and update the code to test the property subtotalInclTax
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseSubtotalInclTax (base name: "baseSubtotalInclTax")', function() {
      // uncomment below and update the code to test the property baseSubtotalInclTax
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingInclTax (base name: "shippingInclTax")', function() {
      // uncomment below and update the code to test the property shippingInclTax
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseShippingInclTax (base name: "baseShippingInclTax")', function() {
      // uncomment below and update the code to test the property baseShippingInclTax
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property baseCurrencyCode (base name: "baseCurrencyCode")', function() {
      // uncomment below and update the code to test the property baseCurrencyCode
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property quoteCurrencyCode (base name: "quoteCurrencyCode")', function() {
      // uncomment below and update the code to test the property quoteCurrencyCode
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property couponCode (base name: "couponCode")', function() {
      // uncomment below and update the code to test the property couponCode
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property itemsQty (base name: "itemsQty")', function() {
      // uncomment below and update the code to test the property itemsQty
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property totalSegments (base name: "totalSegments")', function() {
      // uncomment below and update the code to test the property totalSegments
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.QuoteDataTotalsInterface();
      //expect(instance).to.be();
    });

  });

}));
