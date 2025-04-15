
console.log("JavaScript is running...");
// Navigation Click Event Tracking with Console Logs

document.getElementById("nav-home").addEventListener("click", function() {
    gtag('event', 'nav_click', {
      event_category: 'navigation',
      event_label: 'Home'
    });
    console.log("GA4 Event Tracked: nav_click - Home");
  });
  
  document.getElementById("nav-about").addEventListener("click", function() {
    gtag('event', 'nav_click', {
      event_category: 'navigation',
      event_label: 'About'
    });
    console.log("GA4 Event Tracked: nav_click - About");
  });
  
  document.getElementById("nav-gallery").addEventListener("click", function() {
    gtag('event', 'nav_click', {
      event_category: 'navigation',
      event_label: 'Gallery'
    });
    console.log("GA4 Event Tracked: nav_click - Gallery");
  });
  
  document.getElementById("nav-contact").addEventListener("click", function() {
    gtag('event', 'nav_click', {
      event_category: 'navigation',
      event_label: 'Contact'
    });
    console.log("GA4 Event Tracked: nav_click - Contact");
  });
  