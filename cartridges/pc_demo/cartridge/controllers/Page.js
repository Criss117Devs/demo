'use strict';

/**
 * @namespace Page
 */

var server = require('server');
server.extend(module.superModule);

/**
 * Page-IncludeHeaderMenu : This is a local include that includes the navigation in the header
 * @name Base/Page-IncludeHeaderMenu
 * @function
 * @memberof Page
 * @param {middleware} - server.middleware.include
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
 server.get(
    'IncludeHeaderMenuDos',
    function (req, res, next) {
        var catalogMgr = require('dw/catalog/CatalogMgr');
        var Categories = require('*/cartridge/models/categories');
        var siteRootCategory = catalogMgr.getSiteCatalog().getRoot();

        var topLevelCategories = siteRootCategory.hasOnlineSubCategories() ?
            siteRootCategory.getOnlineSubCategories() : null;

        res.render('/components/header/menuDos', new Categories(topLevelCategories));
        next();
    }
);
module.exports = server.exports();