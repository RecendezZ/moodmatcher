
    

        const output = document.querySelector('#resultMessage');
        const resultNote = document.querySelector('#resultNote');
        const resultImage = document.querySelector('#resultImage');

        // declare variables that will later be used 
        let outputMessage = '';
        let imgAlt = '';
        let imgSrc = '';

        // Image srC the links for the images for each emoji
        const imageUrls = {
            Happy: ' https://cdn-icons-png.flaticon.com/512/742/742751.png',
            Sad: 'https://cdn-icons-png.flaticon.com/512/742/742752.png',
            Calm: 'https://cdn-icons-png.flaticon.com/512/5786/5786952.png'
        };

        // grabs elements by id using querySelector from the form

        const moodForm = document.querySelector('#moodForm');
        const resultSection = document.querySelector('#result');
        const resetBtn = document.querySelector('#resetBtn');
        const container = document.querySelector('#container');
        const moodSelect = document.querySelector('#mood');
        const noteInput = document.querySelector('#note');

        // Submit function for button and prevents the information from being sent with out h 
        moodForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // creates an object to store the form called formdata 
            const formData = {
                // saves the selected feeling from the dropdown
                mood: moodSelect.value,
                // saves the note in the input field the user put in
                note: noteInput.value
            };

            // See the data in the console
            console.log('Form Data:', formData);
            console.log('Mood:', formData.mood);
            console.log('Note:', formData.note);

            // using dot notion it saves the data from the form for the mood and not 
            const userMood = formData.mood;
            const userNote = formData.note;

            // removes classes from each string  in the container 
            container.classList.remove('happy', 'sad', 'calm');

            // if and else to match how you feel 
            // checks to see if the user is happy
            if (userMood === 'Happy') {
                // shows the message to display user is happy using out
                outputMessage = '🎉 You are feeling happy! This is great you are a happy camper.';
                // this sets the happy message for imgAlt
                imgAlt = 'Happy emoji';
                // renders the image to the user for imgSrc
                imgSrc = imageUrls.Happy;
                // adds the class happy to be styled in the container for css
                container.classList.add('happy');
                // uses if/else to see if the user is sad then render the fallowing
            } else if (userMood === 'Sad') {
                // if user is sad show the out put message as fallows
                outputMessage = "💙 You are feeling sad. It's normal to feel this way sometimes.Keep your head up love!!!💙  Just know today is nothing tomorrow can't fix.";
                // shows the sad emoji sting where the imgAlt variable has been declared 
                imgAlt = 'Sad emoji';
                //  shows the sad emoji sting where the imgage  url variable has been declared 
                imgSrc = imageUrls.Sad;
                // adds a classlist to the element sad  to be styled in the css 
                container.classList.add('sad');
                // uses else if to respond when the user calm fallows the same process above for each line of code for the calm submit 
            } else if (userMood === 'Calm') {
                outputMessage = '🧘 You are feeling calm. Peace is beautiful. Enjoy this tranquility. Embrace your calmness have some tea and just meditate. Life is precious and you enjoy it at level of  peace. Your bless!!!Enjoy your day';
                imgAlt = 'Calm emoji';
                imgSrc = imageUrls.Calm;
                container.classList.add('calm');
                // uses else if to tell them how you feel if you don't feel any of the above 
            } else {
                outputMessage = 'Tell me how you feel!';
                imgAlt = '';
                imgSrc = '';
            }

            // updates the dom method using textcontent so we can create a users note with imgSrc
            output.textContent = outputMessage;
            resultNote.textContent = userNote || 'No note provided';
            resultImage.src = imgSrc;
            resultImage.alt = imgAlt;
// add a class list to add the message and the emoji
            resultSection.classList.add('message');
        });

        // Reset button that clears the displayed result to start process over   for all form when click is called by javascript 
        resetBtn.addEventListener('click', function () {
            // when user clicks reset it clears all the falling areas below to start over
            moodSelect.value = '';
            noteInput.value = '';
            output.textContent = '';
            resultNote.textContent = '';
            resultImage.src = '';
            resultImage.alt = '';
            // removes the message that was shown to submit the form over 
            resultSection.classList.remove('message');
            // removes the css that was syled for happy sad and calm 
            container.classList.remove('happy', 'sad', 'calm');
            // console logs tell me how your feeling in console
            console.log('Tell me how your feelings');
        });
