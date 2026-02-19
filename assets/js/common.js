$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // social icon hover labels
  const $socialIconLinks = $(".social .contact-icons a, .navbar-brand.social a");
  $socialIconLinks.filter("[href^='mailto:']").attr({
    title: "E-mail",
    "aria-label": "E-mail",
  });
  $socialIconLinks.filter("[href*='orcid.org']").attr({
    title: "Orcid ID",
    "aria-label": "Orcid ID",
  });
  $socialIconLinks.filter("[href*='scholar.google']").attr({
    title: "Google Scholar",
    "aria-label": "Google Scholar",
  });

  let emailCopiedToastTimer = null;
  const ensureEmailCopiedToast = function () {
    let $toast = $("#email-copied-toast");
    if (!$toast.length) {
      $("body").append('<div id="email-copied-toast" role="status" aria-live="polite">E-mail Copied</div>');
      $toast = $("#email-copied-toast");
    }
    return $toast;
  };

  const showEmailCopiedToast = function () {
    const $toast = ensureEmailCopiedToast();
    $toast.addClass("show");
    if (emailCopiedToastTimer) {
      clearTimeout(emailCopiedToastTimer);
    }
    emailCopiedToastTimer = setTimeout(function () {
      $toast.removeClass("show");
    }, 1200);
  };

  // copy email address from the social icon instead of opening the mail client
  $(".social .contact-icons a[href^='mailto:']").on("click", function (event) {
    event.preventDefault();

    const href = $(this).attr("href") || "";
    const email = decodeURIComponent(href.replace(/^mailto:/i, "").split("?")[0]).trim();

    if (!email) {
      return;
    }

    const fallbackCopy = function () {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(textArea);
      return copied;
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(email)
        .then(showEmailCopiedToast)
        .catch(function () {
          if (fallbackCopy()) {
            showEmailCopiedToast();
          }
        });
    } else if (fallbackCopy()) {
      showEmailCopiedToast();
    }
  });

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove publication year headings from the TOC, keep custom section headings
    $(".publications h2").each(function () {
      const headingText = $(this).text().trim();
      if (/^\d{4}$/.test(headingText)) {
        $(this).attr("data-toc-skip", "");
      }
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
