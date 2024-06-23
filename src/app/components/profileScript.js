"use client";
import { useEffect } from "react";

const ProfileScript = () => {
  useEffect(() => {
    // scriptを埋め込む処理
    let script = null;
    if (typeof window === 'object') {
      // 同じscriptが量産されるのを防ぐため同じscriptタグがある場合は処理しない
      if (document.querySelector("#crazy_script") === null) {
        script = document.createElement("script");
        script.id = "crazy_script";

        // innerHTMLでやりたい内容を書く
        script.innerHTML = `
          document.addEventListener("scroll", function () {
            const slideInElements = document.querySelectorAll(".slide-in");
            let hasScrolled = new Array(slideInElements.length).fill(false);

            function checkSlide() {
              slideInElements.forEach((element, index) => {
                const slideInAt =
                  window.scrollY + window.innerHeight - element.clientHeight / 2;
                const elementBottom = element.offsetTop + element.clientHeight;
                const isHalfShown = slideInAt > element.offsetTop;
                const isNotScrolledPast = window.scrollY < elementBottom;

                if (isHalfShown && isNotScrolledPast && !hasScrolled[index]) {
                  element.classList.add("show");
                  hasScrolled[index] = true; // 一度表示されたらフラグを立てる
                }
              });
            }

            window.addEventListener("scroll", checkSlide);
            checkSlide(); // ページ読み込み時に一度チェック
          });

          document.addEventListener("scroll", function () {
            const slideInElements = document.querySelectorAll(".pop");
            let hasScrolled = new Array(slideInElements.length).fill(false);

            function checkSlide() {
              slideInElements.forEach((element, index) => {
                const slideInAt =
                  window.scrollY + window.innerHeight - element.clientHeight / 2;
                const elementBottom = element.offsetTop + element.clientHeight;
                const isHalfShown = slideInAt > element.offsetTop;
                const isNotScrolledPast = window.scrollY < elementBottom;

                if (isHalfShown && isNotScrolledPast && !hasScrolled[index]) {
                  element.classList.add("show");
                  hasScrolled[index] = true; // 一度表示されたらフラグを立てる
                }
              });
            }

            window.addEventListener("scroll", checkSlide);
            checkSlide(); // ページ読み込み時に一度チェック
          });

          document.addEventListener("scroll", function () {
            const worksscrollButton = document.getElementById("worksscrollButton");
            const works = document.getElementById("works");
            const contactscrollButton = document.getElementById("contactscrollButton");
            const contact = document.getElementById("contact");
            const blogscrollButton = document.getElementById("blogscrollButton");
            const blog = document.getElementById("blog");

            worksscrollButton.addEventListener("click", function () {
              works.scrollIntoView({ behavior: "smooth" });
            });
            contactscrollButton.addEventListener("click", function () {
              contact.scrollIntoView({ behavior: "smooth" });
            });
            blogscrollButton.addEventListener("click", function () {
              blog.scrollIntoView({ behavior: "smooth" });
            });
          });

          document.addEventListener("scroll", function () {
            const elements = document.querySelectorAll(".scroll-element1");
            elements.forEach((element) => {
              const elementPosition = element.getBoundingClientRect().top;
              const viewportHeight = window.innerHeight;

              if (elementPosition < viewportHeight) {
                element.classList.add("visible");
              }
            });
          });

          document.addEventListener("scroll", function () {
            const elements = document.querySelectorAll(".scroll-element2");
            elements.forEach((element) => {
              const elementPosition = element.getBoundingClientRect().top;
              const viewportHeight = window.innerHeight;

              if (elementPosition < viewportHeight) {
                element.classList.add("visible");
              }
            });
          });

          document.addEventListener("scroll", function () {
            const elements = document.querySelectorAll(".scroll-element3");
            elements.forEach((element) => {
              const elementPosition = element.getBoundingClientRect().top;
              const viewportHeight = window.innerHeight;

              if (elementPosition < viewportHeight) {
                element.classList.add("visible");
              }
            });
          });

          document.addEventListener("scroll", function () {
            const elements = document.querySelectorAll(".scroll-element4");
            elements.forEach((element) => {
              const elementPosition = element.getBoundingClientRect().top;
              const viewportHeight = window.innerHeight;

              if (elementPosition < viewportHeight) {
                element.classList.add("visible");
              }
            });
          });

          document.addEventListener("scroll", function () {
            const elements = document.querySelectorAll(".scroll-element5");
            elements.forEach((element) => {
              const elementPosition = element.getBoundingClientRect().top;
              const viewportHeight = window.innerHeight;

              if (elementPosition < viewportHeight) {
                element.classList.add("visible");
              }
            });
          });

          document.addEventListener("scroll", function () {
            const elements = document.querySelectorAll(".scroll-element6");
            elements.forEach((element) => {
              const elementPosition = element.getBoundingClientRect().top;
              const viewportHeight = window.innerHeight;

              if (elementPosition < viewportHeight) {
                element.classList.add("visible");
              }
            });
          });
        `;
        document.body.appendChild(script);
      }
    }
  });
};

export default ProfileScript;