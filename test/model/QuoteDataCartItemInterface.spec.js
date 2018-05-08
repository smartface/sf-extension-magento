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
    instance = new magento.QuoteDataCartItemInterface();
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

  describe('QuoteDataCartItemInterface', function() {
    it('should create an instance of QuoteDataCartItemInterface', function() {
      // uncomment below and update the code to test QuoteDataCartItemInterface
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be.a(magento.QuoteDataCartItemInterface);
    });

    it('should have the property itemId (base name: "itemId")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property productType (base name: "productType")', function() {
      // uncomment below and update the code to test the property productType
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property quoteId (base name: "quoteId")', function() {
      // uncomment below and update the code to test the property quoteId
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property productOption (base name: "productOption")', function() {
      // uncomment below and update the code to test the property productOption
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.QuoteDataCartItemInterface();
      //expect(instance).to.be();
    });

  });

}));
