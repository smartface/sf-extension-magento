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
    instance = new magento.CheckoutDataTotalsInformationInterface();
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

  describe('CheckoutDataTotalsInformationInterface', function() {
    it('should create an instance of CheckoutDataTotalsInformationInterface', function() {
      // uncomment below and update the code to test CheckoutDataTotalsInformationInterface
      //var instane = new magento.CheckoutDataTotalsInformationInterface();
      //expect(instance).to.be.a(magento.CheckoutDataTotalsInformationInterface);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new magento.CheckoutDataTotalsInformationInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingMethodCode (base name: "shippingMethodCode")', function() {
      // uncomment below and update the code to test the property shippingMethodCode
      //var instane = new magento.CheckoutDataTotalsInformationInterface();
      //expect(instance).to.be();
    });

    it('should have the property shippingCarrierCode (base name: "shippingCarrierCode")', function() {
      // uncomment below and update the code to test the property shippingCarrierCode
      //var instane = new magento.CheckoutDataTotalsInformationInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.CheckoutDataTotalsInformationInterface();
      //expect(instance).to.be();
    });

    it('should have the property customAttributes (base name: "customAttributes")', function() {
      // uncomment below and update the code to test the property customAttributes
      //var instane = new magento.CheckoutDataTotalsInformationInterface();
      //expect(instance).to.be();
    });

  });

}));
