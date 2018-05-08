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
    instance = new magento.CatalogInventoryStockRegistryV1Api();
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

  describe('CatalogInventoryStockRegistryV1Api', function() {
    describe('catalogInventoryStockRegistryV1GetLowStockItemsGet', function() {
      it('should call catalogInventoryStockRegistryV1GetLowStockItemsGet successfully', function(done) {
        //uncomment below and update the code to test catalogInventoryStockRegistryV1GetLowStockItemsGet
        //instance.catalogInventoryStockRegistryV1GetLowStockItemsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogInventoryStockRegistryV1GetStockItemBySkuGet', function() {
      it('should call catalogInventoryStockRegistryV1GetStockItemBySkuGet successfully', function(done) {
        //uncomment below and update the code to test catalogInventoryStockRegistryV1GetStockItemBySkuGet
        //instance.catalogInventoryStockRegistryV1GetStockItemBySkuGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogInventoryStockRegistryV1GetStockStatusBySkuGet', function() {
      it('should call catalogInventoryStockRegistryV1GetStockStatusBySkuGet successfully', function(done) {
        //uncomment below and update the code to test catalogInventoryStockRegistryV1GetStockStatusBySkuGet
        //instance.catalogInventoryStockRegistryV1GetStockStatusBySkuGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogInventoryStockRegistryV1UpdateStockItemBySkuPut', function() {
      it('should call catalogInventoryStockRegistryV1UpdateStockItemBySkuPut successfully', function(done) {
        //uncomment below and update the code to test catalogInventoryStockRegistryV1UpdateStockItemBySkuPut
        //instance.catalogInventoryStockRegistryV1UpdateStockItemBySkuPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
