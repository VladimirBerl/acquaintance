export async function preloadResources() {
  const images = [
    "/assets/grateful.png",
    "/assets/img_1.jpg",
    "/assets/img_2.jpg",
    "/assets/img_3.jpg",
    "/assets/img_4.jpg",
    "/assets/img_5.jpg",
    "/assets/img_6.jpg",
    "/assets/img_7.jpg",
    "/assets/logo_inq.png",
  ];

  images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve({ src, status: "ok" });
      img.onerror = () => reject({ src, status: "error" });
    });
  });

  try {
    setTimeout(() => {
      return true;
    }, 1000);
  } catch (error) {
    console.error("Ошибка загрузки ресурсов:", error);
    return false;
  }
}
