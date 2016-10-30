 $(document).ready(function(){

 	$('button').click(function(){
 		$('text-report').removeClass('.hidden');
 		
 		var userText = $('#user-text').val();

 		// Total word count
		var wordCount = userText.split(" ").length;
		console.log(wordCount);

		//Average word length in characters
		var totalCharacters = userText.replace(/\s+/g, '').split('').length;
		var averageWordLength = totalCharacters / wordCount;
		console.log(averageWordLength);

		// Unique word count

		// var textArray = userText.split('');

		// var uniqueWords = 1;
		// for (var i = 0; i < textArray.length; i++){
		//     if(textArray[i] == " ") {
		//         console.log(uniqueWords++);
		//     }    
		// }



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