// ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // 1. Array.prototype.some() // is at least one person 19 or older?
    const isAdult = people.some(function(person) {
        const currentYear= (new Date()).getFullYear();
        if(currentYear - person.year >= 19) {
            return true;
        }
    });
    // console.log(isAdult); 
    // we can also do console.log({isAdult}); which shows us the value in the console

                            // shorter version 
                            // const isAdult = people.some(person => {
                            //   const currentYear = (new Date()).getFullYear();
                            //   return currentYear - person.year >= 19;
                            // });

                            // even shorter version
                            // const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19 );


    // 2. Array.prototype.every() // is everyone 19 or older?
    const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19 );
    // console.log({allAdults});

    // 3. Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const comment = comments.find(function(comment) {
        if(comment.id === 823423) {
            return true;
        }
    });
    // console.log(comment);

    // shorter version
    // const comment = comments.find(comment => comment.id === 823423);

    // 4. Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // option 1 
    comments.splice(index, 1);
    // browser console
    // comments or console.table(comments); to see

    //option 2
    // this creates a new array and spreads the updated array into it, so this way in the console you can log the previous comments array and also the newComments array without the deleted item
    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ];