$(document).ready(function(){$("button").click(function(){$(".text-report").removeClass("hidden");var t=$("#user-text").val(),e=t.split(/\s/).length;$(".word-count").text(e);for(var l=t.split(" "),o=t.split(" "),n=[],r=0,s=0;s<l.length;s++)n.indexOf(l[s])===-1&&(n.push(l[s]),console.log(n));var a=t.replace(/\s+/g,"").split("").length,i=a/e;$(".average-word").text(i);var c=t.split(/\.\s/).length,g=a/c;console.log(g)})});