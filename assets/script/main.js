var category = false;
var menuCategory = false;
var search = false;
var url_atual = window.location.href;
var versao;
var release = 1.0;

var category = JSON.parse(localStorage.getItem('Base'));
if (!category) {
  $('#loading').show();
}
jQuery(document).ready(function () {
  versao = localStorage.getItem('Release')
  if (!versao || versao != release) {
    localStorage.removeItem('Base', release)
    localStorage.removeItem('Release', release)
    //Cria versão 
    localStorage.setItem('Release', release)
  }
  if (!JSON.parse(localStorage.getItem('Base'))) {
    $.get('host.php', async function (data) {
      localStorage.setItem('Base', data)
      category = JSON.parse(localStorage.getItem('Base'))
      if (category) {
        window.location.href = url_atual;
      }
    });
  }
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
      var chaveValor = parte.split('=');
      var chave = chaveValor[0];
      var valor = chaveValor[1];
      data[chave] = valor;
    });
    let lista = `
          <li><a href="?page=home">Home</a></li>
          <li><a href="?page=base">Base de conhecimento</a></li>
          <li><a href="?page=base&categories=`+ data.categories + `">` + data.categories.replace(/-/g, ' ') + `</a></li>
          <li>`+ data.articles.replace(/-/g, ' ') + `</li>`

    $('#my-list').html(lista);

        });

function pesquisa(result) {
  var elem = $('#elbase')
  navegation('pagina', 'base')
  $(".dx-links > li").removeClass("active")
  $(elem).addClass('active');
  $("#conteudo").load("pages/base.html");
  $("#search").val("");
  updateResult("");
  search = result;
}
const updateResult = query => {
  let resultList = document.querySelector(".result");
  resultList.innerHTML = "";
  var lista = [];
  for (i in category) {
    if (category[i] && query.length >= 2) {
      category[i].filter(item => {
        query.split(' ').map(word => {
          if (word.length > 1) {
            if (item.titulo.toLowerCase().indexOf(word.toLowerCase()) != -1) {
              lista.push(item)
            }
          }
        })
      })
    }
  }
  const novoArray = [...new Set(lista)];
  if (novoArray) {
    for (i in novoArray) {
      var link = "?page=base&categories=" + novoArray[i].categ + "&articles=" + novoArray[i].titulo.replace(".html", "")
      var title = novoArray[i].titulo.replace(".html", "")
      resultList.innerHTML += `
            <a href="`+ link + `">
          <li class="list-group-item">`
        + title.replace(/-/g, ' ') +
        `<small> - ${novoArray[i].categ.replace(/-/g, ' ')}</small>
          </li>
            </a>`;
    }
  }
}
updateResult("");

$('#search').focus(function () {
  $('.lista-open').css('display', 'block');
});

$('#search').focusout(function () {
  setTimeout(() => {
    $('.lista-open').css('display', 'none');
  }, 500);
});
