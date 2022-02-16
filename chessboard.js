let chessboard = "#";
let lines = 0;
let width = 8;
let length = 8;

for (let i = 1; ; i++) {
	if (lines == length) {
		break;
	}
	else if (chessboard.length == width) {
	console.log(chessboard);
	chessboard = "";
	i -= 2;
	lines++;
	}
	else if ((i % 2) == 0) {
		chessboard += "#";
	}
	else {
		chessboard += " "
	}
}