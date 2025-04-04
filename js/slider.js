document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const galleryResize = document.querySelector(".gallery__resize");
  const before = document.querySelector("#before");
  const after = document.querySelector("#after");

  gallery.addEventListener("mousemove", (event) => {
    let x = event.offsetX;
    galleryResize.style.width = x + "px";
    galleryResize.classList.remove("tr");
  });

  gallery.addEventListener("mouseleave", () => {
    galleryResize.style.width = "100%";
    galleryResize.classList.add("tr");
  });

  before.onclick = () => {
    galleryResize.style.width = "100%";
    galleryResize.classList.add("tr");
  };

  after.onclick = () => {
    galleryResize.style.width = "0%";
    galleryResize.classList.add("tr");
  };

  const wrapper = document.querySelector(".wrapper");
  const photoBefore = document.querySelector(".img-before");
  const photoAfter = document.querySelector(".img-after");
  const photoBeforeArray = [
    "https://cdn.fs.teachablecdn.com/v7UiewjzS3Kprfpob2hB",
    "https://cdn.fs.teachablecdn.com/vc1bqcmPScTG7Civt1Oc",
    "https://cdn.fs.teachablecdn.com/ArPvY4UBQ9WBS9krDneF",
    "https://cdn.fs.teachablecdn.com/uwxpa9TeGAqjZxluyngO",
    "https://cdn.fs.teachablecdn.com/gnWdMEjjS7vZXoNrHang",
  ];
  const photoAfterArray = [
    "https://cdn.fs.teachablecdn.com/uSqKRhLtQmgMyDvdby9Q",
    "https://cdn.fs.teachablecdn.com/CevzlmddSPOY4Oze7MDD",
    "https://cdn.fs.teachablecdn.com/YLGWnq88Q4uzegpshmWC",
    "https://cdn.fs.teachablecdn.com/MtTtxZHnTnKXm1gG1ydR",
    "https://cdn.fs.teachablecdn.com/MWvnf3LmRU2fvnoC7rbD",
  ];
  const photoNames = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];

  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const photoName = document.querySelector("#photo-name");
  let count = 0;
  let countPhoto = 1;

  right.addEventListener("click", nextPhoto);
  left.addEventListener("click", prevPhoto);

  window.addEventListener("keydown", (e) => {
    let w = galleryResize.offsetWidth;

    if (e.keyCode === 39) {
      nextPhoto();
    } else if (e.keyCode === 37) {
      prevPhoto();
    } else if (e.keyCode === 38) {
      galleryResize.classList.remove("tr");
      w = w + 50;
      getW(w);
      if (w > gallery.offsetWidth) {
        galleryResize.style.width = "100%";
      }
    } else if (e.keyCode === 40) {
      galleryResize.classList.remove("tr");
      w = w - 50;
      getW(w);
    }
  });

  const title = createSpanCount(countPhoto);
  wrapper.append(title);

  function nextPhoto() {
    count++;
    countPhoto++;
    title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
    photoBefore.src = photoBeforeArray[count];
    photoAfter.src = photoAfterArray[count];
    photoName.textContent = photoNames[count];
    galleryResize.style.width = "50%";
    galleryResize.classList.add("tr");
    if (count >= photoBeforeArray.length) {
      count = 0;
      countPhoto = 1;
      photoBefore.src = photoBeforeArray[count];
      photoAfter.src = photoAfterArray[count];
      photoName.textContent = photoNames[count];
      title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
    }
  }

  function prevPhoto() {
    count--;
    countPhoto--;
    photoBefore.src = photoBeforeArray[count];
    photoAfter.src = photoAfterArray[count];
    photoName.textContent = photoNames[count];
    title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
    if (count < 0) {
      count = photoBeforeArray.length - 1;
      countPhoto = photoBeforeArray.length;
      photoBefore.src = photoBeforeArray[count];
      photoAfter.src = photoAfterArray[count];
      photoName.textContent = photoNames[count];
      title.innerHTML = `${countPhoto} / ${photoBeforeArray.length}`;
    }
  }

  function createSpanCount(n) {
    const title = document.createElement("h1");
    title.id = "photo-count";
    title.innerHTML = `${n} / ${photoBeforeArray.length}`;
    return title;
  }

  function getW(n) {
    galleryResize.style.width = n + "px";
    if (n > gallery.offsetWidth) return;
  }
});
