const { Router } = require('express');

//Controllers
const themeController = require('./controllers/themeController');

const router = Router();


/**
 * Returns all themes from the database
 * @route GET /themes
 * @group Themes
 * @returns {Array<Theme>} 200 - An array of themes
 */
router.get('/themes', themeController.getAllThemes);

/**
 * Returns a theme from the database based on its id
 * @route GET /themes/{id}
 * @group Themes
 * @param {number} id.path.required - the theme id
 * @returns {<Theme>} 200 - An instance of one theme
 */
router.get('/themes/:id(\\d+)', themeController.getOneTheme);


/**
 * Adds a new theme in the database
 * @route POST /admin/themes
 * @group Themes
 * @param {string} title.path.required - the title
 * @param {string} description - the description
 * @returns {<New Theme>} 200 - An instance of new theme
 */
router.post('/admin/themes', themeController.addNewTheme);

/**
 * Edits a specific theme in the database
 * @route POST /admin/themes/{themeId}
 * @group Themes
 * @param {number} themeId.path.required - the theme id
 * @param {string} title - the title
 * @param {string} description- the description
 * @returns {<Theme>} 200 - thee updated instance of the theme
 */
router.post('/admin/themes/:themeId(\\d+)', themeController.changeTheme);

/**
 * Deletes a specific theme in the database
 * @route DELETE /admin/themes/{themeId}
 * @group Themes
 * @param {number} themeId.path.required - the theme id
 * @returns {<Theme>} 200 - Removal confirmation message
 */
router.delete('/admin/themes/:themeId(\\d+)', themeController.deleteTheme);


module.exports = router;
