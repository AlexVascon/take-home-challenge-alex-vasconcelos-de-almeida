# Welcome
Welcome to the take home coding challenge. To get started you'll need:
- git
- yarn or npm

To start the challenge clone this repo to you machine and switch to a new branch.
- [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repo to your own github account
- `git clone <reponame>`

To start the app run the following
commands from you command line from the root of the project:
- `yarn` or `npm install`
- `yarn start` or `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view the React app
running in the browser.

## Project

You're going to work on a mini Game of Thrones wiki. If you open the app
you see the app always starts on the page of Jon Snow. There are three types of pages:
- Character pages, containing some info on the character, which books the character appears in. And which to which houses he is alleged to.
- Book pages, containing all the characters which appear in the book
- House pages, containing some info on the house, a list of its members and which houses are cadet branches of the house.

Clicking on a character, book or house will forward you to the corresponding page.

## Problem

However, there are a few problems with the current app. It is up to you to fix these bugs and then implement some 
extra features.

The bugs currently in the app are:
- Somehow in the description of the characters and houses you see url's instead of
  the names of the resources they represent. Also, they do not to link to a new page, which they should.
- Very often the sentences aren't complete due to missing data,
  like for Jon Snow we do not have the
  spouse so the description says `Jon Snow is married to <blank>`.
  In this case we would like to remove that sentence from the description altogether.
- The links in House pages do not work.
- Some resources do not have a `name` in that case some other property
  should be rendered so we can go that resource. e.g. the second and
  third characters in Book `A Dance with Dragons` resource `https://anapioficeandfire.com/api/books/5`

## Extra features

Try to implement as much of the following extra features:
- Add a button somewhere in the app which always brings you back to start position,
  i.e. the Jon Snow Page.
- Implement a button which brings you to a random page.
- At this point the items load one by one, make it so, that the page waits for all
  items to load (while showing a spinner of sorts) and then render the entire list at once.
- Sort all lists on alphabetic order by the rendered name.
- Create a switch (checkbox), which when turned on filters all male characters from the list.

## Hand in exercise

To finish the exercise please commit and push all your changes
to your branch and make [a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to the original repository.
