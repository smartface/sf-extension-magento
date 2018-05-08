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
    define(['ApiClient', 'model/CatalogDataEavAttributeExtensionInterface', 'model/EavDataAttributeFrontendLabelInterface', 'model/EavDataAttributeOptionInterface', 'model/EavDataAttributeValidationRuleInterface', 'model/FrameworkAttributeInterface'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CatalogDataEavAttributeExtensionInterface'), require('./EavDataAttributeFrontendLabelInterface'), require('./EavDataAttributeOptionInterface'), require('./EavDataAttributeValidationRuleInterface'), require('./FrameworkAttributeInterface'));
  } else {
    // Browser globals (root is window)
    if (!root.magento) {
      root.magento = {};
    }
    root.magento.CatalogDataCategoryAttributeInterface = factory(root.magento.ApiClient, root.magento.CatalogDataEavAttributeExtensionInterface, root.magento.EavDataAttributeFrontendLabelInterface, root.magento.EavDataAttributeOptionInterface, root.magento.EavDataAttributeValidationRuleInterface, root.magento.FrameworkAttributeInterface);
  }
}(this, function(ApiClient, CatalogDataEavAttributeExtensionInterface, EavDataAttributeFrontendLabelInterface, EavDataAttributeOptionInterface, EavDataAttributeValidationRuleInterface, FrameworkAttributeInterface) {
  'use strict';




  /**
   * The CatalogDataCategoryAttributeInterface model module.
   * @module model/CatalogDataCategoryAttributeInterface
   * @version 2.0
   */

  /**
   * Constructs a new <code>CatalogDataCategoryAttributeInterface</code>.
   * 
   * @alias module:model/CatalogDataCategoryAttributeInterface
   * @class
   * @param attributeCode {String} Code of the attribute.
   * @param frontendInput {String} HTML for input element.
   * @param isRequired {Boolean} Attribute is required.
   * @param frontendLabels {Array.<module:model/EavDataAttributeFrontendLabelInterface>} Frontend label for each store
   */
  var exports = function(attributeCode, frontendInput, isRequired, frontendLabels) {
    var _this = this;





















    _this['attributeCode'] = attributeCode;
    _this['frontendInput'] = frontendInput;

    _this['isRequired'] = isRequired;



    _this['frontendLabels'] = frontendLabels;









  };

  /**
   * Constructs a <code>CatalogDataCategoryAttributeInterface</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogDataCategoryAttributeInterface} obj Optional instance to populate.
   * @return {module:model/CatalogDataCategoryAttributeInterface} The populated <code>CatalogDataCategoryAttributeInterface</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isWysiwygEnabled')) {
        obj['isWysiwygEnabled'] = ApiClient.convertToType(data['isWysiwygEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('isHtmlAllowedOnFront')) {
        obj['isHtmlAllowedOnFront'] = ApiClient.convertToType(data['isHtmlAllowedOnFront'], 'Boolean');
      }
      if (data.hasOwnProperty('usedForSortBy')) {
        obj['usedForSortBy'] = ApiClient.convertToType(data['usedForSortBy'], 'Boolean');
      }
      if (data.hasOwnProperty('isFilterable')) {
        obj['isFilterable'] = ApiClient.convertToType(data['isFilterable'], 'Boolean');
      }
      if (data.hasOwnProperty('isFilterableInSearch')) {
        obj['isFilterableInSearch'] = ApiClient.convertToType(data['isFilterableInSearch'], 'Boolean');
      }
      if (data.hasOwnProperty('isUsedInGrid')) {
        obj['isUsedInGrid'] = ApiClient.convertToType(data['isUsedInGrid'], 'Boolean');
      }
      if (data.hasOwnProperty('isVisibleInGrid')) {
        obj['isVisibleInGrid'] = ApiClient.convertToType(data['isVisibleInGrid'], 'Boolean');
      }
      if (data.hasOwnProperty('isFilterableInGrid')) {
        obj['isFilterableInGrid'] = ApiClient.convertToType(data['isFilterableInGrid'], 'Boolean');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('applyTo')) {
        obj['applyTo'] = ApiClient.convertToType(data['applyTo'], ['String']);
      }
      if (data.hasOwnProperty('isSearchable')) {
        obj['isSearchable'] = ApiClient.convertToType(data['isSearchable'], 'String');
      }
      if (data.hasOwnProperty('isVisibleInAdvancedSearch')) {
        obj['isVisibleInAdvancedSearch'] = ApiClient.convertToType(data['isVisibleInAdvancedSearch'], 'String');
      }
      if (data.hasOwnProperty('isComparable')) {
        obj['isComparable'] = ApiClient.convertToType(data['isComparable'], 'String');
      }
      if (data.hasOwnProperty('isUsedForPromoRules')) {
        obj['isUsedForPromoRules'] = ApiClient.convertToType(data['isUsedForPromoRules'], 'String');
      }
      if (data.hasOwnProperty('isVisibleOnFront')) {
        obj['isVisibleOnFront'] = ApiClient.convertToType(data['isVisibleOnFront'], 'String');
      }
      if (data.hasOwnProperty('usedInProductListing')) {
        obj['usedInProductListing'] = ApiClient.convertToType(data['usedInProductListing'], 'String');
      }
      if (data.hasOwnProperty('isVisible')) {
        obj['isVisible'] = ApiClient.convertToType(data['isVisible'], 'Boolean');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('extensionAttributes')) {
        obj['extensionAttributes'] = CatalogDataEavAttributeExtensionInterface.constructFromObject(data['extensionAttributes']);
      }
      if (data.hasOwnProperty('attributeId')) {
        obj['attributeId'] = ApiClient.convertToType(data['attributeId'], 'Number');
      }
      if (data.hasOwnProperty('attributeCode')) {
        obj['attributeCode'] = ApiClient.convertToType(data['attributeCode'], 'String');
      }
      if (data.hasOwnProperty('frontendInput')) {
        obj['frontendInput'] = ApiClient.convertToType(data['frontendInput'], 'String');
      }
      if (data.hasOwnProperty('entityTypeId')) {
        obj['entityTypeId'] = ApiClient.convertToType(data['entityTypeId'], 'String');
      }
      if (data.hasOwnProperty('isRequired')) {
        obj['isRequired'] = ApiClient.convertToType(data['isRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [EavDataAttributeOptionInterface]);
      }
      if (data.hasOwnProperty('isUserDefined')) {
        obj['isUserDefined'] = ApiClient.convertToType(data['isUserDefined'], 'Boolean');
      }
      if (data.hasOwnProperty('defaultFrontendLabel')) {
        obj['defaultFrontendLabel'] = ApiClient.convertToType(data['defaultFrontendLabel'], 'String');
      }
      if (data.hasOwnProperty('frontendLabels')) {
        obj['frontendLabels'] = ApiClient.convertToType(data['frontendLabels'], [EavDataAttributeFrontendLabelInterface]);
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('backendType')) {
        obj['backendType'] = ApiClient.convertToType(data['backendType'], 'String');
      }
      if (data.hasOwnProperty('backendModel')) {
        obj['backendModel'] = ApiClient.convertToType(data['backendModel'], 'String');
      }
      if (data.hasOwnProperty('sourceModel')) {
        obj['sourceModel'] = ApiClient.convertToType(data['sourceModel'], 'String');
      }
      if (data.hasOwnProperty('defaultValue')) {
        obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
      }
      if (data.hasOwnProperty('isUnique')) {
        obj['isUnique'] = ApiClient.convertToType(data['isUnique'], 'String');
      }
      if (data.hasOwnProperty('frontendClass')) {
        obj['frontendClass'] = ApiClient.convertToType(data['frontendClass'], 'String');
      }
      if (data.hasOwnProperty('validationRules')) {
        obj['validationRules'] = ApiClient.convertToType(data['validationRules'], [EavDataAttributeValidationRuleInterface]);
      }
      if (data.hasOwnProperty('customAttributes')) {
        obj['customAttributes'] = ApiClient.convertToType(data['customAttributes'], [FrameworkAttributeInterface]);
      }
    }
    return obj;
  }

  /**
   * WYSIWYG flag
   * @member {Boolean} isWysiwygEnabled
   */
  exports.prototype['isWysiwygEnabled'] = undefined;
  /**
   * The HTML tags are allowed on the frontend
   * @member {Boolean} isHtmlAllowedOnFront
   */
  exports.prototype['isHtmlAllowedOnFront'] = undefined;
  /**
   * It is used for sorting in product listing
   * @member {Boolean} usedForSortBy
   */
  exports.prototype['usedForSortBy'] = undefined;
  /**
   * It used in layered navigation
   * @member {Boolean} isFilterable
   */
  exports.prototype['isFilterable'] = undefined;
  /**
   * It is used in search results layered navigation
   * @member {Boolean} isFilterableInSearch
   */
  exports.prototype['isFilterableInSearch'] = undefined;
  /**
   * It is used in catalog product grid
   * @member {Boolean} isUsedInGrid
   */
  exports.prototype['isUsedInGrid'] = undefined;
  /**
   * It is visible in catalog product grid
   * @member {Boolean} isVisibleInGrid
   */
  exports.prototype['isVisibleInGrid'] = undefined;
  /**
   * It is filterable in catalog product grid
   * @member {Boolean} isFilterableInGrid
   */
  exports.prototype['isFilterableInGrid'] = undefined;
  /**
   * Position
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * Apply to value for the element
   * @member {Array.<String>} applyTo
   */
  exports.prototype['applyTo'] = undefined;
  /**
   * The attribute can be used in Quick Search
   * @member {String} isSearchable
   */
  exports.prototype['isSearchable'] = undefined;
  /**
   * The attribute can be used in Advanced Search
   * @member {String} isVisibleInAdvancedSearch
   */
  exports.prototype['isVisibleInAdvancedSearch'] = undefined;
  /**
   * The attribute can be compared on the frontend
   * @member {String} isComparable
   */
  exports.prototype['isComparable'] = undefined;
  /**
   * The attribute can be used for promo rules
   * @member {String} isUsedForPromoRules
   */
  exports.prototype['isUsedForPromoRules'] = undefined;
  /**
   * The attribute is visible on the frontend
   * @member {String} isVisibleOnFront
   */
  exports.prototype['isVisibleOnFront'] = undefined;
  /**
   * The attribute can be used in product listing
   * @member {String} usedInProductListing
   */
  exports.prototype['usedInProductListing'] = undefined;
  /**
   * Attribute is visible on frontend.
   * @member {Boolean} isVisible
   */
  exports.prototype['isVisible'] = undefined;
  /**
   * Attribute scope
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * @member {module:model/CatalogDataEavAttributeExtensionInterface} extensionAttributes
   */
  exports.prototype['extensionAttributes'] = undefined;
  /**
   * Id of the attribute.
   * @member {Number} attributeId
   */
  exports.prototype['attributeId'] = undefined;
  /**
   * Code of the attribute.
   * @member {String} attributeCode
   */
  exports.prototype['attributeCode'] = undefined;
  /**
   * HTML for input element.
   * @member {String} frontendInput
   */
  exports.prototype['frontendInput'] = undefined;
  /**
   * Entity type id
   * @member {String} entityTypeId
   */
  exports.prototype['entityTypeId'] = undefined;
  /**
   * Attribute is required.
   * @member {Boolean} isRequired
   */
  exports.prototype['isRequired'] = undefined;
  /**
   * Options of the attribute (key => value pairs for select)
   * @member {Array.<module:model/EavDataAttributeOptionInterface>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * Current attribute has been defined by a user.
   * @member {Boolean} isUserDefined
   */
  exports.prototype['isUserDefined'] = undefined;
  /**
   * Frontend label for default store
   * @member {String} defaultFrontendLabel
   */
  exports.prototype['defaultFrontendLabel'] = undefined;
  /**
   * Frontend label for each store
   * @member {Array.<module:model/EavDataAttributeFrontendLabelInterface>} frontendLabels
   */
  exports.prototype['frontendLabels'] = undefined;
  /**
   * The note attribute for the element.
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * Backend type.
   * @member {String} backendType
   */
  exports.prototype['backendType'] = undefined;
  /**
   * Backend model
   * @member {String} backendModel
   */
  exports.prototype['backendModel'] = undefined;
  /**
   * Source model
   * @member {String} sourceModel
   */
  exports.prototype['sourceModel'] = undefined;
  /**
   * Default value for the element.
   * @member {String} defaultValue
   */
  exports.prototype['defaultValue'] = undefined;
  /**
   * This is a unique attribute
   * @member {String} isUnique
   */
  exports.prototype['isUnique'] = undefined;
  /**
   * Frontend class of attribute
   * @member {String} frontendClass
   */
  exports.prototype['frontendClass'] = undefined;
  /**
   * Validation rules.
   * @member {Array.<module:model/EavDataAttributeValidationRuleInterface>} validationRules
   */
  exports.prototype['validationRules'] = undefined;
  /**
   * Custom attributes values.
   * @member {Array.<module:model/FrameworkAttributeInterface>} customAttributes
   */
  exports.prototype['customAttributes'] = undefined;



  return exports;
}));


