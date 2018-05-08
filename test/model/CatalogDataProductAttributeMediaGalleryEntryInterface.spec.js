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
    instance = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
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

  describe('CatalogDataProductAttributeMediaGalleryEntryInterface', function() {
    it('should create an instance of CatalogDataProductAttributeMediaGalleryEntryInterface', function() {
      // uncomment below and update the code to test CatalogDataProductAttributeMediaGalleryEntryInterface
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be.a(magento.CatalogDataProductAttributeMediaGalleryEntryInterface);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

    it('should have the property mediaType (base name: "mediaType")', function() {
      // uncomment below and update the code to test the property mediaType
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

    it('should have the property types (base name: "types")', function() {
      // uncomment below and update the code to test the property types
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

    it('should have the property extensionAttributes (base name: "extensionAttributes")', function() {
      // uncomment below and update the code to test the property extensionAttributes
      //var instane = new magento.CatalogDataProductAttributeMediaGalleryEntryInterface();
      //expect(instance).to.be();
    });

  });

}));
