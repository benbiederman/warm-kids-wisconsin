export function buildFooter() {
    const footer = document.querySelector("footer");
    const socialLinks = [
        {
            name: "TikTok",
            href: "https://www.tiktok.com/@warmkidswisconsin",
            src: "/assets/icons/tiktok.svg",
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61551635249250",
            src: "/assets/icons/facebook.svg",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/warmkidswisconsin/",
            src: "/assets/icons/instagram.svg",
        },
    ];
    const navigationLinks = [
        {
            label: "Sitemap",
            url: "/sitemap.xml",
        },
        {
            label: "Accessibility",
            url: "/accessibility.html",
        },
    ];
    if (footer) {
        footer.textContent = "";
        const socialContainer = document.createElement("div");
        // Social media icons
        socialContainer.classList.add("footer-social-icons");
        socialLinks.forEach((link) => {
            const socialLink = document.createElement("a");
            (socialLink.href = link.href),
                socialLink.setAttribute("aria-label", `Warm Kids Wisconsin ${link?.name} page (Opens in new window).`);
            if (link.href.includes("http")) {
                socialLink.target = "_blank";
                socialLink.setAttribute("rel", "noopener");
            }
            const socialIcon = document.createElement("img");
            socialIcon.src = link.src;
            socialIcon.alt = "";
            socialIcon.loading = "lazy";
            socialIcon.setAttribute("width", "40");
            socialIcon.setAttribute("height", "40");
            socialLink.appendChild(socialIcon);
            socialContainer.appendChild(socialLink);
        });
        footer.appendChild(socialContainer);
        // Footer links
        const footerNav = document.createElement("nav");
        footerNav.classList.add("footer-links");
        footerNav.setAttribute("aria-label", "Footer");
        const navList = document.createElement("ul");
        navigationLinks.forEach((link) => {
            const navItem = document.createElement("li");
            const navLink = document.createElement("a");
            navLink.href = link.url;
            navLink.textContent = link.label;
            navItem.appendChild(navLink);
            navList.appendChild(navItem);
        });
        footerNav.appendChild(navList);
        footer.appendChild(footerNav);
        // Footer copyright
        const year = new Date().getFullYear();
        const footerContainer = document.createElement("div");
        footerContainer.classList.add("footer-copyright");
        const copyright = document.createElement("p");
        copyright.append(document.createTextNode(`© 2023 - ${year}. Warm Kids Wisconsin`));
        footerContainer.appendChild(copyright);
        footer.appendChild(footerContainer);
    }
}
