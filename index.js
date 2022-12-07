const questions =[
    "O que aprendi hoje?", 
    "O que me deixou chateada? E o que o posso fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei?"
]

const ask = (index=0) =>{
    process.stdout.write("\n\n"+questions[index]+" > "); 
}
ask(); 

const answers =[]
process.stdin.on('data', data=>{ 
    answers.push(data.toString().trim()); 
    if (answers.length<questions.length)ask(answers.length)
    else  {
        console.log(answers)
        process.exit(); 
    }
})

process.on('exit', ()=>{
    console.log(`
    Inês, 

    O que aprendeste hoje foi:
    ${answers[0]}

    Ficaste chateada e podias melhorar:
    ${answers[1]}

    E o que te deixou feliz:
    ${answers[2]}

    Ajudate ${answers[3]} pessoa(s) hoje!

    Amanhã volta a refletir na vida...

    `); 
})