// JavaScript source code
var Itanio = Itanio || {};

Itanio.LeadsProxy = (function ($) {
    var $public = {}, $private = {};

    $private.DESENVOLVIMENTO = "desenvolvimento";

    $private.HOMOLOGACAO = "homologacao";

    $private.PRODUCAO = "producao";
    
    $(function () {
        $private.Ambiente = $('script[data-ambiente][data-nome="leads.js"]').data("ambiente");
        
        switch ($private.Ambiente)
        {
            case $private.DESENVOLVIMENTO:
                $private.API_URL = "http://localhost:3000/api";
                break;
            case $private.HOMOLOGACAO:
                $private.API_URL = "http://it_server:8081/api";
                break;
            case $private.PRODUCAO:
                $private.API_URL = "http://leads.itanio.com.br/api";
                break;
        }
    });

    $public.criarVisitante = function (visitante) {
        return $.ajax({
            dataType: "json",
            type: "POST",
            url: $private.API_URL + "/Visitante",
            crossDomain: true,
            data: visitante
        });
    };

    $public.criarContato = function (contato) {
        return $.ajax({
            dataType: "json",
            type: "POST",
            url: $private.API_URL + "/Visitante/CriarContato",
            crossDomain: true,
            data: contato
        });
    };


    $public.logarAcesso = function (acesso) {
        return $.ajax({
            dataType: "json",
            type: "POST",
            url: $private.API_URL + "/Acesso",
            crossDomain: true,
            data: acesso
        });
    };

    $public.obterUrlArquivo = function (idArquivo) {
        return $.ajax({
            dataType: "json",
            type: "GET",
            url: $private.API_URL + "/Arquivo/" + idArquivo,
            crossDomain: true,
        });
    }

    $public.obterDescricaoArquivo = function (idArquivo) {
        return $.ajax({
            dataType: "json",
            type: "GET",
            url: $private.API_URL + "/Arquivo/GetDescricao?Id=" + idArquivo,
            crossDomain: true,
        });
    }

    $public.obterVisitante = function (idVisitante) {
        return $.ajax({
            dataType: "json",
            type: "GET",
            url: $private.API_URL + "/Visitante/" + idVisitante,
            crossDomain: true,
        });
    }

    return $public;
})(jQuery);

