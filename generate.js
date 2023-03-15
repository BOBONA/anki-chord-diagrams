let notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2"];
// the list of notes used as the root of chords
let noteSymbols = [
	["C", 0],
  ["C\\sharp", 1], ["D\\flat", 1],
  ["D", 2],
  ["D\\sharp", 3], ["E\\flat", 3],
  ["E", 4],
  ["F", 5],
  ["F\\sharp", 6], ["G\\flat", 6],
  ["G", 7],
  ["G\\sharp", 8], ["A\\flat", 8],
  ["A", 9],
  ["A\\sharp", 10], ["B\\flat", 10],
  ["B", 11]
];
// the list of chord patterns to use with the notes
let chordPatterns = [
	["^{\\Delta7}", [0, 4, 7, 11]],
  ["^7", [0, 4, 7, 10]],
  ["^{-7}", [0, 3, 7, 10]],
  ["^{ø7}", [0, 3, 6, 10]],
  ["^{\\circ7}", [0, 3, 6, 9]]
];
// generate the chords
for (let i in noteSymbols) {
	let noteSymbol = noteSymbols[i];
	for (let j in chordPatterns) {
    let pattern = chordPatterns[j];
    let chordNotes = [];
    for (let k in pattern[1]) {
      chordNotes.push(notes[noteSymbol[1] + pattern[1][k]]);
    }
    console.log("\\(" + noteSymbol[0] + pattern[0] + "\\)\t" + chordNotes.join(" "));
  }
}
