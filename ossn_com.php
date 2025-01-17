<?php
/**
 * Onboarding Component
 *
 * @package Open Source Social Network
 */

define('__ONBOARDING__', ossn_route()->com . 'Onboarding/');

/**
 * Initialize Onboarding Component
 */
function onboarding_init() {
    error_log("Onboarding component initialized."); // Debug log

    // Extend the default views to include CSS and JavaScript
    ossn_extend_view('css/ossn.default', 'Onboarding/css/hover_video');
    ossn_extend_view('js/opensource.socialnetwork', 'Onboarding/js/hover_video');

    // Register the AJAX action
    ossn_register_action('onboarding/ajax_video', __ONBOARDING__ . 'actions/ajax_video.php');
}

// Register the component initialization
ossn_register_callback('ossn', 'init', 'onboarding_init');
