onload = () => {
  const c = setTimeout(() => {
      console.log("loaded");
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };