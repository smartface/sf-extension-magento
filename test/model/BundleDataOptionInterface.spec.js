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
    instance = new magento.BundleDataOptionInterface();
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

  describe('BundleDataOptionInterface', function() {
    it('should create an instance of BundleDataOptionInterface', function() {
      // uncomment below and update the code to test BundleDataOptionInterface
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be.a(magento.BundleDataOptionInterface);
    });

    it('should have the property optionId (base name: "optionId")', function() {
      // uncomment below and update the code to test the property optionId
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be();
    });

    it('should have the property productLinks (base name: "productLinks")', function() {
      // uncomment below and update the code to test the property productLinks
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.BundleDataOptionInterface();
      //expect(instance).to.be();
    });

  });

}));
