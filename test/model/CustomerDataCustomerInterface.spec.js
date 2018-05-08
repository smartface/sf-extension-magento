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
    instance = new magento.CustomerDataCustomerInterface();
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

  describe('CustomerDataCustomerInterface', function() {
    it('should create an instance of CustomerDataCustomerInterface', function() {
      // uncomment below and update the code to test CustomerDataCustomerInterface
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be.a(magento.CustomerDataCustomerInterface);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property defaultBilling (base name: "defaultBilling")', function() {
      // uncomment below and update the code to test the property defaultBilling
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property defaultShipping (base name: "defaultShipping")', function() {
      // uncomment below and update the code to test the property defaultShipping
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property confirmation (base name: "confirmation")', function() {
      // uncomment below and update the code to test the property confirmation
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property createdIn (base name: "createdIn")', function() {
      // uncomment below and update the code to test the property createdIn
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property dob (base name: "dob")', function() {
      // uncomment below and update the code to test the property dob
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property middlename (base name: "middlename")', function() {
      // uncomment below and update the code to test the property middlename
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property suffix (base name: "suffix")', function() {
      // uncomment below and update the code to test the property suffix
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "storeId")', function() {
      // uncomment below and update the code to test the property storeId
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property taxvat (base name: "taxvat")', function() {
      // uncomment below and update the code to test the property taxvat
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property websiteId (base name: "websiteId")', function() {
      // uncomment below and update the code to test the property websiteId
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property addresses (base name: "addresses")', function() {
      // uncomment below and update the code to test the property addresses
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property disableAutoGroupChange (base name: "disableAutoGroupChange")', function() {
      // uncomment below and update the code to test the property disableAutoGroupChange
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

    it('should have the property customAttributes (base name: "customAttributes")', function() {
      // uncomment below and update the code to test the property customAttributes
      //var instane = new magento.CustomerDataCustomerInterface();
      //expect(instance).to.be();
    });

  });

}));
