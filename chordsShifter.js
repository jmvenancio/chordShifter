var notesToNumMap = {
    'A':  1,
    'A#': 2 ,
    'B':  3,
    'C':  4,
    'C#': 5,
    'D':  6,
    'D#': 7,
    'E':  8,
    'F':  9,
    'F#': 10,
    'G': 11,
    'G#': 12
};

var numToNotesMap = {
    1: 'A',
    2: 'A#',
    3: 'B',
    4: 'C',
    5: 'C#',
    6: 'D',
    7: 'D#',
    8: 'E',
    9: 'F',
    10: 'F#',
    11: 'G',
    12: 'G#'
};

export function shiftChord(chord, shiftNum){
	var numNote = notesToNumMap[chord];
    console.log(numNote)
	var shiftedNoteNum = (numNote + shiftNum) % 12;
    if(shiftedNoteNum <= 0){
        shiftedNoteNum += 12;
    }
    console.log(shiftedNoteNum)
    console.log(numToNotesMap[shiftedNoteNum])
	return numToNotesMap[shiftedNoteNum];
}