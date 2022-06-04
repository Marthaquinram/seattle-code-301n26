# Updating Resources

## DEI Reminder

In our next class we will discuss Diversity, Equity and Inclusion.  Be sure to complete [the reading assignment](https://codefellows.github.io/code-301-guide/curriculum/class-14/DISCUSSION) before class begins in order to acheive full credit for the activity.

## Exam Preview

- Exam will take place on Saturday, June 11th.
- I will be giving a review lecture on Saturday morning before the exam.
- You will be given starter code that will have minor bugs in it. You will need to fix the bugs and then add some features onto the code.
- There will be tests that you can run so you will know if you have completed the tasks correctly.
- You will need to deploy both your front-end and back-end.
- You will have 4 hours to complete the exam.
- You must be present in Remo, sitting alone at a table while taking the exam.
- You may use any resource except for other people.
- If you are stuck on a "gituation", ask the instructor for assistance.
- TAs may not help you complete the exam.
- There will be an option for one retake if you happen to fail the exam the first try.

## Overview

Today we do the final step in full CRUD funtionality for our database. This step is to implement the ability to update records that exist in our database.

## Daily Plan

- Warm-up exercise
- Exam Preview
- Review code challenges
- Introduce new code challenges
  - repl.it demo: <https://replit.com/@HexxKing1/301n26-Code-Challenges-String-Manipulation#index.js>
- Creating, Deleting & Updating Resources
- Code demo
- Lab preview

## Learning Objectives

As a result of completing lecture 13 of Code 301, students will:

- Describe and Define
  - UPDATE
  - PUT
- Be able to update a resources in a mongo database
- Be able to update a resource instantly in a React application and have that resource state persist on reload

## Notes

1. Why do we need to talk about Diversity and Inclusion?

- teams work better while feeling comfortable with each other
- it's the "right" thing to do to treat people nice
- we are working with people!
- it's big world and lots of folx to share it!

1. What does the U stand for in CRUD?

UPDATE

1. How do we find a record by id and update it in Mongoose?

`Model.findByIdAndUpdate()`

1. Sending an axios request to update a record:
  ```javaScript
  const SERVER = 'http://localhost:3001';
  // id of the record to update
  const id = 2;
  // the entire record with the updated information
  const updatedRecord = {name: 'bobby', age: 105};

  axios.put(`${SERVER}/${id}`, { recordToUpdate: updatedRecord });
  ```

1. Updating a record server side:
  ```javaScript
  app.put('/someRoute/:id', callback);

  callback(request, response) {
    const record = request.body.recordToUpdate;
    const id = request.params.id;

    Model.findOneAndUpdate(id, record);
  }
  ```

1. Updating a record server side when the record is nested inside of a user object (like the books in the user)
  ```javaScript
  app.put('/someRoute/:index', callback);

  callback(request, response) {
    const email = request.body.email; // send the email in the body as well as the record
    const record = request.body.recordToUpdate;
    const index = request.query.params.index;

    Model.findOne({ email }, (err, person) => {
      if(err) console.error(err);
      // now that we have the user, we need to replace the record
      const newBooks = person.books.splice(index, 1, record);
      // replace the books array with the new books array
      person.books = newBooks;
      // save the updated person in the DB
      person.save()
    })
  }
  ```

## Feedback Overview

- "Still struggling with errors, yet i am getting them fixed at the rate i am breaking them so that's good."
- "Building our API to handle tasks has been fantastic, as has going back and re-looking at how to use objects a little deeper."
- "I just don't know anyone who would appreciate the pace. I think this program should be advertised as a certification program for experienced coders, not for total newbs...There's no time to digest and practice the small concepts before one is expected to perform by completing an extremely difficult (for a newb) lab."
- "The extra reviews we have been doing on Fridays for those who need it (me). Since we have been moving quick it’s nice to taking that extra step back and re review everything "
- "Had a long weekend, but the video lecture from the last cohort was great. The students asked great questions too, so I feel like I didn't miss much."
- "I really like the demos because it just shows us the basics of what to do, then we have the challenging part of figuring out what to do with that info."
