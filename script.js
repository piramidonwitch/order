// import data from "./data.js"

const data = {
    printData: [
        { tag: 'input', text: '' },
        { tag: 'button', text: 'a2' },
        { tag: 'button', text: 'свой' },
        { tag: 'button', text: 'чужой' },
        { tag: 'button', text: 'п-т' },
        { tag: 'button', text: '(1+0)' },
        { tag: 'button', text: '(1+1)' },
        { tag: 'button', text: '(3+0)' },
        { tag: 'button', text: '(4+0)' },
        { tag: 'button', text: '(4+4)' },
        { tag: 'button', text: '(5+0)' },
        { tag: 'button', text: '(5+5)' },
        { tag: 'button', text: 'k' },
        { tag: 'button', text: 'cmyk' },
        { tag: 'button', text: 'cmyk мат.лак' },
        { tag: 'button', text: 'cmyk гл.лак' },
        { tag: 'button', text: 'без печати' },
        { tag: 'button', text: 'цифра' },
        { tag: 'button', text: '(печать по цветопробе)' },
        { tag: 'button', text: '(печать по образцу)' },
        { tag: 'button', text: '(заказчик на приладку)' },
        { tag: 'button', text: '(менеджер на приладку)' },
        { tag: 'button', text: '(цвет приблизить к р.326)' }
    ],
    paperData: [
        { tag: 'input', text: '' },
        { tag: 'button', text: 'гл' },
        { tag: 'button', text: 'мат' },
        { tag: 'button', text: 'офсет' },
        { tag: 'button', text: '80г' },
        { tag: 'button', text: '100г' },
        { tag: 'button', text: 'картон' },
        { tag: 'button', text: '270г' },
        { tag: 'button', text: '300г' },
        { tag: 'button', text: '350г' },
        { tag: 'button', text: '1-ст' },
        { tag: 'button', text: '1-ст (белый оборот)' },
        { tag: 'button', text: '2-ст' },
        { tag: 'button', text: 'самоклейка' },
        { tag: 'button', text: '80-90' },
        { tag: 'button', text: '105-115' },
        { tag: 'button', text: '120-130' },
        { tag: 'button', text: '140-150' },
        { tag: 'button', text: '157-170' },
        { tag: 'button', text: '180-200' },
        { tag: 'button', text: '230-250' },
        { tag: 'button', text: '270-300' },
        { tag: 'button', text: '(47x65)' },
        { tag: 'button', text: '(62x94)' },
        { tag: 'button', text: '(70x100)' },
        { tag: 'button', text: '(72x104)' }

    ],
    lamData: [

        { tag: 'button', text: 'мат 1+1' },
        { tag: 'button', text: 'мат 1+0' },
        { tag: 'button', text: 'гл 1+1' },
        { tag: 'button', text: 'гл 1+0' },
        { tag: 'button', text: 'софттач 1+0' },
        { tag: 'button', text: 'софттач 1+1' }
    ],

    ufData: [
        { tag: 'input', text: '' },
        { tag: 'button', text: 'уф-лак 1+0' },
        { tag: 'button', text: 'уф-лак 1+1' },
        { tag: 'button', text: '3D-лак 1+0' },
        { tag: 'button', text: '3D-лак 1+1' }
    ],

    bigData: [
        { tag: 'input', text: '' },
        { tag: 'button', text: '1 биг' },
        { tag: 'button', text: '2 бига' },
        { tag: 'button', text: '3 бига' },
        { tag: 'button', text: '4 бига' }
    ],

    falzData: [
        { tag: 'input', text: '' },
        { tag: 'button', text: '1 фальц' },
        { tag: 'button', text: '2 фальца' },
        { tag: 'button', text: '3 фальца' },
        { tag: 'button', text: '4 фальца' },
        { tag: 'button', text: 'не фальцевать' }
    ],

    stampData: [
        { tag: 'input', text: '' },
        { tag: 'button', text: 'наш штамп:' },
        { tag: 'button', text: 'новый штамп:' },
        { tag: 'button', text: 'изд:' }
    ],

    sborData: [
        { tag: 'input', text: '' },
        { tag: 'button', text: 'ЛЮВЕРСЫ -' },
        { tag: 'button', text: 'белые /' },
        { tag: 'button', text: 'серебро /' },
        { tag: 'button', text: 'чёрные /' },
        { tag: 'button', text: 'ШНУР -' },
        { tag: 'button', text: 'белый' },
        { tag: 'button', text: 'чёрный' },
        { tag: 'button', text: '6мм' },
        { tag: 'button', text: 'ЛЕНТА' },
        { tag: 'button', text: 'на 2 скобы' },
        { tag: 'button', text: 'полос' },
        { tag: 'button', text: '(а4 в а5)' },
    ],


    tirajData: [
        { tag: 'input', text: '' }

    ],
    upakData: [

        { tag: 'input', text: '' },
        { tag: 'button', text: 'каждого вида' },
        { tag: 'button', text: 'маркировка' },
        { tag: 'button', text: 'на упакованных коробках или пачках написать' },
        { tag: 'button', text: 'с образцом сверху, сверхтираж на склад' }
    ]
}

