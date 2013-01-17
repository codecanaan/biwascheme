Console = {}

Console.puts = function(str, no_newline) {
  var console;
  var text;
  console = $("#bs-console");
  if (console[0]) {
	text = _.escape(str + (no_newline ? "" : "\n"));
	var span = $("<span>");
	span.html(text.replace(/\n/g,"<br>").replace(/ /g,"&nbsp;"));
	console.append(span);
  }
  console = $('#bs-console-plain');
  if (console[0]) {
	text = _.escape(str + (no_newline ? "" : "\n"));
	console.append(text);
  }
};

Console.p = function (/*ARGS*/){
  Console.puts("p> "+_.map(_.toArray(arguments), BiwaScheme.inspect).join(" "));
};
