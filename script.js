const pixelH = 320;
const pixelV = 200;
const cell   = 1;

var memory = {
  '0Fx000':{'local':0, 'binary':[0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0]},
  '0Fx001':{'local':1, 'binary':[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}
}

function startScreen () {
  render();
  drawScreen(0,[
    0,0,1,1,1,1,0,0,
    0,1,1,0,0,1,1,0,
    0,1,1,0,0,0,0,0,
    0,1,1,0,0,0,0,0,
    0,1,1,0,0,0,0,0,
    0,1,1,0,0,1,1,0,
    0,0,1,1,1,1,0,0
    ])
    writeScreen();
  }
function writeScreen () {
  console.log(memory.size)
}
function mapBlock (n) {
  let obj = []
  for (let i = 0; i < 8; i++){
    let count = i*pixelH+(n*8)
    for (let j = 0; j < 8; j++){
      obj.push(count+j)
    }
  }
  return obj;
}
function drawScreen (where,binary){
  let paint = mapBlock(where)
  for(let i = 0; i < paint.length; i++){
    if(binary[i] === 1){
      document.getElementById(`pixel-${paint[i]}`).style.backgroundColor = '#FFF';
    }
  }
  console.log(binary)
}
function makeCell (n) {
  let pixelRender = '<table style="border:5px solid #" class="cell" cellspacing="0" cellpadding="0">' 
  for (let v = 0; v < pixelV; v++){
    pixelRender += '<tr>'
    for (let h = 0; h < pixelH; h++){
      let index = h+(pixelH*v)
      pixelRender += `<td class="pixel" id="pixel-${index}">`
      pixelRender += '</td>'
    }
    pixelRender += '</tr>'
  }
  pixelRender += '</table>'
  
  document.querySelector(`#screen-${n}`).innerHTML = pixelRender
}
function render () { 
  for(let i = 0; i < cell; i++){
    document.querySelector('#render').innerHTML += `<div id="screen-${i}"></div>`
    makeCell(i)
  }
}
startScreen();