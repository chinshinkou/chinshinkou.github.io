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
  const showEmailCopiedToast = function () {
    const oldToast = document.getElementById("email-copied-toast");
    if (oldToast) {
      oldToast.remove();
    }

    const toast = document.createElement("div");
    toast.id = "email-copied-toast";
    toast.textContent = "E-mail Copied";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.style.position = "fixed";
    toast.style.left = "50%";
    toast.style.top = "50%";
    toast.style.transform = "translate(-50%, -50%)";
    toast.style.background = "rgba(33, 37, 41, 0.95)";
    toast.style.color = "#fff";
    toast.style.borderRadius = "0.35rem";
    toast.style.padding = "0.35rem 0.6rem";
    toast.style.fontSize = "0.85rem";
    toast.style.fontWeight = "500";
    toast.style.lineHeight = "1.2";
    toast.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.25)";
    toast.style.zIndex = "3000";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.12s ease";
    toast.style.pointerEvents = "none";
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.opacity = "1";
    });

    if (emailCopiedToastTimer) {
      clearTimeout(emailCopiedToastTimer);
    }
    emailCopiedToastTimer = setTimeout(function () {
      toast.style.opacity = "0";
      setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 140);
    }, 1000);
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
