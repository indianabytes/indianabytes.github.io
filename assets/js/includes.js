function includeHead() {
  var z, i, elmnt, file, xhttp;
  /* Percorre uma coleção de todos os elementos HTML: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*pesquisa por elementos com um determinado atributo:*/
    file = elmnt.getAttribute("gnz-include-header");
    if (file) {
      /* Faça uma solicitação HTTP usando o valor do atributo como o nome do arquivo: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "includeHead() não foi encontrado para inclusão.";}
          /* Remova o atributo e chame esta função mais uma vez: */
          elmnt.removeAttribute("gnz-include-head");
          includeHead();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Sai da função: */
      return;
    }
  }
}

function includeHeader() {
  var z, i, elmnt, file, xhttp;
  /* Percorre uma coleção de todos os elementos HTML: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*pesquisa por elementos com um determinado atributo:*/
    file = elmnt.getAttribute("gnz-include-header");
    if (file) {
      /* Faça uma solicitação HTTP usando o valor do atributo como o nome do arquivo: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "includeHeader() não foi encontrado para inclusão.";}
          /* Remova o atributo e chame esta função mais uma vez: */
          elmnt.removeAttribute("gnz-include-header");
          includeHeader();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Sai da função: */
      return;
    }
  }
}

function includeNavbarMenu() {
  var z, i, elmnt, file, xhttp;
  /* Percorre uma coleção de todos os elementos HTML: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*pesquisa por elementos com um determinado atributo:*/
    file = elmnt.getAttribute("gnz-include-navbar");
    if (file) {
      /* Faça uma solicitação HTTP usando o valor do atributo como o nome do arquivo: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "includeNavbarMenu() não foi encontrado para inclusão.";}
          /* Remova o atributo e chame esta função mais uma vez: */
          elmnt.removeAttribute("gnz-include-navbar");
          includeNavbarMenu();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Sai da função: */
      return;
    }
  }
}

function includeFooter() {
  var z, i, elmnt, file, xhttp;
  /* Percorre uma coleção de todos os elementos HTML: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*pesquisa por elementos com um determinado atributo:*/
    file = elmnt.getAttribute("gnz-include-footer");
    if (file) {
      /* Faça uma solicitação HTTP usando o valor do atributo como o nome do arquivo: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "includeFooter() não foi encontrado para inclusão.";}
          /* Remova o atributo e chame esta função mais uma vez: */
          elmnt.removeAttribute("gnz-include-footer");
          includeFooter();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Sai da função: */
      return;
    }
  }
}

function includeBreadcrumbs() {
  var z, i, elmnt, file, xhttp;
  /* Percorre uma coleção de todos os elementos HTML: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*pesquisa por elementos com um determinado atributo:*/
    file = elmnt.getAttribute("gnz-include-breadcrumbs");
    if (file) {
      /* Faça uma solicitação HTTP usando o valor do atributo como o nome do arquivo: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "includeBreadcrumbs() não foi encontrado para inclusão.";}
          /* Remova o atributo e chame esta função mais uma vez: */
          elmnt.removeAttribute("gnz-include-breadcrumbs");
          includeBreadcrumbs();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Sai da função: */
      return;
    }
  }
}

function includeCatoriesPost() {
  var z, i, elmnt, file, xhttp;
  /* Percorre uma coleção de todos os elementos HTML: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*pesquisa por elementos com um determinado atributo:*/
    file = elmnt.getAttribute("gnz-categories-post");
    if (file) {
      /* Faça uma solicitação HTTP usando o valor do atributo como o nome do arquivo: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "includeCatoriesPost() não foi encontrado para inclusão.";}
          /* Remova o atributo e chame esta função mais uma vez: */
          elmnt.removeAttribute("gnz-categories-post");
          includeCatoriesPost();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Sai da função: */
      return;
    }
  }
}

function includeBlogSidebar() {
  var z, i, elmnt, file, xhttp;
  /* Percorre uma coleção de todos os elementos HTML: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*pesquisa por elementos com um determinado atributo:*/
    file = elmnt.getAttribute("gnz-blog-sidebar");
    if (file) {
      /* Faça uma solicitação HTTP usando o valor do atributo como o nome do arquivo: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "includeBlogSidebar() não foi encontrado para inclusão.";}
          /* Remova o atributo e chame esta função mais uma vez: */
          elmnt.removeAttribute("gnz-blog-sidebar");
          includeBlogSidebar();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Sai da função: */
      return;
    }
  }
}