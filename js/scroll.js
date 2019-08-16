// https://scotch.io/bar-talk/build-a-scroll-spy-navbar-solution-to-code-challenge-9

const handleView = item => {
    const linkEl = document.querySelector(`#link-${item}`);

    let offsetHeight = 0.999*(window.innerHeight)
    inView.offset({
      bottom:offsetHeight
    });

    inView(`#${item}`)
      .on("enter", () => linkEl.classList.add('is-active'))
      .on("exit", el  => linkEl.classList.remove('is-active'))
};

// Apply method on each DOM element
["header", "provide", "projects", "mailing", "link"].forEach(handleView);