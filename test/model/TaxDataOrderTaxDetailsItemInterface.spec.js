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
    instance = new magento.TaxDataOrderTaxDetailsItemInterface();
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

  describe('TaxDataOrderTaxDetailsItemInterface', function() {
    it('should create an instance of TaxDataOrderTaxDetailsItemInterface', function() {
      // uncomment below and update the code to test TaxDataOrderTaxDetailsItemInterface
      //var instane = new magento.TaxDataOrderTaxDetailsItemInterface();
      //expect(instance).to.be.a(magento.TaxDataOrderTaxDetailsItemInterface);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new magento.TaxDataOrderTaxDetailsItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "itemId")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new magento.TaxDataOrderTaxDetailsItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property associatedItemId (base name: "associatedItemId")', function() {
      // uncomment below and update the code to test the property associatedItemId
      //var instane = new magento.TaxDataOrderTaxDetailsItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property appliedTaxes (base name: "appliedTaxes")', function() {
      // uncomment below and update the code to test the property appliedTaxes
      //var instane = new magento.TaxDataOrderTaxDetailsItemInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.TaxDataOrderTaxDetailsItemInterface();
      //expect(instance).to.be();
    });

  });

}));
