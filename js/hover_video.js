/**
 * Onboarding Hover Video for Footer URL
 */

$(document).ready(function () {
    console.log("Hover video script initialized."); // Debug log

    // Target the footer link
    const footerLink = $('a[href="https://nlsociaal.nl/site/about"]');
    if (!footerLink.length) {
        console.error("Footer link not found."); // Debug log if the element doesn't exist
        return;
    }

    console.log("Footer link found:", footerLink); // Debug log for found element

    // Create a container for the video
    const videoContainer = $('<div>', {
        class: 'hover-video-popup',
        css: {
            display: 'none',
            position: 'absolute',
            zIndex: 999,
            width: '300px',
            border: '1px solid #ccc',
            backgroundColor: '#000',
        },
    }).appendTo('body');

    // Add hover events
    footerLink.on('mouseenter', function () {
        console.log("Mouse entered footer link."); // Debug log

        const rect = this.getBoundingClientRect();
        videoContainer.css({
            left: rect.right + 10 + 'px', // Position the video container to the right
            top: rect.top + 'px', // Align with the top of the element
            display: 'block',
        });

        // Fetch the video content via AJAX
        $.ajax({
            url: Ossn.site_url + 'action/onboarding/ajax_video',
            method: 'GET',
            success: function (data) {
                videoContainer.html(data); // Inject the video into the container
            },
            error: function () {
                videoContainer.html('<p>Error loading video.</p>'); // Handle errors
            },
        });
    });

    footerLink.on('mouseleave', function () {
        console.log("Mouse left footer link."); // Debug log
        videoContainer.hide().empty(); // Hide and clear the video container
    });
});
