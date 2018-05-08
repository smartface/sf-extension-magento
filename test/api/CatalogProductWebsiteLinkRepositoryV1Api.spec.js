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
    instance = new magento.CatalogProductWebsiteLinkRepositoryV1Api();
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

  describe('CatalogProductWebsiteLinkRepositoryV1Api', function() {
    describe('catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete', function() {
      it('should call catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete successfully', function(done) {
        //uncomment below and update the code to test catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete
        //instance.catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogProductWebsiteLinkRepositoryV1SavePost', function() {
      it('should call catalogProductWebsiteLinkRepositoryV1SavePost successfully', function(done) {
        //uncomment below and update the code to test catalogProductWebsiteLinkRepositoryV1SavePost
        //instance.catalogProductWebsiteLinkRepositoryV1SavePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogProductWebsiteLinkRepositoryV1SavePut', function() {
      it('should call catalogProductWebsiteLinkRepositoryV1SavePut successfully', function(done) {
        //uncomment below and update the code to test catalogProductWebsiteLinkRepositoryV1SavePut
        //instance.catalogProductWebsiteLinkRepositoryV1SavePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));