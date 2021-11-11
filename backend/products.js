let total = 0.0;

function adiciona(id) {
  calcula(id, "adicao");
}

function remove(id) {
  calcula(id, "subtracao");
}

function btnAddCart() {
  setDomQytCart(qtd);
  setDomProduct();
  document.querySelector(".empty-cart").classList.add("close-empyt");
}

function calcula(id, operacao) {
  nomeid = "nome" + id;
  precoid = "preco" + id;
  qtdid = "qtd" + id;

  nome = document.getElementById(nomeid).innerHTML;

  preco = document.getElementById(precoid).innerHTML;
  preco = textForFloat(preco);

  qtd = document.getElementById(qtdid).innerHTML;
  qtd = parseInt(qtd);

  if (operacao == "adicao") {
    total = total + preco;
    qtd = qtd + 1;
    var s = document.getElementById("exibe").innerHTML;

    if (s.indexOf(nome) == -1) {
      document.getElementById("exibe").innerHTML +=
        '<span id="' +
        nome +
        '">' +
        "<span class='" +
        nome +
        "'>" +
        qtd +
        "</span><a onclick=\"remove('" +
        nome +
        "')\"></a></span>";
    } else {
      document.getElementsByClassName(nome)[0].innerHTML = qtd;
    }
  } else {
    var s = document.getElementById("exibe").innerHTML;

    if (s.indexOf(nome) == -1) {
      s +=
        '<span id="' +
        nome +
        '">' +
        nome +
        "(<a class='" +
        nome +
        "'>" +
        qtd -
        1 +
        "</a>)<a onclick=\"remove('" +
        nome +
        "')\">X</a></span>";
    } else {
      if (qtd > 1) {
        document.getElementsByClassName(nome)[0].innerHTML = qtd - 1;
      } else if (qtd < 1) {
        remove().preventDefault();
      } else {
        document.getElementById("exibe").innerHTML = s.replace(
          '<span id="' +
            nome +
            '">' +
            nome +
            '(<a class="' +
            nome +
            '">' +
            qtd +
            "</a>)<a onclick=\"remove('" +
            nome +
            "')\">X</a></span>",
          " "
        );
      }
    }
    total = total - preco;
    qtd = qtd - 1;
  }

  document.getElementById(qtdid).innerHTML = qtd;
  document.getElementById("total").innerHTML = floatForText(total);
}

function textForFloat(texto) {
  numero = parseFloat(texto);

  return numero;
}

function floatForText(numero) {
  numero = numero.toFixed(2);
  texto = numero.toString();
  texto = texto.replace(".", ",");

  return texto;
}
