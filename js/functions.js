function createCat(myCat, el = box) {
    const card = document.createElement("div");
    card.className = "card";
    const btnDelete = document.createElement("button");
    btnDelete.className = "btnDelete";
    btnDelete.classList.add("btn");
    const iDelete = document.createElement("i");
    iDelete.className = "fa-solid";
    iDelete.classList.add("fa-xmark");
    btnDelete.append(iDelete);
    btnDelete.addEventListener("click", (e) => {
      e.stopPropagation();
      let isDelete = confirm(
        `Точно удаляем ${myCat.name}?`
      );
      if (isDelete) {
        deleteCat(myCat.id);
      }
    });
  
    card.addEventListener("click", (e) => {
      createModelWindow(myCat, "Редактирование");
      mdBox.classList.toggle("active");
    });
    const pic = document.createElement("div");
    pic.className = "pic";
    const name = document.createElement("h3");
    name.innerText = myCat.name;
    const like = document.createElement("i");
    like.className = "fa-heart card__like";
    like.classList.add(myCat.favorite ? "fa-solid" : "fa-regular");
  
    like.addEventListener("click", (e) => {
      e.stopPropagation();
      setLike(like, myCat.id, !myCat.favorite);
    });
    if (!myCat.image) {
      pic.classList.add("default");
    } else {
      pic.style.backgroundImage = `url(${myCat.image})`;
    }
    card.append(pic, like, name, btnDelete);
    const rateDiv = document.createElement("div");
    rateDiv.className = "rating";
    if (myCat.rate >= 0) {
      if (myCat.rate === 0) {
        const rate = document.createElement("i");
        rate.className = "fa-regular";
        rate.classList.add("fa-star");
        rateDiv.append(rate);
      } else {
        for (let i = 0; i < myCat.rate; i++) {
          const rate = document.createElement("i");
          rate.className = "fa-solid";
          rate.classList.add("fa-star");
          rateDiv.append(rate);
        }
      }
    }
    card.append(rateDiv);
    el.append(card);
  }