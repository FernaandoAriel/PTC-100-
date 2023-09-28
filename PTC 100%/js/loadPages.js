document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.getElementById('navContainer');
    const navHTML = generateNavPages();
    navContainer.innerHTML = navHTML;

    const footerContainer = document.getElementById('footerContainer');
    const footerHTML = generateFooter();
    footerContainer.innerHTML = footerHTML;

  });