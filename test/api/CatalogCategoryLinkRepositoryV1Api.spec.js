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
    instance = new magento.CatalogCategoryLinkRepositoryV1Api();
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

  describe('CatalogCategoryLinkRepositoryV1Api', function() {
    describe('catalogCategoryLinkRepositoryV1DeleteByIdsDelete', function() {
      it('should call catalogCategoryLinkRepositoryV1DeleteByIdsDelete successfully', function(done) {
        //uncomment below and update the code to test catalogCategoryLinkRepositoryV1DeleteByIdsDelete
        //instance.catalogCategoryLinkRepositoryV1DeleteByIdsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogCategoryLinkRepositoryV1SavePost', function() {
      it('should call catalogCategoryLinkRepositoryV1SavePost successfully', function(done) {
        //uncomment below and update the code to test catalogCategoryLinkRepositoryV1SavePost
        //instance.catalogCategoryLinkRepositoryV1SavePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('catalogCategoryLinkRepositoryV1SavePut', function() {
      it('should call catalogCategoryLinkRepositoryV1SavePut successfully', function(done) {
        //uncomment below and update the code to test catalogCategoryLinkRepositoryV1SavePut
        //instance.catalogCategoryLinkRepositoryV1SavePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
