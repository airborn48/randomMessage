console.log('The Random Message Generator')
//format You "verb" "number " "object"


let verbList=['sucked', 'swallowed', 'punched', 'kissed', 'jiggled'];
let verb = verbList[Math.floor(Math.random()*verbList.length)]
let number =Math.floor(Math.random()*10);
let objectList =['eggplants', 'nubs', 'palis', 'bobs', 'rohits'];
let object = objectList[Math.floor(Math.random()*objectList.length)]


console.log(`You ${verb} ${number} ${object}`)
