function calcPI(iterations)
{
    let pi=0, divisor=1;

    for(let i=1; i<=iterations;i++)
    {
        pi= pi + (4/(divisor))-(4/(divisor+2));

        divisor+=4;
        
    }

    document.getElementById("output1").value = pi.toFixed(10);

}

function getFiblist(iterations)
{
    let fiblist = [];
    fiblist[0]=1; fiblist[1]=1;

    for(let i=1; i<=iterations;i++)
    {
        fiblist[i+1]= fiblist[i] + fiblist[i-1];
    }

    document.getElementById("output1").value = fiblist.join(", ");
}

let mLText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n 2. He who ~ at the right time can ~ again \n 3. Always wear ~ ~ in case you're in a ~ \n 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you";

let inputarray = [];

function madlibgenerator()
{
    createinputarray();

    if(missinginput())
    {
        document.getElementById('output1').value="Please Enter all values";
    }
    else
    {
        sentencegenerator();
    
    }
}

function createinputarray()
{
    for(i=0;i<=13;i++)
    {
        inputarray[i]= document.getElementById('i'+i).value;
    }
}

function missinginput()
{
let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective", "Plural Verb", "Body Part", "Event"];

    for(i=0;i<inputarray.length;i++)
    {
        if(defaultArrayVals.indexOf(inputarray[i]) > -1)
        {
            return true;
        }
    }
    return false;
}

function sentencegenerator()
{
    let words = [];
    let mlarray = mLText.split(" ");
    let arrayindex=0;

    for(let i=0; i < mlarray.length; i++)
    {
        let tildaindex = mlarray.indexOf("~");
        mlarray[tildaindex]= inputarray[arrayindex];
        arrayindex++;
    }

    document.getElementById('output1').value= mlarray.join(" ");

}