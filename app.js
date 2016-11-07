  $(document).ready(function(){
 	
 	$('button').click(function(){
 		
 		$('.text-report').removeClass('hidden');

 		var userText = $('#user-text').val();

 		anlayzeText(userText);

 		function anlayzeText(userText){

 		// Total word count 
		var wordCount = userText.split(/\s/).length;
		$('.word-count').text(wordCount);
		
		// Unique word count
		var textArray = userText.split(" ");

		var results = []
		var counter = 0

		for (var i = 0; i < textArray.length; i++){
			if (results.indexOf(textArray[i]) === -1 ){
				results.push(textArray[i]);
			}

		}

		var uniqueWordCount = results.length
		$('.unique-words').text(uniqueWordCount);

		//Average word length in characters
		var totalCharacters = userText.replace(/\s+/g, '').split('').length;
		var averageWordLength = (totalCharacters / wordCount);
		$('.average-word').text(averageWordLength);
		

		// Average sentence length
		var numberOfSentences = userText.split(/\.\s/).length;
		var averageSentenceLength = totalCharacters / numberOfSentences;
		$('.average-sentence').text(averageSentenceLength);

	  }
 	});
 });

