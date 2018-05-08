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
    instance = new magento.Body64();
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

  describe('Body64', function() {
    it('should create an instance of Body64', function() {
      // uncomment below and update the code to test Body64
      //var instane = new magento.Body64();
      //expect(instance).to.be.a(magento.Body64);
    });

    it('should have the property paymentMethod (base name: "paymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instane = new magento.Body64();
      //expect(instance).to.be();
    });

    it('should have the property shippingCarrierCode (base name: "shippingCarrierCode")', function() {
      // uncomment below and update the code to test the property shippingCarrierCode
      //var instane = new magento.Body64();
      //expect(instance).to.be();
    });

    it('should have the property shippingMethodCode (base name: "shippingMethodCode")', function() {
      // uncomment below and update the code to test the property shippingMethodCode
      //var instane = new magento.Body64();
      //expect(instance).to.be();
    });

    it('should have the property additionalData (base name: "additionalData")', function() {
      // uncomment below and update the code to test the property additionalData
      //var instane = new magento.Body64();
      //expect(instance).to.be();
    });

  });

}));
