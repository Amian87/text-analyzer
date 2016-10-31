 
 $(document).ready(function(){
 	$('button').click(function(){
 		$('').addClass('.hidden');
 		
 		var userText = $('#user-text').val();

 		// Total word count
		var wordCount = userText.split(/\s/).length;;
		$('.word-count').text(wordCount);
		console.log('hey ' + wordCount);

		
		// Unique word count
		var textArray = userText.split(" ");
		var compareArray = userText.split(" ");

			var uniqueWordCount = 1;
		    
		    if(textArray.indexOf(compareArray) === -1){
        		console.log(uniqueWordCount++);
       		}

		

		//Average word length in characters
		var totalCharacters = userText.replace(/\s+/g, '').split('').length;
		var averageWordLength = totalCharacters / wordCount;
		$('.average-word').text(averageWordLength);
		
		//Average sentence length
		var numberOfSenteces = userText.split('\n').length;
		// console.log(numberOfSenteces); 


		//     var textArray = userText.split(" ");
		//     var uniqueWord = 1;
		//     for (var i = 0 ; i < textArray.length; i++){
		//            if (textArray[i] !== textArray[i]) {
		//             console.log(uniqueWord++);
		                
		            
		//          }

		//         }
		           
 	});
 });