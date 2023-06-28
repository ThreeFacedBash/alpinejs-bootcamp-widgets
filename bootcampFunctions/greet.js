function greetFunc(neighbourID,lang) {
    let greetMsg = '';
    if (lang === 'isiZulu') {
        greetMsg = 'Sawubona lapho, ' + neighbourID;
    }
    else if (lang === 'French'){
        greetMsg = 'Bonjour là-bas, ' + neighbourID;
    }
    else if (lang === 'Mandarin'){
        greetMsg = '你Nǐ hǎo, ' + neighbourID
    }
    else if (lang === 'English'){
        greetMsg = 'Hello there, ' + neighbourID
    }
    else{
        greetMsg =   'Please select a language' ;
    }
    return greetMsg;
}