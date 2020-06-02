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
    //decimalToBinary(25)
  }
function writeScreen () {
  console.log(memory.size)
}

/*
  THIS FUNCTION GET A DECIMAL NUMBER AND TRANSFORM THIS IN A BINARY NUMBER
*/
function decimalToBinary (num) {
  let output = []                           //DECLARE ARRAY output
  if (num <= 255 && num >= 0 && typeof num !== Number) {
    let decimal = num                         //GET NUM PARAM
    let index = -1                            //DEFINE THE OUTPUT INDEX TO -1
    let base = 2                              //DIFINE THE BASE TO 2 (BINARY)
    while (decimal > 0){                      //VERIFY DECIMAL VALUE ->  BIGGER THAN 0? -> (YES) REPEAT / (NO) STOP
      if (decimal%base !== 0){                //VIRIFY IF MODULOS OF 2 (BASE) ARE EQUAL 0
        var result = 1                          // -> IF TRUE RESULT = 1
      } else {                                  // -> IF FALSE RESULT = 0
        var result = 0
      }
      decimal = decimal/base                //DIVIDED DECIMAL VALUE BY BASE VALUE
      decimal = Math.floor(decimal)         //ROUND TO FLOOR NEW DECIMAL VALUE
      index++                               //SET INDEX OF output WHERE WILL SAVE RESULT VALUE      
      output[index] = result                //SAVE RESULT VALUE IN output ARRAY
    }
    output = output.reverse()               //REVERSE output ARRAY INDEX
} else { output = "Numero invalado!" }                     
  return output                           //RETURN A BINARY NUM
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
  //console.log(binary)
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