const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('a').forEach(link => {
    console.log(link);
    if(link.href === window.location.href) {
      console.log(link.classList)
      link.classList.add('active');
      console.log(window.location.href)
    }
});
console.log(`${activePage}`)