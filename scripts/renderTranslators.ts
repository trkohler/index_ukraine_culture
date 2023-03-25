import {readFileSync, writeFileSync} from 'fs';

let template = readFileSync('storage/volunteers/templates/translator-template.json', 'utf8');
let languages = [
    "китайська [мандарін]",
    "німецька",
    "англійська",
    "іспанська",
    "афрікаанс",
    "арабська",
    "японська",
    "хінді",
    "вʼєтнамська",
    "французська"
];


languages.map(language => {
    let modifiedTemplate = template.replace("$target_language", language);
    let idx = languages.indexOf(language)
    writeFileSync(`storage/volunteers/translator-${idx}.json`, modifiedTemplate);
})