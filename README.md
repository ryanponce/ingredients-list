# Ingredients List

A small web app to show a list of ingredients.

I chose to build this app with:

- React
- Next
- TypeScript
- Styled Components

I tried to keep the state management as light weight as I could. I contemplated using Redux (since that's what you use at Ritual). But since the state is so small, I chose to use React Context. I could have also done this using local state, but wanted to make it a little more robust to show off some of my more advanced knowledge.

I was able to get through most of the steps, except for searching on multiple fields.

## Where did you find difficulty in building a solution?

The trickiest part for me was implementing searching. I noticed a last minute bug when I reached time. Since I use the index for the `id` of the ingredient (it didn't have one in the data), navigating from a search result list, will probably take you to the wrong ingredient. I can probably fix this by adding a separate search results data in the store or adding a unique id to each ingredient. Since most APIs have an `id` associated with each entry, I don't think this would be an issue in the real world.

## Which parts were fun and inspirational to you?

I enjoyed trying to build out small components and keeping everything clean and organized as possible. I also enjoyed using the router to keep track of what ingredient is selected. Learning Ember back in the day taught me to really keep the url in the back of my mind and make sure to not break the web. I wanted to make sure the back and forward buttons work and usually in an app like this, the url could be shared so I wanted to make sure the state of the url worked with the data.

## If you had more time, what would you do next?

If I had more time, I would definitely clean some stuff up. I would enhance some the layout. Such as having the nav list on the left and the details on the right scroll independently. I would also add some hover effects, transitions, and empty states to the application. Lastly, I would also try to fix the last minute search issuer I found as well as some general cleanup with the url, such as adding a 404 page or something.

## Conclusion

Overall, I think I did pretty well. I tried to keep it just under 4 hours so I had to cut some corners but I was able to get to all of the Levels as well as some of the bonus items.
