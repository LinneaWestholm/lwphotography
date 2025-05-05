
buildMenu()
buildCategoryMenu();

// building main-menu navigation
function buildMenu(){

  document.querySelectorAll('.menu-link').forEach(link =>{
    link.addEventListener('click', function(e){
      e.preventDefault();

      const linkId = this.getAttribute('href').substring(1);

      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });

      const sectionId = document.getElementById(linkId);

      if(linkId != null){
        sectionId.classList.add('active');
      }

    });
  });
}

// building category-menu navigation, for the gallery
function buildCategoryMenu(){

  document.querySelectorAll('.category-link').forEach(link =>{
    link.addEventListener('click', function(e){
      e.preventDefault();

      const linkId = this.getAttribute('href').substring(1);

      document.querySelectorAll('.category').forEach(category => {
        category.classList.remove('active');
      });

      const categoryId = document.getElementById(linkId);

      if(linkId != null){
        categoryId.classList.add('active');
      }

    });
  });
}








