# Explain the Midterms

### capitalizeSentences

1. Make a new empty string that will hold our result.
2. Loop through each index in our paragraph.
3. If the paragraph's character at the current index of the loop - 2 is equal to a period or the index is 0:
4. Add to the result string the character at our current index, but uppercased.
5. Otherwise:
6. Add the lowercased version instead.
7. Start the loop with then next index.
8. When the loop is over, return the result.


### isValidPassword

1. Create a statement that detects whether a password that is given is less than 12 characters.
2. If the statement detects a match, it will automatically exclude that password. 
3. Creates a loop that goes through each index of the given password.
4. This next line homes in on the character and checks to see if it is a space.
5. The return statement checks it and if it has a match it excludes it.
6. Being that all the bad parameters have been tested for, the next return allows the password to pass and accept the password.

### MakeHalfSquaresAlt

1. The first line creates an empty array and names it results. 
2. This next line creates a loop that goes through each index of the given array.
3. Line 42 takes each number in the array, multiplies it by itself then divides it by 2. Then it takes each value and inserts it into the empty array we made (results)
4. Lastly, the results are returned.


### deletMiddleLetters