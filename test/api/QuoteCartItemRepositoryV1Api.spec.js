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
    instance = new magento.QuoteCartItemRepositoryV1Api();
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

  describe('QuoteCartItemRepositoryV1Api', function() {
    describe('quoteCartItemRepositoryV1DeleteByIdDelete', function() {
      it('should call quoteCartItemRepositoryV1DeleteByIdDelete successfully', function(done) {
        //uncomment below and update the code to test quoteCartItemRepositoryV1DeleteByIdDelete
        //instance.quoteCartItemRepositoryV1DeleteByIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quoteCartItemRepositoryV1DeleteByIdDelete_0', function() {
      it('should call quoteCartItemRepositoryV1DeleteByIdDelete_0 successfully', function(done) {
        //uncomment below and update the code to test quoteCartItemRepositoryV1DeleteByIdDelete_0
        //instance.quoteCartItemRepositoryV1DeleteByIdDelete_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quoteCartItemRepositoryV1GetListGet', function() {
      it('should call quoteCartItemRepositoryV1GetListGet successfully', function(done) {
        //uncomment below and update the code to test quoteCartItemRepositoryV1GetListGet
        //instance.quoteCartItemRepositoryV1GetListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quoteCartItemRepositoryV1GetListGet_0', function() {
      it('should call quoteCartItemRepositoryV1GetListGet_0 successfully', function(done) {
        //uncomment below and update the code to test quoteCartItemRepositoryV1GetListGet_0
        //instance.quoteCartItemRepositoryV1GetListGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quoteCartItemRepositoryV1SavePost', function() {
      it('should call quoteCartItemRepositoryV1SavePost successfully', function(done) {
        //uncomment below and update the code to test quoteCartItemRepositoryV1SavePost
        //instance.quoteCartItemRepositoryV1SavePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quoteCartItemRepositoryV1SavePost_0', function() {
      it('should call quoteCartItemRepositoryV1SavePost_0 successfully', function(done) {
        //uncomment below and update the code to test quoteCartItemRepositoryV1SavePost_0
        //instance.quoteCartItemRepositoryV1SavePost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quoteCartItemRepositoryV1SavePut', function() {
      it('should call quoteCartItemRepositoryV1SavePut successfully', function(done) {
        //uncomment below and update the code to test quoteCartItemRepositoryV1SavePut
        //instance.quoteCartItemRepositoryV1SavePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('quoteCartItemRepositoryV1SavePut_0', function() {
      it('should call quoteCartItemRepositoryV1SavePut_0 successfully', function(done) {
        //uncomment below and update the code to test quoteCartItemRepositoryV1SavePut_0
        //instance.quoteCartItemRepositoryV1SavePut_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
