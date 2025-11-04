export function createProducts() {
  const allProducts = document.querySelector(".product-items");

  const items = [
    {
      name: "Amazon Essentials Snow Pants",
      src: "/assets/products/amazon-essentials-snow-pants.png",
      href: "https://www.amazon.com/dp/B085V8PXNV/?coliid=I14RUIGRAAD8X2&colid=2HUJZ3HSX3EWI&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    },
    {
      name: "Arctix Snow Pants",
      src: "/assets/products/arctix-snow-pants.png",
      href: "https://www.amazon.com/dp/B00KPLFXRY/?coliid=I33O7RI7P1H7OB&colid=2HUJZ3HSX3EWI&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    },
    {
      name: "KomForme Snow Boots - Dinosaur Themed",
      src: "/assets/products/komforme-snow-boots-dinosaur.png",
      href: "https://www.amazon.com/dp/B096M5MKMT/?coliid=I3NQFBDVBGUQ9V&colid=2HUJZ3HSX3EWI&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    },
    {
      name: "KomForme Snow Boots - Purple Stars",
      src: "/assets/products/komforme-snow-boots-purple.png",
      href: "https://www.amazon.com/dp/B09VK95MRR/?coliid=I2YUTI2RHIK7JT&colid=2HUJZ3HSX3EWI&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it",
    },
  ];

  if (!allProducts) {
    return null;
  }

  items.forEach((i) => {
    const listItem = document.createElement("li");
    listItem.classList.add("product-card");

    allProducts.appendChild(listItem);

    const anchor = document.createElement("a");
    anchor.href = i.href;
    anchor.classList.add("product-link");
    anchor.ariaLabel = `${i.name} (opens in new window)`;
    anchor.target = "_blank";
    listItem.appendChild(anchor);

    const header = document.createElement("h3");
    header.classList.add("product-name");
    header.textContent = i.name;
    anchor.append(header);

    const figure = document.createElement("figure");
    anchor.appendChild(figure);

    const image = document.createElement("img");
    image.src = i.src;
    image.alt = i.name;
    image.setAttribute("width", "250");
    image.setAttribute("height", "250");
    image.setAttribute("loading", "lazy");
    figure.appendChild(image);
  });

  slider();
}

function slider() {
  const allProducts = document.querySelectorAll<HTMLElement>(".product-card")!;
  let currentActive = 0;

  if (window.screen.width < 1024) {
    allProducts.forEach((item, index) => {
      let touchstartX: number;
      let touchendX: number;

      if (index === 0) {
        item.style.left = "0";
      } else {
        item.style.left = `calc(${index * 85}% + 1rem)`;
      }

      if (item)
        item.addEventListener(
          "touchstart",
          function (event: TouchEvent) {
            touchstartX = event.changedTouches[0].screenX;
          },
          false
        );

      item.addEventListener(
        "touchend",
        function (event: TouchEvent) {
          touchendX = event.changedTouches[0].screenX;
          handleSwipe();
        },
        false
      );

      function handleSwipe() {
        let total: number = touchendX - touchstartX;

        if (total > 30 && currentActive !== 0) {
          // Swipe Right
          if (currentActive + 1 < allProducts.length) {
            allProducts[currentActive + 1].style.left = "calc(170% + 1rem)";
          }
          allProducts[currentActive].style.left = "calc(85% + 1rem)";
          currentActive--;
          allProducts[currentActive].style.left = "0%";
        }

        if (total < 30 && currentActive < allProducts.length - 1) {
          allProducts[currentActive].style.left = "-100%";
          currentActive++;
          allProducts[currentActive].style.left = "0%";

          if (currentActive + 1 < allProducts.length) {
            allProducts[currentActive + 1].style.left = "calc(85% + 1rem)";
          }
        }
      }
    });
  }
}

window.addEventListener("resize", () => {
  if (window.screen.width <= 768) {
    slider();
  }
});
