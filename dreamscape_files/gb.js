!function e(t,o,r){function n(a,s){if(!o[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(i)return i(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var c=o[a]={exports:{}};t[a][0].call(c.exports,function(e){var o=t[a][1][e];return n(o?o:e)},c,c.exports,e,t,o,r)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(e,t,o){"use strict";!function(){function e(){var e=document.createElement("iframe");e.id="goodblock-iframe";var t,o=document.currentScript,r=o.getAttribute("data-iframe-url");t=r?r:"https://goodblock.gladly.io/app/icon-view/#goodblock-icon-container",e.src=t,e.style.width="200px",e.style.height="200px",e.style.position="fixed",e.style.display="none",e.style.left="0px",e.style.bottom="0px",e.style.margin="0px",e.style.padding="0px",e.style.border="0px",e.style.overflow="hidden",e.style.zIndex="2147483647",e.style.backgroundColor="transparent",e.frameBorder="0",e.allowTransparency="true";var n=document.getElementsByTagName("body")[0];return n.appendChild(e),e}function t(){return document.getElementById("goodblock-iframe")}var o=t();o||(o=e());var r=function(e){e||(e=0),setTimeout(function(){var e=t();e&&(e.style.display="none")},e)},n=function(e){e||(e=0),setTimeout(function(){var e=t();e&&(e.style.display="inherit")},e)},i=function(e,o,r){r||(r=0),setTimeout(function(){var r=t();r&&(r.style.width=e+"px",r.style.height=o+"px")},r)},a=function(e,t,r,n,i){i||(i=0),setTimeout(function(){e>=0?o.style.left=e+"px":o.style.removeProperty("left"),t>=0?o.style.top=t+"px":o.style.removeProperty("top"),r>=0?o.style.right=r+"px":o.style.removeProperty("right"),n>=0?o.style.bottom=n+"px":o.style.removeProperty("bottom")},i)},s=window.addEventListener?"addEventListener":"attachEvent",l=window[s],d="attachEvent"==s?"onmessage":"message",c=["https://goodblock.gladly.io"];l(d,function(e){if(!(c.indexOf(e.origin)<0)){var t=e.message?"message":"data",o=e[t];switch(o.msg){case"hide":r(o.delay);break;case"show":n(o.delay);break;case"size":i(o.width,o.height,o.delay);break;case"position":a(o.left,o.top,o.right,o.bottom,o.delay)}}},!1)}()},{}]},{},[1]);