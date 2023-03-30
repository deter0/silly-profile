const uhhh = () => {
  var iteration = 0;

  setInterval(() => {
    const uh_element = document.getElementById("uh");
    uh_element.innerText = "uh" + ("h").repeat(iteration) + "...";
    
    iteration ++;
    if (iteration >= 6) iteration = 0;
  }, 750);
}

const desktop_bg = () => {
  const container = document.getElementById("desktop-bg");
  const draw_object = document.getElementById("object");
 
  draw_object.style = "width: 40px; opacity: 20%; height: 40px; top: 0; left: 0; position: absolute;"
  console.log(container);
  
  var objects = []; 
  for (let i = 0; i < 25; i++) {
    const obj = draw_object.cloneNode();
    obj.id = '';
    let x = Math.random();
    let y = Math.random();
    obj.style.left = `${x*100}%`;
    obj.style.top = `${y*100}%`;
    container.appendChild(obj);
    objects.push([obj, x, y]);
  }
  
  draw_object.style = "display: none;"
  
  const lollipops = document.getElementById("lollipops");
  if (lollipops) {
    lollipops.onclick = () => {
      for (let i = 0; i < objects.length; i++) {
        objects[i][0].src = './images/sunshine.gif';
      }
    }
  }
  
  const animate = () => {
    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];
      obj[2] += 0.003;
      if (obj[2] > 1.1) {
        obj[1] = Math.round(Math.random()*500)/500.0;
        obj[2] = -0.1;
      }
      
      obj[0].style.opacity = `${100 - obj[2]*100}%`;
      obj[0].style.top = `${obj[2]*100}%`;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

uhhh();
desktop_bg();
