import React from "react";

export default function MovieCard() {
  return (
    <div class="blog-card spring-fever">
      <div class="title-content">
        <h3>
          <a href="#">10 inspiring photos</a>
        </h3>
        <div class="intro">
          {" "}
          <a href="#">Inspiration</a>{" "}
        </div>
      </div>
      <div class="card-info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...
        <a href="#">
          Read Article<span class="licon icon-arr icon-black"></span>
        </a>
      </div>
      <div class="utility-info">
        <ul class="utility-list">
          <li>
            <span class="licon icon-like"></span>
            <a href="#">2</a>
          </li>
          <li>
            <span class="licon icon-com"></span>
            <a href="#">12</a>
          </li>
          <li>
            <span class="licon icon-dat"></span>03 jun 2017
          </li>
          <li>
            <span class="licon icon-tag"></span>
            <a href="#">Photos</a>, <a href="#">Nice</a>
          </li>
        </ul>
      </div>
      <div class="gradient-overlay"></div>
      <div class="color-overlay"></div>
    </div>
  );
}
