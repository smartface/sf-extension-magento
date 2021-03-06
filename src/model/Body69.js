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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SalesDataCreditmemoCommentCreationInterface', 'model/SalesDataCreditmemoCreationArgumentsInterface', 'model/SalesDataCreditmemoItemCreationInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SalesDataCreditmemoCommentCreationInterface'), require('./SalesDataCreditmemoCreationArgumentsInterface'), require('./SalesDataCreditmemoItemCreationInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.Body69 = factory(root.magento.ApiClient, root.magento.SalesDataCreditmemoCommentCreationInterface, root.magento.SalesDataCreditmemoCreationArgumentsInterface, root.magento.SalesDataCreditmemoItemCreationInterface);
  }
}(this, function(ApiClient, SalesDataCreditmemoCommentCreationInterface, SalesDataCreditmemoCreationArgumentsInterface, SalesDataCreditmemoItemCreationInterface) {
  'use strict';




  /**
   * The Body69 model module.
   * @module model/Body69
   * @version 2.0
   */

  /**
   * Constructs a new <code>Body69</code>.
   * @alias module:model/Body69
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Body69</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body69} obj Optional instance to populate.
   * @return {module:model/Body69} The populated <code>Body69</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [SalesDataCreditmemoItemCreationInterface]);
      }
      if (data.hasOwnProperty('isOnline')) {
        obj['isOnline'] = ApiClient.convertToType(data['isOnline'], 'Boolean');
      }
      if (data.hasOwnProperty('notify')) {
        obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
      }
      if (data.hasOwnProperty('appendComment')) {
        obj['appendComment'] = ApiClient.convertToType(data['appendComment'], 'Boolean');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = SalesDataCreditmemoCommentCreationInterface.constructFromObject(data['comment']);
      }
      if (data.hasOwnProperty('arguments')) {
        obj['arguments'] = SalesDataCreditmemoCreationArgumentsInterface.constructFromObject(data['arguments']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SalesDataCreditmemoItemCreationInterface>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {Boolean} isOnline
   */
  exports.prototype['isOnline'] = undefined;
  /**
   * @member {Boolean} notify
   */
  exports.prototype['notify'] = undefined;
  /**
   * @member {Boolean} appendComment
   */
  exports.prototype['appendComment'] = undefined;
  /**
   * @member {module:model/SalesDataCreditmemoCommentCreationInterface} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {module:model/SalesDataCreditmemoCreationArgumentsInterface} arguments
   */
  exports.prototype['arguments'] = undefined;



  return exports;
}));


