/**
 * Onboarding Hover Video with AJAX for Menu Items
 */

$(document).ready(function () {
    console.log("Hover video script initialized."); // Debug log

    // Target the menu items (e.g., Groups menu item)
    const menuItems = $('li.menu-section-groups > a');
    if (!menuItems.length) {
        console.error("Menu items not found."); // Debug log
        return;
    }

    console.log("Menu items found:", menuItems); // Debug log for found elements

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
    menuItems.on('mouseenter', function () {
        console.log("Mouse entered menu item."); // Debug log

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

    menuItems.on('mouseleave', function () {
        console.log("Mouse left menu item."); // Debug log
        videoContainer.hide().empty(); // Hide and clear the video container
    });
});