const createParent = function (name, desript, destination) {
    let p = document.createElement('div')
    p.classList.add(name)
    p.id = name
    destination.appendChild(p)
    let e = document.createElement('span')
    e.textContent = desript
    p.appendChild(e)
}

const fillInputBlockWithClicker = (parentIn, parentOut, data) => {
    data.forEach(o => {
        let e = document.createElement(o.tag)
        e.textContent = o.text
        parentIn.appendChild(e)
    })
    makeClickEnter(parentIn, parentOut)
}

const makeClickEnter = function (parentIn, parentOut) {
    parentIn.childNodes.forEach((e) => {
        if (e.tagName !== 'INPUT' && e.tagName !== 'SPAN') {
            e.addEventListener('click', function (event) {
                let a = document.createElement('span')
                a.textContent = event.target.textContent
                parentOut.appendChild(a)
            })
        } else {
            e.addEventListener('keydown', function (event) {
                if (event.key == 'Enter') {
                    let a = document.createElement('span')
                    a.textContent = this.value
                    parentOut.appendChild(a)
                    this.value = ''
                }
            })
        }
    })
    parentOut.addEventListener('click', function (event) {
        if (event.target !== this && event.target !== parentOut.children[0]) {
            event.target.remove()
        }
    })
}

const checkNoneAndColorAdd = (btn, arrOfHideEl) => {
    arrOfHideEl.forEach(e => {
        if (!e.classList.contains('none')) {
            btn.classList.add('color')
        } else {btn.classList.remove('color')}
    })  
}

const hideElement = (btn, arrOfHideEl) => {
    
    arrOfHideEl.forEach(e => {
        if (e !== tiraj_in && e !== tiraj_out && e !== inBlock 
            && e !== tgl_buttons && e !== load_save_btns) {
            e.classList.add('none')
        }
    })
    btn.onclick = () => {
        arrOfHideEl.forEach(e => {
            e.classList.toggle('none')
        })
        checkNoneAndColorAdd(btn, arrOfHideEl)
    }
    
}

//------------------BODY--------------------------------------------


createParent('print_in', 'ПЕЧАТЬ:', inBlock)
createParent('paper_in', 'БУМАГА:', inBlock)
createParent('lam_in', 'ЛАМИНАЦИЯ:', inBlock)
createParent('uf_in', 'ШЕЛКОГРАФИЯ:', inBlock)
createParent('big_in', 'БИГОВКА:', inBlock)
createParent('falz_in', 'ФАЛЬЦОВКА:', inBlock)
createParent('stamp_in', 'ВЫРУБКА:', inBlock)
createParent('sbor_in', 'СБОРКА:', inBlock)
createParent('tiraj_in', 'ТИРАЖ:', inBlock)
createParent('upak_in', 'УПАКОВКА:', inBlock)

