function generateNavIndex() {
    const navHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

    <div class="container">
        <a href="#" class="navbar-brand"> <span class="text-danger"> LUSO </span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar5"
            aria-controls="navbar5" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar5">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a href="index.html" class="nav-link"> │ INICIO │ </a>
                </li>
                <li class="nav-item">
                    <a href="pages/SobreNosotros.html" class="nav-link"> │ Sobre Nosotros │ </a>
                </li>
                </li>
                <li class="nav-item">
                    <a href="pages/Contactanos.html" class="nav-link"> │ Contactanos │ </a>
                </li>
                </li>
                <li class="nav-item">
                    <a href="pages/Licencia.html" class="nav-link"> │ Licencia │ </a>
                </li>
                </li>
                <li class="nav-item">
                    <a href="pages/Tematica.html" class="nav-link"> │ Temática │ </a>
                </li>
                <li class="nav-item">
                    <a href="pages/contador.html" class="nav-link"> │ 12/10/2023... │ </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    `;
    return navHTML;
  }

  function generateFooter() {
    const footerHTML = `<footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.tiktok.com/@tiendaluso_" target="_blank" role="button"
          ><i class="fab fa-tiktok"></i
        ></a>
  
        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/LusoTienda" target="_blank" role="button"
          ><i class="fab fa-twitter"></i
        ></a>
  
        <!-- Instagram -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/lusoficial_/?next=%2F" target="_blank" role="button"
          ><i class="fab fa-instagram"></i
        ></a>
  
        <!-- Github -->
        <a class="btn btn-outline-light btn-floating m-1" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZwZ_uO1PrcNaq0_g1S1KvDM5SEKas9BJYvYT7TIOZw&s" target="_blank" role="button"
          ><i class="fab fa-github"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright LUSO 2023
    </div>
    <!-- Copyright -->
  </footer>
    `;
    return footerHTML;
  }