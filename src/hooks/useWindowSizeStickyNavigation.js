import React from "react";

function useWindowSizeStickyNavigation(sectionRef, headerRef, thresholdValue) {
  const stickyNav = (entries) => {
    const [sticky] = entries;
    if (sticky.isIntersecting) {
      headerRef.current.classList.add(".sticky");
    } else {
      headerRef.current.classList.remove(".sticky");
    }
  };
  const sectionObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: thresholdValue,
  });
  React.useEffect(() => {
    sectionObserver.observe(sectionRef.current);
    return () => sectionObserver.unobserve(sectionRef.current);
  }, []);
}

export default useWindowSizeStickyNavigation;
