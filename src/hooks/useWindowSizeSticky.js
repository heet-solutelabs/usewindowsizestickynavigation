import React from "react";

function useWindowSizeSticky(sectionRef, headerRef, thresholdValue) {
  const stickyNav = (entries) => {
    const [sticky] = entries;
    if (sticky.isIntersecting) {
      headerRef.current.classList.add(".sticky");
    } else {
      headerRef.current.classList.remove(".sticky");
    }
  };
  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: thresholdValue,
  });
  React.useEffect(() => {
    headerObserver.observe(sectionRef.current);
  }, []);
}

export default useWindowSizeSticky;
