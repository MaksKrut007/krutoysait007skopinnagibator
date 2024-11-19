const buttons = document. querySelectorAll(".btn-menu");

buttons.forEach((btn) =>
    btn.addEventListener("click",function (e) {
        const anchorTargetID = btn.getAttribute("href").substring(1);
        const $anchorTarget = document.getElementById(anchorTargetID);

        if (!$anchorTarget) return;
        e.preventDefault();
        $anchorTarget.scrollIntoView({behavior: "smooth", block: "start"})
        burgerClose();
    })
);