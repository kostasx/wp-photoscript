/* PhotoScript.JS 0.1.0 */

!function(t){"use strict";if(!t.PhotoScript){var a=".photoscript { visibility: hidden; }",i=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),i.appendChild(e);var h=function(t){return t?(this.image=t,this.image.insertAdjacentHTML("afterend","<canvas></canvas>"),this.canvas=this.image.nextElementSibling,this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.image.width,this.canvas.height=this.image.height,this.ctx.drawImage(this.image,0,0,this.canvas.width,this.canvas.height),this.imageDataObject=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),void(this.imageData=this.imageDataObject.data)):(this.image=null,this)};h.prototype.show=function(){return console.log("PhotoScript::show()"),this.image?(this.ctx.putImageData(this.imageDataObject,0,0),this.image.parentNode.removeChild(this.image),this):this},h.prototype.autoLevels=function(){if(console.log("PhotoScript::autoLevels"),!this.image)return this;for(var t=this.imageData.length,a=0,i=255,e=0,h=255,s=0,g=255,m=0;t>m;m+=4)this.imageData[m]>a&&(a=this.imageData[m]),this.imageData[m]<i&&(i=this.imageData[m]),this.imageData[m+1]>e&&(e=this.imageData[m+1]),this.imageData[m+1]<h&&(h=this.imageData[m+1]),this.imageData[m+2]>s&&(s=this.imageData[m+2]),this.imageData[m+2]<g&&(g=this.imageData[m+2]);for(var m=0;t>m;m+=4)this.imageData[m]=(this.imageData[m]-i)*(255/(a-i)),this.imageData[m+1]=(this.imageData[m+1]-h)*(255/(e-h)),this.imageData[m+2]=(this.imageData[m+2]-g)*(255/(s-g));return this},h.prototype.sharpen=function(t){if(console.log("PhotoScript::sharpen()"),!this.image)return this;t=t||{};for(var a,i=document.createElement("canvas").getContext("2d"),e=i.createImageData(this.imageDataObject.width,this.imageDataObject.height),h=e.data,s=t.factor||.25,g=[0,-1,0,-1,5,-1,0,-1,0],m=Math.round(Math.sqrt(g.length)),o=.5*m|0,r=this.imageDataObject.height;r--;)for(a=this.imageDataObject.width;a--;){var n,c,D,d,p=r,l=a,v=4*(r*this.imageDataObject.width+a);n=c=D=d=0;for(var u=0;m>u;u++)for(var f=0;m>f;f++){var y=p+u-o,b=l+f-o;if(y>=0&&y<this.imageDataObject.height&&b>=0&&b<this.imageDataObject.width){var w=4*(y*this.imageDataObject.width+b),j=g[u*m+f];n+=this.imageData[w]*j,c+=this.imageData[w+1]*j,D+=this.imageData[w+2]*j,d+=this.imageData[w+3]*j}}h[v]=n*s+this.imageData[v]*(1-s),h[v+1]=c*s+this.imageData[v+1]*(1-s),h[v+2]=D*s+this.imageData[v+2]*(1-s),h[v+3]=this.imageData[v+3]}return this.imageDataObject=e,this},h.prototype.render=function(){return Array.prototype.slice.apply(this.image.classList).map(function(t){"auto-levels"===t&&this.autoLevels();var a=t.match(/sharpen(:?-(\d{1,3}))?/);if(a){var i=a[2]?parseInt(a[2],10)/100:null;this.sharpen({factor:i})}}.bind(this)),this.show()},h.prototype.display=h.prototype.show,t.PhotoScript=h}}(this);

/* Wordpress */

document.addEventListener('DOMContentLoaded', function(){

  Array.prototype.slice.apply(document.querySelectorAll('img.photoscript')).forEach(function(img){
    new PhotoScript(img).render()
  });

});




