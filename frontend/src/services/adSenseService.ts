// This file contains the Google AdSense integration code
// Replace the placeholder values with your actual AdSense publisher ID when deploying

// Google AdSense Script
export const ADSENSE_SCRIPT = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" 
     crossorigin="anonymous"></script>
`;

// Banner Ad Unit
export const BANNER_AD = `
<!-- Spider Scholar Banner Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
`;

// Sidebar Ad Unit
export const SIDEBAR_AD = `
<!-- Spider Scholar Sidebar Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
`;

// Instructions for replacing AdSense code
export const ADSENSE_INSTRUCTIONS = `
To integrate Google AdSense with Spider Scholar:

1. Sign in to your Google AdSense account at https://www.google.com/adsense
2. Create new ad units for:
   - Banner ads (top and bottom of page)
   - Sidebar ad (rectangular)
3. Replace the placeholder values in this file:
   - Replace "ca-pub-XXXXXXXXXXXXXXXX" with your Publisher ID
   - Replace "XXXXXXXXXX" with the appropriate ad slot IDs
4. Add the ADSENSE_SCRIPT to your public/index.html file in the <head> section
5. Replace the AdPlaceholder components with actual AdSense components

Note: For testing, you can use the current placeholders. Only replace with actual
AdSense code when deploying to production.
`;

export default {
  ADSENSE_SCRIPT,
  BANNER_AD,
  SIDEBAR_AD,
  ADSENSE_INSTRUCTIONS
};
