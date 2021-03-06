export const bindAll = (context, ...names) => {
    names.forEach(name => context[name] = context[name].bind(context));
};
export const dayOfWeek = (timestamp)=>{
    let xx = new Date(timestamp*1000);
    let options = {weekday:'short'}
    return new Intl.DateTimeFormat('en-US', options).format(xx);
};
export const timestampOfDay = (n)=>{
    let day = new Date();
    if (!n){
        day.setDate(day.getDate() + 1);
    } else {
        day.setDate(day.getDate() + n);
    }
    return day.getTime()/1000;
};
export const addToStorage = (item,key)=>{
    const data = (localStorage[key]) ?
        JSON.parse(localStorage[key]) : [];
    let newData = data.slice();
    if(item){

        if(newData.indexOf(item)===-1){newData.push(item)}
        if(key==='likedStorage'){
            if(newData.length===6){newData.shift()}
        }else if(key==='historyStorage'){
            // newData.push(item);
            if(newData.length===25){newData.shift()}
        }
        localStorage[key] = JSON.stringify(newData);
    }

};
export const removeFromStorage = (item,key)=>{
    const data = (localStorage[key]) ?
        JSON.parse(localStorage[key]) : [];
    let newData = data.slice();

    let ind = newData.indexOf(item);
    newData.splice(ind,1);
    localStorage[key] = JSON.stringify(newData);
};

export const speaker = (word)=>{
    let synth = window.speechSynthesis;
    if (word !== '') {
        let utterThis = new SpeechSynthesisUtterance(word);
        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
    }
};
