(function(d) {
    var config = {
      kitId: 'lli8swa',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


  $(function(){
  const images = document.getElementsByClassName('js-parallax');
  if(images.length > 0){
    new simpleParallax(images, {
      scale: 2,
      delay: .8,
      transition: 'cubic-bezier(0,0,0,1)'
  });
  }
});