<template>
    <div class="ring-outer">
    <div class="ring"></div>
    </div>
</template>

<style>
/**.ring
https://gist.github.com/harunpehlivan/15c2c44e4ca31073a5d78d36c8061239
*/
body {
    padding: 0;
    margin: 0;
    background: #111;
}
.ring-outer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.ring {
    width: 200px;
    height: 200px;
    background: #111;
    position: relative;
    border-radius: 50%;
}
.ring:before,.ring:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgb(255 0 0/85%),rgb(0 0 255/85%),rgb(255 255 0/85%) );
    transform: scale(1.2);
    z-index: -1;
    animation: animate 3s linear infinite;
}
.ring:after {
  filter: blur(15px);
  z-index: -2;
}

@keyframes animate {
  0% {
    transform: rotate(0) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1.2);
  }
}
</style>