  $(document).ready(function(){
 	
 	$('button').click(function(){
 		
 		$('.text-report').removeClass('hidden');

 		var userText = $('#user-text').val();

 		// Total word count 
		var wordCount = userText.split(/\s/).length;
		// console.log(wordCount);
		$('.word-count').text(wordCount);
		
		// Unique word count
		var textArray = userText.split(" ");
		var compareArray = userText.split(" ");


		var results = []
		var counter = 0

		for (var i = 0; i < textArray.length; i++){
			if (results.indexOf(textArray[i]) === -1 ){
				results.push(textArray[i]);
				console.log(results);
			}

		}




		//Average word length in characters
		var totalCharacters = userText.replace(/\s+/g, '').split('').length;
		var averageWordLength = (totalCharacters / wordCount);
		$('.average-word').text(averageWordLength);
		
		

		// Average sentence length
		var numberOfSentences = userText.split(/\.\s/).length;
		var averageSentenceLength = totalCharacters / numberOfSentences;

		console.log(averageSentenceLength);

		// for (var i = 0; i < numberOfSentences.length; i++) {
		// 	var lengths = []
		// 	lengths.push(numberOfSentences[i].length);
		// 	console.log(lengths);

		// }


		    // var textArray = userText.split(" ");
		    // var uniqueWord = 1;
		    // for (var i = 0 ; i < textArray.length; i++){
		    //        if (textArray[i] !== textArray[i]) {
		    //         console.log(uniqueWord++);
		                
		            
		    //      }

		    //     }
		           
 	});
 });





  	