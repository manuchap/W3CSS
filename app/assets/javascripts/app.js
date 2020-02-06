// === Wagon main javascript file ===
import w3c from 'script-loader!./w3c.js';

// Tell Webpack to load the style
import '../stylesheets/app.scss';

// Import the classes required to handle sections
import SectionsManager from './sections/_manager';
import * as Sections from './sections';

document.addEventListener('DOMContentLoaded', event => {

  // Load all the sections
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('tabs', Sections.Tab);
  sectionsManager.registerSection('accordions', Sections.Accordion);
  sectionsManager.registerSection('slideshows', Sections.Slideshow);
  sectionsManager.registerSection('lists', Sections.List);
  sectionsManager.registerSection('forms', Sections.Form);
  sectionsManager.registerSection('tables', Sections.Table);
  sectionsManager.registerSection('cards', Sections.Card);
  sectionsManager.registerSection('container', Sections.Container);
  sectionsManager.registerSection('columns', Sections.Column);
  sectionsManager.registerSection('iconcards', Sections.Iconcard);
  sectionsManager.registerSection('header', Sections.Header);
  sectionsManager.registerSection('footer', Sections.Footer);
  sectionsManager.registerSection('navigation', Sections.Navigation);

  sectionsManager.start();

});
