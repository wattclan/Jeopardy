// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds(api) {
    // console.log(api)
    catNum = []
    catId = []
    apiId = []
    for(let i=0; i<100; i++){
        catNum.push(i)
    }
    for(let i=0; i<5; i++){
        id = Math.floor(Math.random()*100)
        catId.push(id)
        catNum.splice(id,1)
        // console.log(catId)
        // console.log(catNum.length)
    }
    if(catNum.length !== 95){
        console.log('inside the duplicate return')
        setupAndStart()
    }else{
        for(x of catId){
            apiId.push(api.data[x].id)
        }
    }
    return apiId
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
    console.log(catId)
    let clueArray = [];
    for(let i=0; i<=catId.length; i++){
        console.log('inside the for loop')
        for(let j=0; j<5; j++){
            console.log(catId[i].data.clues[j].question)
            console.log(catId[i].data.clues[j].answer)
            
        }
        
    // console.log(catId[i].data.clues[i].answer)
    // console.log(catId[i].data.clues[i].showing)
    }

}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
   


}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

$('#start').on('click', async function setupAndStart(e) {
    const jeopardy = await axios.get('http://jservice.io/api/categories', {params: {count:100}})
    // const clues = await axios.get('http://jservice.io/api/categories/')
    // console.log(jeopordy.data[0].id)  
    const apiId = getCategoryIds(jeopardy)
    console.log(apiId)
    for(ids of apiId){
            let category = await axios.get('http://jservice.io/api/category', {params: {id:`${ids}`}})
            categories.push(category)
            console.log(categories)
    }
    category = getCategory(categories)
    
})


/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO