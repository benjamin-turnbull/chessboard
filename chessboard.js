let chessboard = "#";
let lines = 0;

for (let i = 1; ; i++) {
	if (lines == 8) {
		break;
	}
	else if (chessboard.length == 8) {
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