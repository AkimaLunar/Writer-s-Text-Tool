$(function(){
    // Text Analyzers
    function textToArray(str){
        return str.toLowerCase().split(/[ ,!.";:-\[\]()]+/).filter(function(value){
            return /([A-Za-z|'])+/.test(value);
        });
    };

    function wordCount(arr){
        return arr.length;
    }

    function uniqueWordCount(arr){
        return arr.filter(function(value, index, self){
            return self.indexOf(value) === index;
        }).length;
    }

    function averageWordLength(arr){
        var length = arr.length;
        var sum =arr[0].length;
        for (i=1;i<length;i++) {
            sum+=arr[i].length;
        }
        return Math.round(sum/length);

    }

    function generateReport(str) {
        var text = textToArray(str);
        console.log(text);
        var reportWordCount = wordCount(text);
        var reportUniqueWordCount = uniqueWordCount(text);
        var reportAverageWordLength = averageWordLength(text);
        var html = '<dt>Word count</dt><dd>'+ reportWordCount +'</dd><dt>Unique word count</dt><dd>'+ reportUniqueWordCount +'</dd><dt>Average word length</dt><dd>' + reportAverageWordLength + '</dd>'
        return html;
    }

    $('#textAnalyzer').submit(function(event){
        event.preventDefault();
        var userInput = $('#user-text').val();
        var report = generateReport(userInput);
        $('.text-report').empty();
        $(report).appendTo(".text-report").hide().fadeIn(300);
    })
})

var TEXT = "Mean (aka Arithmetic Mean, Average) - The sum of all of the numbers in a list divided by the number of items in that list. For example, the mean of the numbers 2, 3, 7 is 4 since 2+3+7 = 12 and 12 divided by 3 [there are three numbers] is 4.";

