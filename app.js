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
		// console.log(textArray);





		//Average word length in characters
		var totalCharacters = userText.replace(/\s+/g, '').split('').length;
		var averageWordLength = (totalCharacters / wordCount);
		$('.average-word').text(averageWordLength);
		
		

		//Average sentence length
		var numberOfSentences = userText.split(/\.\s/);
		console.log(numberOfSentences);

		for (var i = 0; i < numberOfSentences.length; i++) {
			
			var lengths = []
			lengths.push(numberOfSentences[i].length);
			console.log(lengths);

		}


		    // var textArray = userText.split(" ");
		    // var uniqueWord = 1;
		    // for (var i = 0 ; i < textArray.length; i++){
		    //        if (textArray[i] !== textArray[i]) {
		    //         console.log(uniqueWord++);
		                
		            
		    //      }

		    //     }
		           
 	});
 });





  	// var uniqueWordCount = 1;


		//     for (var i = 0 ; i < textArray.length; i++){
		//            if (textArray.indexOf(compareArray) != -1) {
		//             console.log(uniqueWordCount++);
		  		            
		//          }

		//         }
		    
		//     if(textArray.indexOf(compareArray) != -1){
  //       		console.log('hey');
  //      		}


  // 		var counts = {};
		// for (var i = 0; i < textArray.length; i++) {
  //   	counts[textArray[i]] = 1 + (counts[textArray[i]] || 0);
		// }
		
  // 		var results = [];

 	// 	for(var i=0; i<counts.length; i++) {
  // 		for(key in counts[i]) {
  //   	if(counts[i][key].indexOf(counts)!=-1) {
  //     	results.push(counts[i]);
  //     	console.log(results);
		//     }
		//   }
		// }