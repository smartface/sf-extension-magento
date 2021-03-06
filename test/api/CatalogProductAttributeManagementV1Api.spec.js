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
    instance = new magento.CatalogProductAttributeManagementV1Api();
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

  describe('CatalogProductAttributeManagementV1Api', function() {
    describe('catalogProductAttributeManagementV1AssignPost', function() {
      it('should call catalogProductAttributeManagementV1AssignPost successfully', function(done) {
        //uncomment below and update the code to test catalogProductAttributeManagementV1AssignPost
        //instance.catalogProductAttributeManagementV1AssignPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogProductAttributeManagementV1GetAttributesGet', function() {
      it('should call catalogProductAttributeManagementV1GetAttributesGet successfully', function(done) {
        //uncomment below and update the code to test catalogProductAttributeManagementV1GetAttributesGet
        //instance.catalogProductAttributeManagementV1GetAttributesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogProductAttributeManagementV1UnassignDelete', function() {
      it('should call catalogProductAttributeManagementV1UnassignDelete successfully', function(done) {
        //uncomment below and update the code to test catalogProductAttributeManagementV1UnassignDelete
        //instance.catalogProductAttributeManagementV1UnassignDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
