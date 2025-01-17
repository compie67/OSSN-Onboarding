<?php
/**
 * AJAX handler for serving video content
 *
 * @package Onboarding Component
 */

header('Content-Type: text/html');

// Get OSSN site URL
$site_url = ossn_site_url();

// Echo the video HTML
echo '<video muted autoplay loop>
        <source src="' . $site_url . 'components/Onboarding/videos/sidebar_video.mp4" type="video/mp4">
      </video>';
exit;
