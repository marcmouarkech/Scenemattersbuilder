const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-links">
        <a href="mailto:contact@scenematters.com">Email</a>
        <a href="https://www.instagram.com/scene.matters/" target="_blank">Instagram</a>
        <div class="newsletter-wrapper">
          <button id="newsletter-toggle">Newsletter</button>
          <form id="newsletter-form" class="newsletter-form">
            <input type="email" placeholder="Email address" required>
            <button type="submit">Subscribe</button>
          </form>
          <span class="newsletter-msg">Subscribed.</span>
        </div>
      </div>
      <div class="footer-copy">© 2026 Scene Matters</div>
    </div>
  </footer>
`;

const footerMount = document.getElementById('footer-mount');

if (footerMount) {
  footerMount.innerHTML = footerHTML;

  const newsToggle = document.getElementById('newsletter-toggle');
  const newsForm = document.getElementById('newsletter-form');
  const newsWrapper = document.querySelector('.newsletter-wrapper');
  const newsInput = newsForm.querySelector('input');
  
  if (newsToggle && newsForm && newsWrapper) {
    // Expand the input field
    newsToggle.addEventListener('click', () => {
      newsWrapper.classList.add('active');
      setTimeout(() => newsInput.focus(), 100);
    });

    // Handle submit, show message, and roll back
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevents page reload
      
      // Add your backend endpoint logic here in the future
      
      newsWrapper.classList.remove('active');
      newsWrapper.classList.add('success');
      
      // Roll back to "Newsletter" after 3 seconds
      setTimeout(() => {
        newsWrapper.classList.remove('success');
        newsInput.value = '';
      }, 3000);
    });
  }
}