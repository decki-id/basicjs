const
    name = 'Decki Herdiawan Soepandi',
    age = 28,
    str = highlight`Hello, my name is ${name} and I'm ${age} years old.`;

function highlight(strings, ...args) {
    return strings.reduce((result, s, i) => result += `${s}<span class="hl">${args[i] || ''}</span>`, '');
}

document.body.innerHTML = str;