createParent('print_out', 'ПЕЧАТЬ:', outBlock)
createParent('paper_out', 'БУМАГА:', outBlock)
createParent('lam_out', 'ЛАМИНАЦИЯ:', outBlock)
createParent('uf_out', 'ШЕЛКОГРАФИЯ:', outBlock)
createParent('big_out', 'БИГОВКА:', outBlock)
createParent('falz_out', 'ФАЛЬЦОВКА:', outBlock)
createParent('stamp_out', 'ВЫРУБКА:', outBlock)
createParent('sbor_out', 'СБОРКА:', outBlock)
createParent('tiraj_out', 'ТИРАЖ:', outBlock)
createParent('upak_out', 'УПАКОВКА:', outBlock)

fillInputBlockWithClicker(print_in, print_out, data.printData)
fillInputBlockWithClicker(paper_in, paper_out, data.paperData)
fillInputBlockWithClicker(lam_in, lam_out, data.lamData)
fillInputBlockWithClicker(uf_in, uf_out, data.ufData)
fillInputBlockWithClicker(big_in, big_out, data.bigData)
fillInputBlockWithClicker(falz_in, falz_out, data.falzData)
fillInputBlockWithClicker(stamp_in, stamp_out, data.stampData)
fillInputBlockWithClicker(sbor_in, sbor_out, data.sborData)
fillInputBlockWithClicker(tiraj_in, tiraj_out, data.tirajData)
fillInputBlockWithClicker(upak_in, upak_out, data.upakData)

hideElement(hide_print, [print_in, print_out])
hideElement(hide_paper, [paper_in, paper_out])
hideElement(hide_lam, [lam_in, lam_out])
hideElement(hide_uf, [uf_in, uf_out])
hideElement(hide_big, [big_in, big_out])
hideElement(hide_falz, [falz_in, falz_out])
hideElement(hide_stamp, [stamp_in, stamp_out])
hideElement(hide_sbor, [sbor_in, sbor_out])
hideElement(hide_tiraj, [tiraj_in, tiraj_out])
hideElement(hide_upak, [upak_in, upak_out])

hideElement(xx, [inBlock, load_save_btns, tgl_buttons])



//-----------------FOR SAVE/LOAD------------------------------------

let loadData = {}
let fileToSave;
const newData = () => {
    fileToSave = new Blob([JSON.stringify(loadData)], { type: "application/json" });
}
const onSaveClick = function () {
    for (let i = 0; i < outBlock.children.length; i++) {
        let key = outBlock.children[i].id
        let value = [...outBlock.children[i].children].map(item => item.textContent)
        loadData[key] = value
    }
}

//----------------SAVE--------------------------------------------

saveBtn.onclick = async () => {
    onSaveClick();
    newData();
    await saveFile(fileToSave);
}

async function saveFile(fileBlob) {
    const saveFileOptions = {
        types: [{
            description: 'My Configuration File',
            accept: { 'application/json': ['.json'] },
        }],
    }
    const fileHandle = await window.showSaveFilePicker(saveFileOptions);
    const writable = await fileHandle.createWritable();
    await writable.write(fileBlob);
    await writable.close();
}

//----------------LOAD--------------------------------------------


const displayInfo = function () {
    for (let i = 0; i < outBlock.children.length; i++) {
        if (outBlock.children[i].children.length > 1) {
            outBlock.children[i].classList.remove('none')
            inBlock.children[i].classList.remove('none')
            tgl_buttons.children[i].classList.add('color')
        }
    }
}

loadBtn.onclick = async () => {
    let loadedFile = await loadFile();
    const entries = Object.entries(loadedFile); // создаёт массив массивов пар
    entries.forEach(entry => { // перебор пар
        const name = entry[0];
        const values = entry[1];
        let parent = document.getElementById(name);
        //clear values
        while (parent.firstChild) parent.removeChild(parent.firstChild);
        //add new values
        values.forEach(v => {
            let nv = document.createElement('span');
            nv.textContent = v;
            parent.appendChild(nv);
        })
    })
    displayInfo();
    
}
async function loadFile() {
    const pickerOpts = {
        types: [
            {
                description: 'Text Files',
                accept: {
                    'application/json': ['.json'],
                }
            }
        ],
        excludeAcceptAllOption: true,
        multiple: false
    };
    [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    if (fileHandle.kind === 'file') {
        const file = await fileHandle.getFile();
        const fileContent = await file.text();
        return JSON.parse(fileContent);
    }
}


