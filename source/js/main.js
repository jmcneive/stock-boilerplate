
// Including JS files using CodeKit
// --------------------------------

// Include JQuery
// @codekit-prepend "vendor/jquery-1.12.1.min.js"

// Include JQuery Dependant Files
// @codekit-prepend "vendor/jquery.exists.js"




$(document).ready(function() {
    
    /**
     * Vars
     */
    
    var clickEventType = (document.ontouchstart !== null) ? 'click' : 'touchstart';
    
    var $header                 = $('.js-header');
    var $menuButton             = $('.js-menu-button');
    var $primaryNavBtns         = $header.find('nav.primary a');
    
    var $modal                  = $('.js-modal')
    var $modalLink              = $('.js-modal-link');
    var $modalClose             = $modal.find('.js-modal-close');
    
    
    
    /**
     * Events
     */
     
    $menuButton.on(clickEventType, onMenuClick);
    $modalLink.on(clickEventType, onModalLinkClick);
    $modalClose.on(clickEventType, onModalCloseClick);
    
    
    
    /**
     * Global Functions
     */
    
    /** Menu */
    
    function onMenuClick(e)
    {
        e.preventDefault();
        $header.toggleClass('open');
    }
    
    /** Modal */
    
    function onModalLinkClick(e)
    {
        e.preventDefault();
        openModal();
    }
    
    function onModalCloseClick(e)
    {
        e.preventDefault();
        closeModal();
    }
    
    function openModal()
    {
        $modal.addClass('modal-open');
    }
    
    function closeModal()
    {
        $modal.removeClass('modal-open');
    }
    
    
    
});