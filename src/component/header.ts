export function buildHeader() {
  const header = document.querySelector("header");
  const navigationLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about.html",
    },
    {
      label: "Events",
      url: "/events",
    },
  ];

  if (header) {
    // Clear header
    header.innerHTML = "";

    // Skip to Content Button
    const skipToContentLink = document.createElement("a");
    skipToContentLink.classList.add("skip-to-content-link");
    skipToContentLink.href = "#main";
    skipToContentLink.textContent = "Skip to main content";
    header?.appendChild(skipToContentLink);

    // Branding Logo
    const brandingLogoAnchor = document.createElement("a");
    brandingLogoAnchor.href = "/";
    header?.appendChild(brandingLogoAnchor);

    const brandingLogo = document.createElement("img");
    brandingLogo.src = "assets/logo.png";
    brandingLogo.alt = "Warm Kids Wisconsin logo";
    brandingLogo.width = 60;
    brandingLogo.height = 60;
    brandingLogoAnchor.appendChild(brandingLogo);

    // Hamburger button
    const hamburgerButton = document.createElement("button");
    hamburgerButton.classList.add("hamburger-button");
    hamburgerButton.setAttribute("aria-controls", "main-navigation");
    hamburgerButton.setAttribute("aria-expanded", "false");
    hamburgerButton.setAttribute("aria-label", "Open menu");
    header?.appendChild(hamburgerButton);

    // Add lines in Hamburger button
    let numOfLinesInButton = 3;
    for (let i = 1; i <= numOfLinesInButton; i++) {
      const line = document.createElement("div");
      line.classList.add(`line-${i}`);
      hamburgerButton.appendChild(line);
    }

    // Navigation
    const navigation = document.createElement("nav");
    navigation.id = "main-navigation";
    navigation.classList.add("navigation");
    header?.appendChild(navigation);

    const navList = document.createElement("ul");
    navigation.appendChild(navList);

    // Add links to navigation
    navigationLinks.forEach((link) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.label;
      listItem.appendChild(anchor);
      navList.append(listItem);
    });

    // Overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    header.appendChild(overlay);

    // Navigation functionlity
    navigationHandler();
  }
}

function navigationHandler() {
  const hamburgerButton =
    document.querySelector<HTMLElement>(".hamburger-button");
  const navigation = document.querySelector(".navigation");
  const navigationLinks = document.querySelectorAll<HTMLAnchorElement>(
    ".navigation ul li a"
  );

  // Hamburger Button
  hamburgerButton?.addEventListener("click", () => {
    if (navigation) {
      toggleNav();
    }
  });

  hamburgerButton?.addEventListener("keydown", (e) => {
    if (
      navigation?.classList.contains("navigation-active") &&
      e.key === "Escape"
    ) {
      toggleNav();
    }
  });

  if (navigationLinks && navigationLinks.length > 0) {
    navigationLinks.forEach((link) => {
      link.addEventListener("keydown", (e: KeyboardEvent) => {
        if (
          navigation?.classList.contains("navigation-active") &&
          e.key === "Escape"
        ) {
          toggleNav();
          hamburgerButton?.focus();
        }
      });
    });
  }
}

// Open/Close Mobile + Tablet Navigation
function toggleNav() {
  const hamburgerButton =
    document.querySelector<HTMLElement>(".hamburger-button")!;
  const navigation = document.querySelector(".navigation")!;
  const overlay = document.querySelector(".overlay")!;

  const isExpanded = hamburgerButton.ariaExpanded === "true";
  setHamburgerButtonAttributes(isExpanded);
  setNavLinkAttributes(isExpanded);
  hamburgerButton.classList.toggle("hamburger-button-active");
  navigation.classList.toggle("navigation-active");
  overlay.classList.toggle("overlay-active");
}

//
function setHamburgerButtonAttributes(open: boolean) {
  const hamburgerButton =
    document.querySelector<HTMLElement>(".hamburger-button")!;

  if (open === false) {
    hamburgerButton.setAttribute("aria-expanded", "true");
    hamburgerButton.setAttribute("aria-label", "Close menu");
  } else {
    hamburgerButton.setAttribute("aria-expanded", "false");
    hamburgerButton.setAttribute("aria-label", "Open menu");
  }
}

function setNavLinkAttributes(open: boolean) {
  const navigationLinks = document.querySelectorAll<HTMLAnchorElement>(
    ".navigation ul li a"
  )!;

  if (navigationLinks.length <= 0) {
    return null;
  }

  navigationLinks.forEach((link) => {
    link.tabIndex = open ? -1 : 0;
  });
}
