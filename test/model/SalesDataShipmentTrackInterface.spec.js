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
    instance = new magento.SalesDataShipmentTrackInterface();
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

  describe('SalesDataShipmentTrackInterface', function() {
    it('should create an instance of SalesDataShipmentTrackInterface', function() {
      // uncomment below and update the code to test SalesDataShipmentTrackInterface
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be.a(magento.SalesDataShipmentTrackInterface);
    });

    it('should have the property orderId (base name: "orderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property trackNumber (base name: "trackNumber")', function() {
      // uncomment below and update the code to test the property trackNumber
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

    it('should have the property carrierCode (base name: "carrierCode")', function() {
      // uncomment below and update the code to test the property carrierCode
      //var instane = new magento.SalesDataShipmentTrackInterface();
      //expect(instance).to.be();
    });

  });

}));