Itanio.Leads = (function (proxy) {
    var $public = {}, $private = {};

    $private.DESENVOLVIMENTO = "desenvolvimento";

    $private.HOMOLOGACAO = "homologacao";

    $private.PRODUCAO = "producao";

    $private.addScript = function(src, callback) {
        var s = document.createElement('script');
        s.setAttribute('src', src);
        s.onload = callback;
        document.body.appendChild(s);
    };
    
    $private.CHAVE_ID_USUARIO = "Itanio.LogAcesso.IdUsuario";

    $private.criarCookie = function (nome, valor, dias) {
        var expiraEm;
        if (dias) {
            var data = new Date();
            data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
            expiraEm = "; expires=" + data.toGMTString();
        }
        else {
            expiraEm = "";
        }
        document.cookie = nome + "=" + valor + expiraEm + "; path=/";
    };

    $private.obterCookie = function (nomeCookie) {
        if (document.cookie.length > 0) {
            var indiceCookieInicio = document.cookie.indexOf(nomeCookie + "=");
            if (indiceCookieInicio != -1) {
                indiceCookieInicio = indiceCookieInicio + nomeCookie.length + 1;
                var indiceCookieFim = document.cookie.indexOf(";", indiceCookieInicio);
                if (indiceCookieFim == -1) {
                    indiceCookieFim = document.cookie.length;
                }
                return unescape(document.cookie.substring(indiceCookieInicio, indiceCookieFim));
            }
        }
        return "";
    };

    $private.gerarSecaoGUID = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    };

    $private.gerarGUID = function () {

        return $private.gerarSecaoGUID() + $private.gerarSecaoGUID() + '-' + $private.gerarSecaoGUID() + '-' + $private.gerarSecaoGUID() + '-' +
          $private.gerarSecaoGUID() + '-' + $private.gerarSecaoGUID() + $private.gerarSecaoGUID() + $private.gerarSecaoGUID();
    };

    $private.obterIdUsuarioCorrente = function () {
        var guid = $private.obterCookie($private.CHAVE_ID_USUARIO);
        if (guid === "") {
            guid = $private.gerarGUID();
            $private.criarCookie($private.CHAVE_ID_USUARIO, guid, 365*10);
        }
        return guid;
    };

    $private.logarErro = function (xhr, textStatus, errorThrown) {
        console.log("Erro no leads.js: " + errorThrown);
        
    };

    $private.obterTipoNavegador = function () {
        var tipo = "Outro";

        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        if (isOpera)
            tipo = "Opera";
        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox)
            tipo = "Firefox";

        // At least Safari 3+: "[object HTMLElementConstructor]"
        var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        if (isSafari)
            tipo = "Safari";
        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (isIE)
            tipo = "InternetExplorer";
        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        if (isEdge)
            tipo = "Edge";

        // Chrome 1+
        var isChrome = !!window.chrome && !!window.chrome.webstore;
        if (isChrome)
            tipo = "Chrome";
        
        // Blink engine detection
        var isBlink = (isChrome || isOpera) && !!window.CSS;
        if (isBlink)
            tipo = "Blink";

        return tipo;
    };

    $private.logarDownload = function () {
        $private.obterEmail(function(visitante){
            var acessoViewModel = {
                url: window.location.href,
                guid: $private.obterIdUsuarioCorrente(),
                email: visitante.Email,
                nome: $("#" + $privateIdControleNome).val(),
                tipo: $private.obterTipoNavegador(),
                nomeArquivo : $(this).attr("href")
            };
            proxy.logarAcesso(acesso).fail($private.logarErro);
        });
    };
    
    $private.obterEmail = function (successCallback, notFoundCallback) {

        var email = $("#" + $private.IdControleEmail).val();
        if (!email) {
            proxy.obterVisitante($private.obterIdUsuarioCorrente()).done(successCallback).fail(notFoundCallback);
        }
        else {
            var visitante = {};
            visitante.Email = email;
            successCallback(visitante);
        }
    };

    $private.verificarAlteracaoGuid = function (data, textStatus, jqXHR) {
        if (data.Guid != $private.obterCookie($private.CHAVE_ID_USUARIO)) {
            $private.criarCookie($private.CHAVE_ID_USUARIO, data.Guid, 365 * 10);
        }

        $private.baixarArquivo();
    };

    $private.baixarArquivo = function () {
        if ($private.urlRedirect)
        {
            var temp = $private.urlRedirect;
            $private.urlRedirect = undefined;
            window.location.href = temp;
        }

       
    };

    $private.criarVisitante = function () {
            var visitanteViewModel = {
                email:$("#" + $private.IdControleEmail).val(),
                nome: $("#" + $private.IdControleNome).val(),
                guid: $private.obterIdUsuarioCorrente(),
                idProjeto: $private.IdProjeto,
                idArquivo: $private.IdArquivo
            };

            if ($private.validarFormulario(visitanteViewModel)) {
                proxy.criarVisitante(visitanteViewModel)
                    .fail($private.logarErro)
                    .done($private.redirecionarPaginaEmailEnviado);
            }
    };



    $private.validateEmail = function(email) {
        re = /^[\w-]+(\.[\w-]+)*@(([A-Za-z\d][A-Za-z\d-]{0,61}[A-Za-z\d]\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/
        return re.test(email);
    }

    $private.validarFormulario = function (visitanteViewModel) {
      
        var erro = 0;
        var msg = "";

        if ($private.validateEmail($("#" + $private.IdControleEmail).val()) == 0) {
            msg += "<li style='margin-bottom: 10px;font-size: 16px;'>E-mail Inválido</li>";
            erro = 1;
        }

        if (visitanteViewModel.nome.replace(/ /g, "").length == 0) {
            msg += "<li style='margin-bottom: 10px;font-size: 16px;'>Nome Inválido</li>";
            erro = 1;
        }

        if (erro == 1) {
            $private.exibirMensagem("<ul>" + msg + "</ul>", "Atenção");
            return false;
        }

        return true;
    }

    $private.redirecionarPaginaEmailEnviado = function (data, textStatus, jqXHR) {
        if (data.Guid != $private.obterCookie($private.CHAVE_ID_USUARIO)) {
            $private.criarCookie($private.CHAVE_ID_USUARIO, data.Guid, 365 * 10);
        }
        var destino = $private.updateQueryString($private.EmailEnviadoUrl, "IdArquivo", $private.IdArquivo);
        window.location.href = destino;
    };

    $private.gerarLink = function (url) {
        $private.cssClass = $private.cssClass || "";
        $private.texto = $private.texto || "Baixar";
        var currentScript = $("script:contains('Itanio.Leads.exibirBotaoDownload(')");
        var link = $("<a href='" + url + "' class='download-conteudo " + $private.cssClass + "'>" + $private.texto + "</a>");
        currentScript.after(link);
    };

    $private.getQueryString = function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    
    $private.updateQueryString = function (uri, key, value) {
        var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
        separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    };

    $public.rastrear = function (e) {
        var url = window.location.href;
        if ($(this).hasClass("download-conteudo")) {
            e.preventDefault();
            url = $(this).attr("href");
            $private.urlRedirect = url;
        }

        $private.obterEmail(function(visitante){
            var acessoViewModel = {
                url: url,
                guid: $private.obterIdUsuarioCorrente(),
                email: visitante.Email,
                tipoNavegador: $private.obterTipoNavegador(),
                userAgentInfo: navigator.userAgent,
                idProjeto: $private.IdProjeto,
                idArquivo: $private.IdArquivo
            };

            proxy.logarAcesso(acessoViewModel)
                .done($private.verificarAlteracaoGuid)
                .fail($private.logarErro);
                 
        }, function () {
            var acessoViewModel = {
                url: url,
                guid: $private.obterIdUsuarioCorrente(),
                tipoNavegador: $private.obterTipoNavegador(),
                userAgentInfo: navigator.userAgent,
                idProjeto: $private.IdProjeto,
                idArquivo: $private.IdArquivo
            };

            proxy.logarAcesso(acessoViewModel)
                .done($private.baixarArquivo)
                .fail($private.logarErro);
        });
    };

    $public.exibirBotaoDownload = function (cssClass, texto) {
        $private.cssClass = cssClass;
        $private.texto = texto;
        $private.gerarLink($private.CM_URL + $private.IdArquivo + "?guid=" + $private.obterIdUsuarioCorrente())
    };

    $(function () {
        $private.IdControleEmail = $('script[data-nome="leads.js"]').data("controle-email");
        $private.IdControleEmailContato = $('script[data-nome="leads.js"]').data("controle-email-contato");
        $private.IdControleCriarContato = $('script[data-nome="leads.js"]').data("controle-criar-contato");
        $private.IdControleNome = $('script[data-nome="leads.js"]').data("controle-nome");
        $private.IdControleEnvio = $('script[data-nome="leads.js"]').data("controle-envio");
        $private.EmailEnviadoUrl = $('script[data-nome="leads.js"]').data("email-enviado-url") || "EmailEnviado.html";
        $private.LinkDownload = $('script[data-nome="leads.js"]').data("controle-download");
        $private.IdProjeto = $('script[data-nome="leads.js"]').data("projeto");
        $private.Ambiente = $('script[data-nome="leads.js"]').data("ambiente");

        switch ($private.Ambiente) {
            case $private.DESENVOLVIMENTO:
                $private.CM_IMG_LOADING = "http://localhost:3000/Content/images/loading.gif";
                $private.CM_URL = "http://localhost:3000/Arquivo/Index/";
                break;
            case $private.HOMOLOGACAO:
                $private.CM_IMG_LOADING = "http://it_server:8081/Content/images/loading.gif";
                $private.CM_URL = "http://it_server:8081/Arquivo/Index/";
                break;
            case $private.PRODUCAO:
                $private.CM_URL = "http://leads.itanio.com.br/Arquivo/Index/";
                $private.CM_IMG_LOADING = "http://leads.itanio.com.br//Content/images/loading.gif";
                break;
        }

        $("body").append($("<div id='loading' style='display:none;'><img src='" + $private.CM_IMG_LOADING + "' width='45px' height='45px' /></div>"));
        $("body").append($("<div id='leadsModalWindow' class='modal fade bs-message-modal-md' tabindex='-1' role='dialog' aria-labelledby='leadsModalTitle' aria-hidden='true'><div class='modal-dialog modal-md'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title' style='font-size:20px'>&nbsp;</h4></div><div id='leadsModalBody' class='modal-body' style='font-size: 18px !important;'></div></div></div></div>"));

        $private.addScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min.js", function () {
            $.blockUI.defaults.message = $('#loading');
            $.blockUI.defaults.css.border = "0px solid #fff";
            $.blockUI.defaults.css.backgroundColor = 'transparent';
            $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
        });
        $private.addScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js");

        $private.exibirMensagem = function (mensagem, titulo) {
            $("#leadsModalWindow .modal-title").text(titulo);
            $("#leadsModalBody").html(mensagem);
            $('#leadsModalWindow').modal();
        };
        
        $private.criarContato = function(e) {
            e.preventDefault();
            var contato = {
                email : $("#" + $private.IdControleEmailContato).val(),
                url: window.location.href,
                guid: $private.obterIdUsuarioCorrente(),
                tipoNavegador: $private.obterTipoNavegador(),
                userAgentInfo: navigator.userAgent,
                idProjeto: $private.IdProjeto
            };

            if ($private.validarFormularioContato(contato)) {
                proxy.criarContato(contato).done($private.contatoCriado).fail($private.emailJaEnviado);
            }
            
        };

        $private.emailJaEnviado = function() {
            $private.exibirMensagem("<p>Seu e-mail já está inscrito", "Atenção");
        }

        $private.validarFormularioContato = function (contato) {

            var erro = 0;
            var msg = "";

            if ($private.validateEmail(contato.email) == 0) {
                msg += "<li style='margin-bottom: 10px;font-size: 16px;'>E-mail Inválido</li>";
                erro = 1;
            }
 

            if (erro == 1) {
                $private.exibirMensagem("<ul>" + msg + "</ul>", "Atenção");
                return false;
            }

            return true;
        }

        $private.contatoCriado = function(data) {
           $("body").trigger("leads.contatoCriado");
        };

        $private.IdArquivo = $private.getQueryString("IdArquivo");
        proxy.obterDescricaoArquivo($private.IdArquivo).done(function (data) {
            $(".leads-descricao-arquivo").html(data);
        });


        if (!$private.IdControleEmail)
            $private.IdControleEmail = "email";
        if (!$private.IdControleNome)
            $private.IdControleNome = "nome";
        if (!$private.LinkDownload)
            $private.LinkDownload = "download";
        if (!$private.IdControleEnvio)
            $private.IdControleEnvio = "enviar";
        
        $("#" + $private.IdControleEnvio).on("click", $private.criarVisitante);
        $("#" + $private.LinkDownload).on("click", $private.logarDownload);



        if ($private.IdControleEmailContato && $private.IdControleCriarContato)
        {
            $("#" + $private.IdControleCriarContato).on("click", $private.criarContato);
        }

        $(document).on("click", ".download-conteudo", $public.rastrear);
    });

    return $public;

})(Itanio.LeadsProxy);

