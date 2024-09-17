const playground = document.querySelector('div');

playground.append('Wizard');

const scrollOfWisdom = document.create
scrollOfWisdom.textContent = 'Ancient wisdom lies within';
console.log(scrollOfWisdom.innerText);

//playground.innerHTML = '<p>Spells include: <strong>Levitation</strong> and <em>Invisibility</em>!</p>';

console.log(playground.textContent);
console.log(playground.innerHTML);

//const fruitBasket = document.createElement('div');
fruitBasket.innerHTML = `
<p>Apple</p>
<p>Banana</p>
<p>Cherry</p>
`;
playground.append(fruitBasket);

//while (fruitBasket.firstChild) 


const magicWand = document.createElement('div');
magicWand.setAttribute('id', 'wand1');
magicWand.setAttribute('class', 'magical-item wand');
magicWand.textContent = "Magic Wand"; 
playground.append(magicWand);

console.log(playground.getAttribute('id'));

secretScroll.id = 'secretScroll';
secretScroll.dataset.spell = 'invisibility';
secretScroll.dataset.components = 'moonlight,shadowessence';

shapeshifter.classList.add('magical', 'creature');
console.log("Initial classes:", shapeshifter.className);

shapeshifter.classList.remove('creature');
shapeshifter.classList.add('humanoid');

shapeshifter.classList.toggle('invisible', Math.random() > 0.5);
shapeshifter.classList.replace('humanoid', 'beast');
console.log

const gem = document.createElement('div');
gem.textContent = "Gem";
gem.style.fontSize = '50px';
gem.style.color = 'green';
playground.append(gem);

const button = document.createElement('button');
button.textContent = 'Cast Spell';
playground.append(button);

button.addEventListener('click', () => 
    alert('Hey')
)

